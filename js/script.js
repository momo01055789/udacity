// INITIALLIZING GLOBAL VARIABLES

const sectionsElements = document.querySelectorAll("section");
const Navbar = document.getElementById("navbar__list");

// change title's text
const title = document.getElementById("landing-title");

let navList = "";

title.textContent = `MY PROJECT`;

// CREATE NAVBAR FROM THE SECTION ELEMENTS
function createNav() {
  sectionsElements.forEach((section) => {
    // add html li tags to navbar_list variable
    // dataset.nav returns nav: section 1
    navList += `<li> <a class="nav__link menu__link" href="#${section.id}" id="navli">
          ${section.dataset.nav}</a></li>`;
  });
  // add the tags to the inner htmls
  Navbar.innerHTML = navList;
}
createNav();

// Add class 'active' to the currently viewed section
function addActiveClass(section) {
  // get the id from the section
  const id = section.getAttribute("id");

  // add the active class to the section
  document.querySelector(`#${id}`).classList.add("your-active-class");
}

// calcualting when the section is active
function makeActiveSection() {
  sectionsElements.forEach((section) => {
    let elementOffset = section.getBoundingClientRect();
    if (elementOffset.top <= 150 && elementOffset.bottom >= 150) {
      addActiveClass(section);
    } else {
      removeActiveClass(section);
    }
  });
}

//Removing the active class from the section
function removeActiveClass(section) {
  const id = section.getAttribute("id");
  document.querySelector(`#${id}`).classList.remove("your-active-class");
}

// listening to the function while scrolling on the document
document.addEventListener("scroll", makeActiveSection);

let navbar = document.getElementById("navbar").querySelectorAll("li");

// itrate in li items list
navbar.forEach((item) => {
  item.addEventListener("click", function () {
    navbar.forEach((item) => {
      // remove every navbarclick class added before in any list item
      item.classList.remove("navbarclick");
    });
    // add the class on the button
    item.classList.add("navbarclick");
  });
});
