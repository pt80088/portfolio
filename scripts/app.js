// Objects

const portfolioNavLinkElement = document.getElementById("portfolio-nav-link");
const navPortfolioDropdownElement = document.getElementById("nav-dropdown");
const navPortfolioDropdownList = document.getElementById("nav-dropdown-list");

const cvBtn = document.getElementById("about-text").children[2].firstChild;

const modalExitIcon = document.getElementsByClassName("modal-exit")[0];
const modalBackgroundElement =
  document.getElementsByClassName("modal-background")[0];
const modalElement = document.getElementsByClassName("modal")[0];

// Event Listeners

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

cvBtn.addEventListener("click", openModal);

modalExitIcon.addEventListener("click", closeModal);

// Functions

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

function openModal() {
  modalBackgroundElement.classList.remove("modal-hide");
  modalElement.classList.remove("modal-hide");
  modalExitIcon.classList.remove("modal-hide");
  console.log("clicked");
}

function closeModal() {
  modalBackgroundElement.classList.add("modal-hide");
  modalElement.classList.add("modal-hide");
  modalExitIcon.classList.add("modal-hide");
}
