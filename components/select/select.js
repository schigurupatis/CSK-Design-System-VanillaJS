function createSelect({
  label = "",
  options = [],
  placeholder = "Select...",
  value = "",
  disabled = false,
  searchable = false,
  multiple = false,
  onChange = null
}) {
  const wrapper = document.createElement("div");

  if (label) {
    const labelEl = document.createElement("label");
    labelEl.innerText = label;
    labelEl.style.display = "block";
    labelEl.style.marginBottom = "4px";
    wrapper.appendChild(labelEl);
  }

  const select = document.createElement("div");
  select.classList.add("select");

  if (disabled) select.classList.add("disabled");

  const trigger = document.createElement("div");
  trigger.classList.add("select-trigger");

  const menu = document.createElement("div");
  menu.classList.add("select-menu");

  let selectedValue = multiple ? [] : value;

  // ===== MULTI SELECT TAGS =====
  const tagsContainer = document.createElement("div");
  tagsContainer.classList.add("select-tags");

  function updateTrigger() {
    if (multiple) {
      trigger.innerHTML = "";
      if (selectedValue.length === 0) {
        trigger.innerText = placeholder;
        return;
      }
      selectedValue.forEach(val => {
        const opt = options.find(o => o.value === val);
        const tag = document.createElement("span");
        tag.classList.add("select-tag");
        tag.innerText = opt.label;
        trigger.appendChild(tag);
      });
    } else {
      const opt = options.find(o => o.value === selectedValue);
      trigger.innerText = opt ? opt.label : placeholder;
    }
  }

  // ===== SEARCH =====
  let searchInput;
  if (searchable) {
    searchInput = document.createElement("input");
    searchInput.classList.add("select-search");
    searchInput.placeholder = "Search...";

    searchInput.addEventListener("input", () => {
      const val = searchInput.value.toLowerCase();

      menu.querySelectorAll(".select-item").forEach(item => {
        item.style.display = item.innerText.toLowerCase().includes(val)
          ? "block"
          : "none";
      });
    });

    menu.appendChild(searchInput);
  }

  // ===== OPTIONS =====
  options.forEach(opt => {
    const item = document.createElement("div");
    item.classList.add("select-item");

    if (multiple) {
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      item.appendChild(checkbox);
    }

    const text = document.createElement("span");
    text.innerText = opt.label;
    item.appendChild(text);

    // Default selection
    if (!multiple && opt.value === value) {
      item.classList.add("active");
    }

    item.addEventListener("click", () => {
      if (disabled) return;

      if (multiple) {
        if (selectedValue.includes(opt.value)) {
          selectedValue = selectedValue.filter(v => v !== opt.value);
        } else {
          selectedValue.push(opt.value);
        }

        item.querySelector("input").checked = selectedValue.includes(opt.value);

      } else {
        selectedValue = opt.value;

        menu.querySelectorAll(".select-item").forEach(i => i.classList.remove("active"));
        item.classList.add("active");

        menu.classList.remove("show");
      }

      updateTrigger();

      if (onChange) onChange(selectedValue);
    });

    menu.appendChild(item);
  });

  updateTrigger();

  // Toggle
  trigger.addEventListener("click", () => {
    if (disabled) return;
    menu.classList.toggle("show");
  });

  // Outside click
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