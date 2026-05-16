function renderModalPage(container) {
  container.innerHTML = "<h2>Modal</h2>";

  // Reusable helper
  function addModalButton(label, size) {
    const modal = createModal({
      title: `${label} Modal`,
      content: `
        <p>
          This is a ${label.toLowerCase()} modal example.
        </p>
      `,
      size: size
    });

    const btn = createButton({
      label: label,
      variant: "primary"
    });

    btn.style.margin = "6px";

    btn.addEventListener("click", () => {
      modal.open();
    });

    container.appendChild(btn);

    document.body.appendChild(modal.element);
  }

  // ===== Modal Sizes =====
  addModalButton("Small Modal", "sm");
  addModalButton("Medium Modal", "md");
  addModalButton("Large Modal", "lg");
  addModalButton("Extra Large Modal", "xl");
  addModalButton("Fullscreen Modal", "fullscreen");
}