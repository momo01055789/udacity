// INITIALLIZING GLOBAL VARIABLES

const Sections = document.querySelectorAll("section");

const Navbar = document.getElementById("navList");

// change the title
const title = document.getElementById("title");

let navbarList = "";

title.textContent = `MY PROJECT`;

// CREATE NAVBAR FROM THE SECTION ELEMENTS
function createNav() {
  Sections.forEach((section) => {
    navbarList += `<li> <a class="navLink menuLink" href="#${section.id}" id="navL">
          ${section.dataset.nav}</a></li>`;
  });
  // add the navbar links to the html
  Navbar.innerHTML = navbarList;
}
createNav();

// Add class 'active' to the currently viewed section
function addActiveClass(section) {
  // get the id from the section
  const id = section.getAttribute("id");

  // add the active class to the section
  document.querySelector(`#${id}`).classList.add("activeClass");
}

// calcualting when the section is active
function activeSection() {
  Sections.forEach((section) => {
    let elementOffset = section.getBoundingClientRect();
    if (elementOffset.top <= 180 && elementOffset.bottom >= 180) {
      addActiveClass(section);
    } else {
      deleteActiveClass(section);
    }
  });
}

//Removing the active class from the section
function deleteActiveClass(section) {
  const id = section.getAttribute("id");
  document.querySelector(`#${id}`).classList.remove("activeClass");
}

// listening to the function while scrolling on the document
document.addEventListener("scroll", activeSection);

let navbar = document.getElementById("navbar").querySelectorAll("li");

// add or remove active class in nav links
navbar.forEach((item) => {
  item.addEventListener("click", function () {
    navbar.forEach((item) => {
      // remove the active class if navbar not clicked
      item.classList.remove("navbarActive");
    });
    // add active class to nav link
    item.classList.add("navbarActive");
  });
});
