function createDropdown({
  label = "Dropdown",
  items = []
}) {
  const wrapper = document.createElement("div");
  wrapper.classList.add("dropdown");
  const button = createButton({
    label: label,
    variant: "primary",
    size: "md"
  });
  const menu = document.createElement("div");
  menu.classList.add("dropdown-menu");
  items.forEach(item => {
    const menuItem = document.createElement("div");
    menuItem.classList.add("dropdown-item");
    menuItem.innerText = item.label;

    menuItem.addEventListener("click", () => {
      if (item.onClick) item.onClick();
      menu.classList.remove("show");
    });
    menu.appendChild(menuItem);
  });
  button.addEventListener("click", () => {
    menu.classList.toggle("show");
  });
  // Click outside closes menu
  document.addEventListener("click", (e) => {
    if (!wrapper.contains(e.target)) {
      menu.classList.remove("show");
    }
  });
  wrapper.appendChild(button);
  wrapper.appendChild(menu);
  return wrapper;
}