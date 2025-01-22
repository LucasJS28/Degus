AOS.init();

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function closeMenu() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav responsive") {
    x.className = "topnav";
  }
}

// Cerrar el menú si se hace clic fuera de él
window.addEventListener("click", function (e) {
  var navLinks = document.getElementById("myTopnav");
  var menuToggle = document.querySelector(".icon");

  if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
    if (navLinks.className === "topnav responsive") {
      navLinks.className = "topnav";
    }
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const dropdown = document.querySelector(".dropdown");
  const dropdownContent = document.querySelector(".dropdown-content");
  const dropbtn = document.querySelector(".dropdown .dropbtn");

  dropbtn.addEventListener("click", function (event) {
    event.stopPropagation();
    dropdownContent.style.display =
      dropdownContent.style.display === "block" ? "none" : "block";
  });

  document.addEventListener("click", function () {
    dropdownContent.style.display = "none";
  });

  dropdownContent.addEventListener("click", function () {
    dropdownContent.style.display = "none";
  });
});

function openModal(modalId) {
  document.getElementById(modalId).style.display = "flex";
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none";
}

// Cierra el modal al hacer clic fuera de él
window.onclick = function (event) {
  const modals = document.getElementsByClassName("modal");
  for (let i = 0; i < modals.length; i++) {
    if (event.target === modals[i]) {
      modals[i].style.display = "none";
    }
  }
};

new Swiper(".card-wrapper", {
  loop: true,
  spaceBetween: 30,
  // Pagination bullets
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // Responsive breakpoints
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
