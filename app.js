// ==============================
// IMPORTS (make sure order is correct in HTML)
// ==============================
// button.js, sidebar.js, and pages should already be loaded via <script> tags

// ==============================
// ROOT CONTAINERS
// ==============================
const sidebarContainer = document.getElementById("sidebar");
const contentContainer = document.getElementById("content");

// ==============================
// ROUTES (PAGE MAPPING)
// ==============================
// const routes = {
//   button: renderButtonPage,
//   dropdown: renderDropdownPage,

//   input: renderInputPage,

//   modal: (container) => {
//     container.innerHTML = "<h2>Modal Component (Coming Soon)</h2>";
//   }
// };
const routes = {
  button: renderButtonPage,
  dropdown: renderDropdownPage,
  input: renderInputPage,
  select: renderSelectPage,
  radio: renderRadioPage,
  checkbox: (c) => c.innerHTML = "<h2>Checkbox Coming Soon</h2>"
};

// ==============================
// NAVIGATION FUNCTION
// ==============================
function navigate(pageKey) {
  const renderPage = routes[pageKey];

  if (!renderPage) {
    contentContainer.innerHTML = "<h2>Page Not Found</h2>";
    return;
  }

  // Clear previous content
  contentContainer.innerHTML = "";

  // Render new page
  renderPage(contentContainer);
}

// ==============================
// INITIALIZE APP
// ==============================

// Render Sidebar
const sidebar = createSidebar(navigate);
sidebarContainer.appendChild(sidebar);

// Load default page
navigate("button");


