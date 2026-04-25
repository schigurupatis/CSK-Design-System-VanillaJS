function renderCheckboxPage(container) {
  container.innerHTML = "<h2>Checkbox</h2>";

  const options = [
    { label: "HTML", value: "html" },
    { label: "CSS", value: "css" },
    { label: "JavaScript", value: "js" }
  ];

  // Default
  container.appendChild(
    createCheckboxGroup({
      label: "Default",
      options
    })
  );

  // Preselected
  container.appendChild(
    createCheckboxGroup({
      label: "Preselected",
      options,
      values: ["css"]
    })
  );

  // Variants
  container.appendChild(
    createCheckboxGroup({
      label: "Success Variant",
      options,
      variant: "success"
    })
  );

  container.appendChild(
    createCheckboxGroup({
      label: "Danger Variant",
      options,
      variant: "danger"
    })
  );

  // Sizes
  container.appendChild(
    createCheckboxGroup({
      label: "Small Size",
      options,
      size: "sm"
    })
  );

  container.appendChild(
    createCheckboxGroup({
      label: "Large Size",
      options,
      size: "lg"
    })
  );

  // Disabled
  container.appendChild(
    createCheckboxGroup({
      label: "Disabled",
      options,
      disabled: true
    })
  );

  // Event
  container.appendChild(
    createCheckboxGroup({
      label: "With Event",
      options,
      onChange: (vals) => console.log("Selected:", vals)
    })
  );
}