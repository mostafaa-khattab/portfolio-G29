var toggle_theme = document.getElementById("toggle-theme");

var deviceTheme = window.matchMedia("(prefers-color-scheme : dark)").matches;

if (deviceTheme) {
  document.body.classList.add("dark-mood");
  toggle_theme.innerText = "Light Mood ☀️";
}

toggle_theme.addEventListener("click", function () {
  document.body.classList.toggle("dark-mood");

  if (document.body.classList.contains("dark-mood")) {
    toggle_theme.innerText = "Light Mood ☀️";
  } else {
    toggle_theme.innerText = "Dark Mood 🌙";
  }
});
