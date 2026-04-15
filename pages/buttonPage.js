// pages/buttonPage.js

function renderButtonPage(container) {
  container.innerHTML = "<h2>Variants</h2>";

  
  // const variants = [
  //   "primary",
  //   "secondary",
  //   "success",
  //   "danger",
  //   "warning",
  //   "info",
  //   "light",
  //   "dark",
  //   "link"
  // ];

  // ===== Solid Buttons =====
  const solidTitle = document.createElement("h3");
  solidTitle.innerText = "Solid Buttons";
  container.appendChild(solidTitle);

  const solidVariants = [
    "primary", "secondary", "success", "danger",
    "warning", "info", "light", "dark"
  ];

  solidVariants.forEach(variant => {
    const btn = createButton({
      label: variant,
      variant: variant
    });

    btn.style.margin = "6px";
    container.appendChild(btn);
  });

  // ===== Outline Buttons =====
  const outlineTitle = document.createElement("h3");
  outlineTitle.innerText = "Outline Buttons";
  outlineTitle.style.marginTop = "20px";
  container.appendChild(outlineTitle);

  const outlineVariants = [
    "outline-primary", "outline-secondary", "outline-success",
    "outline-danger", "outline-warning", "outline-info",
    "outline-light", "outline-dark"
  ];

  outlineVariants.forEach(variant => {
    const btn = createButton({
      label: variant.replace("outline-", ""),
      variant: variant
    });

    btn.style.margin = "6px";
    container.appendChild(btn);
  });

  // ===== Sizes Section =====
  const sizeTitle = document.createElement("h3");
  sizeTitle.innerText = "Button Sizes";
  sizeTitle.style.marginTop = "20px";
  container.appendChild(sizeTitle);

  const sizes = ["sm", "md", "lg"];

  sizes.forEach(size => {
    const btn = createButton({
      label: `Size ${size.toUpperCase()}`,
      variant: "primary",
      size: size
    });

    btn.style.margin = "6px";
    container.appendChild(btn);
  });

  // container.appendChild(
  //   createButton({
  //     label: "Primary",
  //     variant: "primary",
  //     size: "md",
  //     onClick: () => alert("Primary clicked")
  //   })
  // );

  // container.appendChild(
  //   createButton({
  //     label: "Secondary",
  //     variant: "secondary",
  //     size: "md",
  //     onClick: () => alert("Primary clicked")
  //   })
  // );

  // container.appendChild(
  //   createButton({
  //     label: "Large",
  //     variant: "primary",
  //     size: "lg",
  //     onClick: () => alert("Primary clicked")
  //   })
  // );

  // variants.forEach(variant => {
  //   const btn = createButton({
  //     label: variant.toUpperCase(),
  //     variant: variant,
  //     size: "md"
  //   });

  //   btn.style.marginRight = "10px";
  //   btn.style.marginBottom = "10px";

  //   container.appendChild(btn);
  // });
}