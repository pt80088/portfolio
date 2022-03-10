let ejs = require("ejs");

const portfolioNavLinkElement = document.getElementById("portfolio-nav-link");
const navPortfolioDropdownElement = document.getElementById("nav-dropdown");
const navPortfolioDropdownList = document.getElementById("nav-dropdown-list");

portfolioNavLinkElement.addEventListener("mouseover", showNavPortfolioDropdown);

navPortfolioDropdownList.addEventListener(
  "mouseover",
  showNavPortfolioDropdown
);

navPortfolioDropdownElement.addEventListener(
  "mouseover",
  showNavPortfolioDropdown
);

portfolioNavLinkElement.addEventListener(
  "mouseleave",
  hideNavPortfolioDropdown
);

navPortfolioDropdownElement.addEventListener(
  "mouseleave",
  hideNavPortfolioDropdown
);

navPortfolioDropdownList.addEventListener(
  "mouseleave",
  hideNavPortfolioDropdown
);

function showNavPortfolioDropdown(event) {
  var mouseHover = true;
  navPortfolioDropdownElement.style.visibility = "visible";
  if (mouseHover === false) {
    hideNavPortfolioDropdown();
  }
}

function hideNavPortfolioDropdown(event) {
  var mouseHover = false;
  navPortfolioDropdownElement.style.visibility = "hidden";
  if (mouseHover === true) {
    showNavPortfolioDropdown();
  }
}
