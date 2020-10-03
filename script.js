const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.querySelector("nav");
const toggleIcon = document.querySelector("#toggle-icon");
const textBox = document.querySelector(".text-box");
const allImages = document.querySelectorAll("img");

//image color change
function imageColorChange(color) {
  imageArray = [
    `img/undraw_feeling_proud_${color}.svg`,
    `img/undraw_conceptual_idea_${color}.svg`,
    `img/undraw_proud_coder_${color}.svg`,
  ];
  for (let i = 0; i < allImages.length; i++) {
    allImages[i].src = imageArray[i];
  }
}

//function dark light mode
function darkLightMode(isDark) {
  nav.style.backgroundColor = isDark
    ? "rgb(0 0 0 /50%)"
    : "rgb(255 255 255 /50%)";
  textBox.style.backgroundColor = isDark
    ? "rgb(255 255 255 /50%)"
    : "rgb(0 0 0 /50%)";
  toggleIcon.children[0].textContent = isDark ? "Dark Mode" : "Light Mode";
  isDark
    ? toggleIcon.children[1].classList.replace("fa-sun", "fa-moon")
    : toggleIcon.children[1].classList.replace("fa-moon", "fa-sun");
  isDark ? imageColorChange("dark") : imageColorChange("light");
}

//function switchTheme
function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    darkLightMode(true);
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    darkLightMode(false);
  }
}

//Event Listener
toggleSwitch.addEventListener("change", switchTheme);

//checking the local storage to set the theme
const currentTheme = localStorage.getItem("theme");

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
    darkLightMode(true);
  }
}
