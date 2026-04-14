// layout/sidebar.js

function createSidebar(onNavigate, activeKey = "button") {
  const sidebar = document.createElement("div");

  const menuItems = [
    { name: "Button", key: "button" },
    { name: "Input", key: "input" },
    { name: "Modal", key: "modal" }
  ];

  let activeElement = null;

  menuItems.forEach(item => {
    const menuItem = document.createElement("div");
    menuItem.innerText = item.name;
    menuItem.classList.add("sidebar-item");

    // ✅ Set active on load
    if (item.key === activeKey) {
      menuItem.classList.add("active");
      activeElement = menuItem;
    }

    menuItem.addEventListener("click", () => {
      // remove previous
      if (activeElement) {
        activeElement.classList.remove("active");
      }

      // set new active
      menuItem.classList.add("active");
      activeElement = menuItem;

      // navigate
      onNavigate(item.key);
    });

    sidebar.appendChild(menuItem);
  });

  return sidebar;
}