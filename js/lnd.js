function toggleTheme() {
  const body = document.body;
  const currentTheme = body.getAttribute("data-bs-theme");
  const newTheme = currentTheme === "light" ? "dark" : "light";

  // Toggle Bootstrap classes for light/dark themes
  body.classList.remove(`bg-${currentTheme}`);
  body.classList.add(`bg-${newTheme}`);

  // Update the data-bs-theme attribute
  body.setAttribute("data-bs-theme", newTheme);

  // Toggle both checkboxes based on the new theme
  const cbx = document.getElementById("cbx");
  const cbx2 = document.getElementById("cbx2");

  if (newTheme === "light") {
    cbx.checked = false;
    cbx2.checked = false;
  } else {
    cbx.checked = true;
    cbx2.checked = true;
  }
}
