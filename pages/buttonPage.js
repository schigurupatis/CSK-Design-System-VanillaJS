// pages/buttonPage.js

function renderButtonPage(container) {
  container.innerHTML = "<h2>Buttons</h2>";

  container.appendChild(
    createButton({
      label: "Primary",
      variant: "primary",
      size: "md",
      onClick: () => alert("Primary clicked")
    })
  );

  container.appendChild(
    createButton({
      label: "Secondary",
      variant: "secondary",
      size: "md",
      onClick: () => alert("Primary clicked")
    })
  );

  container.appendChild(
    createButton({
      label: "Large",
      variant: "primary",
      size: "lg",
      onClick: () => alert("Primary clicked")
    })
  );
}