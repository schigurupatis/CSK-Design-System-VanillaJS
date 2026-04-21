function createSelect({
  label = "",
  options = [],
  placeholder = "Select...",
  value = "",
  disabled = false,
  onChange = null
}) {
  const wrapper = document.createElement("div");

  // Label
  if (label) {
    const labelEl = document.createElement("label");
    labelEl.innerText = label;
    labelEl.style.display = "block";
    labelEl.style.marginBottom = "4px";
    wrapper.appendChild(labelEl);
  }

  const select = document.createElement("div");
  select.classList.add("select");

  if (disabled) {
    select.classList.add("disabled");
  }

  const trigger = document.createElement("div");
  trigger.classList.add("select-trigger");
  trigger.innerText = placeholder;

  const menu = document.createElement("div");
  menu.classList.add("select-menu");

  let selectedValue = value;

  // Populate options
  options.forEach(opt => {
    const item = document.createElement("div");
    item.classList.add("select-item");
    item.innerText = opt.label;

    if (opt.value === value) {
      item.classList.add("active");
      trigger.innerText = opt.label;
    }

    item.addEventListener("click", () => {
      if (disabled) return;

      selectedValue = opt.value;
      trigger.innerText = opt.label;

      // remove previous active
      menu.querySelectorAll(".select-item").forEach(i => i.classList.remove("active"));
      item.classList.add("active");

      menu.classList.remove("show");

      if (onChange) {
        onChange(selectedValue);
      }
    });

    menu.appendChild(item);
  });

  // Toggle
  trigger.addEventListener("click", () => {
    if (disabled) return;
    menu.classList.toggle("show");
  });

  // Close on outside click
  document.addEventListener("click", (e) => {
    if (!select.contains(e.target)) {
      menu.classList.remove("show");
    }
  });

  select.appendChild(trigger);
  select.appendChild(menu);
  wrapper.appendChild(select);

  return wrapper;
}