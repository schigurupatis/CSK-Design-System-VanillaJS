function renderSelectPage(container) {
  container.innerHTML = "<h2>Select</h2>";

  const options = [
    { label: "React", value: "react" },
    { label: "Angular", value: "angular" },
    { label: "Vue", value: "vue" },
    { label: "Svelte", value: "svelte" }
  ];

  // Default
  container.appendChild(
    createSelect({
      label: "Default Select",
      options
    })
  );

  // Searchable
  container.appendChild(
    createSelect({
      label: "Searchable Select",
      options,
      searchable: true
    })
  );

  // Multi Select
  container.appendChild(
    createSelect({
      label: "Multi Select",
      options,
      multiple: true
    })
  );

  // Searchable + Multi
  container.appendChild(
    createSelect({
      label: "Searchable Multi Select",
      options,
      searchable: true,
      multiple: true
    })
  );
}