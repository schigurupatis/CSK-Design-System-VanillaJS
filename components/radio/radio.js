function createRadioGroup({
  label = "",
  name = "radio",
  options = [],
  value = "",
  variant = "primary",
  size = "md",
  disabled = false,
  onChange = null
}) {
  const wrapper = document.createElement("div");

  // Label
  if (label) {
    const labelEl = document.createElement("p");
    labelEl.innerText = label;
    wrapper.appendChild(labelEl);
  }

  const group = document.createElement("div");
  group.classList.add("radio-group");

  options.forEach(opt => {
    const item = document.createElement("label");
    item.classList.add(
      "radio-item",
      `radio-${variant}`,
      `radio-${size}`
    );

    if (disabled || opt.disabled) {
      item.classList.add("disabled");
    }

    const input = document.createElement("input");
    input.type = "radio";
    input.name = name;
    input.value = opt.value;

    if (opt.value === value) {
      input.checked = true;
    }

    if (disabled || opt.disabled) {
      input.disabled = true;
    }

    input.addEventListener("change", () => {
      if (onChange) onChange(input.value);
    });

    const custom = document.createElement("span");
    custom.classList.add("radio-custom");

    const text = document.createElement("span");
    text.innerText = opt.label;

    item.appendChild(input);
    item.appendChild(custom);
    item.appendChild(text);

    group.appendChild(item);
  });

  wrapper.appendChild(group);

  return wrapper;
}