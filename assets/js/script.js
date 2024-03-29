'use strict';



/**
 * add event on element
 */

const addEventOnElement = function (element, type, listener) {
  if (element.length > 1) {
    for (let i = 0; i < element.length; i++) {
      element[i].addEventListener(type, listener);
    }
  } else {
    element.addEventListener(type, listener);
  }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNav = function () {
  navbar.classList.toggle("active");
  this.classList.toggle("active");
}

addEventOnElement(navToggler, "click", toggleNav);


const closeNav = function () {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
}

addEventOnElement(navLinks, "click", closeNav);



/**
 * add active class on header & back to top button
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 50) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});



/**
 * hero tab button
 */

const tabBtns = document.querySelectorAll("[data-tab-btn]");

let lastClickedTabBtn = tabBtns[0];

const changeTab = function () {
  lastClickedTabBtn.classList.remove("active");
  this.classList.add("active");
  lastClickedTabBtn = this;
}

addEventOnElement(tabBtns, "click", changeTab);


// Update the hidden input field when a tab is clicked
// JavaScript to update the hidden input field based on the active tab button
const tabButtons = document.querySelectorAll('[data-tab-btn]');
const hiddenInput = document.getElementById('selected-category');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Set the value of the hidden input to the selected category (Roofing or Solar)
    hiddenInput.value = button.getAttribute('data-tab-btn');
  });
});


// JavaScript to show/hide the pop-up
const learnMoreButton = document.getElementById('learn-more-button');
const popupContainer = document.getElementById('popup-container');
const closePopup = document.getElementById('close-popup');

learnMoreButton.addEventListener('click', (e) => {
  e.preventDefault();
  popupContainer.style.display = 'block';
});

closePopup.addEventListener('click', (e) => {
  e.preventDefault();
  popupContainer.style.display = 'none';
});

// Close the pop-up if the user clicks outside the content
window.addEventListener('click', (event) => {
  if (event.target === popupContainer) {
    popupContainer.style.display = 'none';
  }
});
