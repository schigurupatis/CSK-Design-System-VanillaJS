function createCheckboxGroup({
  label = "",
  options = [],
  values = [],
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
  group.classList.add("checkbox-group");

  let selectedValues = [...values];

  options.forEach(opt => {
    const item = document.createElement("label");
    item.classList.add(
      "checkbox-item",
      `checkbox-${variant}`,
      `checkbox-${size}`
    );

    if (disabled || opt.disabled) {
      item.classList.add("disabled");
    }

    const input = document.createElement("input");
    input.type = "checkbox";
    input.value = opt.value;

    if (selectedValues.includes(opt.value)) {
      input.checked = true;
    }

    if (disabled || opt.disabled) {
      input.disabled = true;
    }

    input.addEventListener("change", () => {
      if (input.checked) {
        selectedValues.push(opt.value);
      } else {
        selectedValues = selectedValues.filter(v => v !== opt.value);
      }

      if (onChange) onChange(selectedValues);
    });

    const custom = document.createElement("span");
    custom.classList.add("checkbox-custom");

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