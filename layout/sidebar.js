// layout/sidebar.js

// layout/sidebar.js

function createSidebar(onNavigate) {
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

    menuItem.addEventListener("click", () => {
      // Remove previous active
      if (activeElement) {
        activeElement.classList.remove("active");
      }

      // Add active to current
      menuItem.classList.add("active");
      activeElement = menuItem;

      // Navigate
      onNavigate(item.key);
    });

    sidebar.appendChild(menuItem);
  });

  return sidebar;
}