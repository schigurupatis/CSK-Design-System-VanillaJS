function renderRadioPage(container) {
  container.innerHTML = "<h2>Radio Buttons</h2>";

  const options = [
    { label: "Option 1", value: "1" },
    { label: "Option 2", value: "2" },
    { label: "Option 3", value: "3" }
  ];

  // Default
  container.appendChild(
    createRadioGroup({
      label: "Default",
      name: "r1",
      options
    })
  );

  // With value
  container.appendChild(
    createRadioGroup({
      label: "Preselected",
      name: "r2",
      options,
      value: "2"
    })
  );

  // Variants
  container.appendChild(
    createRadioGroup({
      label: "Success Variant",
      name: "r3",
      options,
      variant: "success"
    })
  );

  container.appendChild(
    createRadioGroup({
      label: "Danger Variant",
      name: "r4",
      options,
      variant: "danger"
    })
  );

  // Sizes
  container.appendChild(
    createRadioGroup({
      label: "Small Size",
      name: "r5",
      options,
      size: "sm"
    })
  );

  container.appendChild(
    createRadioGroup({
      label: "Large Size",
      name: "r6",
      options,
      size: "lg"
    })
  );

  // Disabled
  container.appendChild(
    createRadioGroup({
      label: "Disabled",
      name: "r7",
      options,
      disabled: true
    })
  );

  // Event
  container.appendChild(
    createRadioGroup({
      label: "With Event",
      name: "r8",
      options,
      onChange: (val) => console.log("Selected:", val)
    })
  );
}