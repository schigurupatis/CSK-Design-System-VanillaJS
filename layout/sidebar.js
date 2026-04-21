// // layout/sidebar.js

// function createSidebar(onNavigate, activeKey = "button") {
//   const sidebar = document.createElement("div");

//   const menuItems = [
//     { name: "Button", key: "button" },
//     { name: "Input", key: "input" },
//     { name: "Modal", key: "modal" },
//     { name: "Dropdown", key: "dropdown" }
//   ];

//   let activeElement = null;

//   menuItems.forEach(item => {
//     const menuItem = document.createElement("div");
//     menuItem.innerText = item.name;
//     menuItem.classList.add("sidebar-item");

//     // ✅ Set active on load
//     if (item.key === activeKey) {
//       menuItem.classList.add("active");
//       activeElement = menuItem;
//     }

//     menuItem.addEventListener("click", () => {
//       // remove previous
//       if (activeElement) {
//         activeElement.classList.remove("active");
//       }

//       // set new active
//       menuItem.classList.add("active");
//       activeElement = menuItem;

//       // navigate
//       onNavigate(item.key);
//     });

//     sidebar.appendChild(menuItem);
//   });

//   return sidebar;
// }



function createSidebar(onNavigate, activeKey = "button") {
  const sidebar = document.createElement("div");

  let activeElement = null;

  // ===== Helper to create item =====
  function createItem(item, isChild = false) {
    const el = document.createElement("div");
    el.innerText = item.name;

    el.classList.add(isChild ? "sidebar-child-item" : "sidebar-item");

    if (item.key === activeKey) {
      el.classList.add("active");
      activeElement = el;
    }

    el.addEventListener("click", (e) => {
      e.stopPropagation();

      if (activeElement) {
        activeElement.classList.remove("active");
      }

      el.classList.add("active");
      activeElement = el;

      onNavigate(item.key);
    });

    return el;
  }

  // ===== Normal items =====
  const mainItems = [
    { name: "Button", key: "button" },
    { name: "Dropdown", key: "dropdown" }
  ];

  mainItems.forEach(item => {
    sidebar.appendChild(createItem(item));
  });

  // ===== Form Inputs Group =====
  const group = document.createElement("div");
  group.classList.add("sidebar-group");

  const groupTitle = document.createElement("div");
  // groupTitle.innerText = "Form Inputs ▼";
  groupTitle.innerText = group.classList.contains("open")
  ? "Form Inputs ▲"
  : "Form Inputs ▼";
  groupTitle.classList.add("sidebar-group-title");

  const childrenContainer = document.createElement("div");
  childrenContainer.classList.add("sidebar-children");

  const childItems = [
    { name: "Input", key: "input" },
    { name: "Select", key: "select" },
    { name: "Radio", key: "radio" },
    { name: "Checkbox", key: "checkbox" }
  ];

  childItems.forEach(item => {
    childrenContainer.appendChild(createItem(item, true));
  });

  // Toggle expand
  groupTitle.addEventListener("click", () => {
    group.classList.toggle("open");
  });

  group.appendChild(groupTitle);
  group.appendChild(childrenContainer);

  sidebar.appendChild(group);

  // ✅ Auto expand if active inside group
  if (childItems.some(item => item.key === activeKey)) {
    group.classList.add("open");
  }

  return sidebar;
}