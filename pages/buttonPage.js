// pages/buttonPage.js

function renderButtonPage(container) {
  container.innerHTML = "<h2>Buttons</h2>";

  const variants = [
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark",
    "link"
  ];

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

  variants.forEach(variant => {
    const btn = createButton({
      label: variant.toUpperCase(),
      variant: variant,
      size: "md"
    });

    btn.style.marginRight = "10px";
    btn.style.marginBottom = "10px";

    container.appendChild(btn);
  });
}