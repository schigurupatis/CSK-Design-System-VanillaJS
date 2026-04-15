// button.js

function createButton({
  label = "Button",
  variant = "primary",
  size = "md",
  disabled = false,
  onClick = null
}) {
  const button = document.createElement("button");

  // // Base class
  // button.classList.add("btn");

  // // Variant class
  // button.classList.add(`btn-${variant}`);

  // // Size class
  // button.classList.add(`btn-${size}`);

  button.classList.add("btn", `btn-${variant}`, `btn-${size}`);

  // Text
  button.innerText = label;

  // Disabled
  button.disabled = disabled;

  // Event
  if (onClick && !disabled) {
    button.addEventListener("click", onClick);
  }

  return button;
}





// const app = document.getElementById("app");

// // Primary Large Button
// app.appendChild(
//   createButton({
//     label: "Primary Large",
//     variant: "primary",
//     size: "lg",
//     onClick: () => alert("Primary clicked")
//   })
// );

// // Secondary Small Button
// app.appendChild(
//   createButton({
//     label: "Secondary Small",
//     variant: "secondary",
//     size: "sm",
//     onClick: () => alert("Secondary clicked")
//   })
// );

// // Outline Disabled Button
// app.appendChild(
//   createButton({
//     label: "Disabled",
//     variant: "outline",
//     disabled: true
//   })
// );