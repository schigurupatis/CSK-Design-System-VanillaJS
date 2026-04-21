function renderSelectPage(container) {
  container.innerHTML = "<h2>Select</h2>";

  const options = [
    { label: "Option 1", value: "1" },
    { label: "Option 2", value: "2" },
    { label: "Option 3", value: "3" }
  ];

  // Default
  container.appendChild(
    createSelect({
      label: "Choose option",
      options: options,
      placeholder: "Select option"
    })
  );

  // With default value
  container.appendChild(
    createSelect({
      label: "Preselected",
      options: options,
      value: "2"
    })
  );

  // Disabled
  container.appendChild(
    createSelect({
      label: "Disabled Select",
      options: options,
      disabled: true
    })
  );

  // With onChange
  container.appendChild(
    createSelect({
      label: "With Event",
      options: options,
      onChange: (val) => console.log("Selected:", val)
    })
  );
}