function renderInputPage(container) {
  container.innerHTML = "<h2>Inputs</h2>";

  // Normal
  container.appendChild(
    createInput({
      label: "Username",
      placeholder: "Enter username",
      helperText: "This will be visible publicly"
    })
  );

  // With value
  container.appendChild(
    createInput({
      label: "Email",
      value: "test@mail.com"
    })
  );

  // Error
  container.appendChild(
    createInput({
      label: "Password",
      placeholder: "Enter password",
      error: "Password must be at least 6 characters"
    })
  );

  // Disabled
  container.appendChild(
    createInput({
      label: "Disabled Input",
      value: "Cannot edit",
      disabled: true
    })
  );

  // With onInput
  container.appendChild(
    createInput({
      label: "Live Input",
      placeholder: "Type something...",
      onInput: (val) => console.log("Typing:", val)
    })
  );
}