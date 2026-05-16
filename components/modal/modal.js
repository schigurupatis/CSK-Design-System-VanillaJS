function createModal({
  title = "Modal Title",
  content = "Modal content",
  closable = true,
  footer = true,
  size = "md"
}) {
  // Overlay
  const overlay = document.createElement("div");
  overlay.classList.add("modal-overlay");

  // Modal
  const modal = document.createElement("div");
//   modal.classList.add("modal");
modal.classList.add("modal", `modal-${size}`);

  // ===== HEADER =====
  const header = document.createElement("div");
  header.classList.add("modal-header");

  const titleEl = document.createElement("div");
  titleEl.classList.add("modal-title");
  titleEl.innerText = title;

  header.appendChild(titleEl);

  // Close button
  if (closable) {
    const closeBtn = document.createElement("button");
    closeBtn.classList.add("modal-close");
    closeBtn.innerHTML = "&times;";

    closeBtn.addEventListener("click", closeModal);

    header.appendChild(closeBtn);
  }

  // ===== BODY =====
  const body = document.createElement("div");
  body.classList.add("modal-body");

  if (typeof content === "string") {
    body.innerHTML = content;
  } else {
    body.appendChild(content);
  }

  // ===== FOOTER =====
  let footerEl;

  if (footer) {
    footerEl = document.createElement("div");
    footerEl.classList.add("modal-footer");

    const cancelBtn = createButton({
      label: "Cancel",
      variant: "secondary"
    });

    const saveBtn = createButton({
      label: "Save",
      variant: "primary"
    });

    cancelBtn.addEventListener("click", closeModal);

    saveBtn.addEventListener("click", () => {
      alert("Saved!");
      closeModal();
    });

    footerEl.appendChild(cancelBtn);
    footerEl.appendChild(saveBtn);
  }

  // ===== APPEND =====
  modal.appendChild(header);
  modal.appendChild(body);

  if (footerEl) {
    modal.appendChild(footerEl);
  }

  overlay.appendChild(modal);

  // ===== FUNCTIONS =====
  function openModal() {
    overlay.classList.add("show");
  }

  function closeModal() {
    overlay.classList.remove("show");
  }

  // Close on overlay click
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      closeModal();
    }
  });

  // ESC key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeModal();
    }
  });

  return {
    element: overlay,
    open: openModal,
    close: closeModal
  };
}