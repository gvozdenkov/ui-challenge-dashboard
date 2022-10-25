doc = document.documentElement;

doc.className = "theme-dark";

// function to set a given theme/color-scheme
function setTheme(themeName) {
  doc.className = themeName;
}

// function to toggle between light and dark theme
function toggleTheme() {
  console.log("button toggle");
  doc.className === "theme-dark"
    ? (doc.className = "theme-light")
    : (doc.className = "theme-dark");
}

buttonSwitch = document.querySelector(".side-menu__dark-mode-btn");
buttonSwitch.addEventListener("change", toggleTheme);
