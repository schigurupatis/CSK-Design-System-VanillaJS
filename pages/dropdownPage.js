function renderDropdownPage(container) {
  container.innerHTML = "<h2>Dropdown</h2>";

  const dropdown = createDropdown({
    label: "Actions",
    items: [
      { label: "Edit", onClick: () => alert("Edit clicked") },
      { label: "Delete", onClick: () => alert("Delete clicked") },
      { label: "Share", onClick: () => alert("Share clicked") }
    ]
  });

  container.appendChild(dropdown);
}