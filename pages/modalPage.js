function renderModalPage(container) {
  container.innerHTML = "<h2>Modal</h2>";

  // Create modal
  const modal = createModal({
    title: "Delete Item",
    content: `
      <p>
        Are you sure you want to delete this item?
      </p>
    `
  });

  // Open button
  const openBtn = createButton({
    label: "Open Modal",
    variant: "primary"
  });

  openBtn.addEventListener("click", () => {
    modal.open();
  });

  container.appendChild(openBtn);

  // Append modal to body
  document.body.appendChild(modal.element);
}