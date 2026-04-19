function createInput({
  label = "",
  placeholder = "",
  value = "",
  error = "",
  helperText = "",
  disabled = false,
  onInput = null
}) {
  const wrapper = document.createElement("div");
  wrapper.classList.add("input-group");

  // Label
  if (label) {
    const labelEl = document.createElement("label");
    labelEl.classList.add("input-label");
    labelEl.innerText = label;
    wrapper.appendChild(labelEl);
  }

  // Input
  const input = document.createElement("input");
  input.classList.add("input-field");
  input.placeholder = placeholder;
  input.value = value;
  input.disabled = disabled;

  // Error style
  if (error) {
    input.classList.add("input-error");
  }

  // Event
  if (onInput && !disabled) {
    input.addEventListener("input", (e) => {
      onInput(e.target.value);
    });
  }

  wrapper.appendChild(input);

  // Helper text
  if (helperText && !error) {
    const helper = document.createElement("div");
    helper.classList.add("input-helper");
    helper.innerText = helperText;
    wrapper.appendChild(helper);
  }

  // Error text
  if (error) {
    const errorText = document.createElement("div");
    errorText.classList.add("input-error-text");
    errorText.innerText = error;
    wrapper.appendChild(errorText);
  }

  return wrapper;
}