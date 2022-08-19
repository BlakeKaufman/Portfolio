// elelmets
const moboleNav = document.getElementById("MobileNav");
// making nav pop up at a certian space
// function sticky(entries) {
//   const [entry] = entries;
//   const navigation = window.innerWidth < 740 ? moboleNav : nav;
//   console.log(entry.target.getBoundingClientRect());
//   if (entry.isIntersecting) {
//     navigation.style.background = "black";
//     navigation.style.animation = "unset";
//     hamburger.src = "./images/hamburgerWhite.svg";
//   } else {
//     navigation.style.background = "none";
//     navigation.style.animation = "unset";
//     hamburger.src = "./images/hamburger.svg";
//   }
// }
// const stickyHeader = new IntersectionObserver(sticky, {
//   root: null,
//   threshold: 0.1,
// });
// stickyHeader.observe(mainContent);
window.addEventListener("scroll", function () {
  const navigation = window.innerWidth < 740 ? moboleNav : nav;
  if (mainContent.getBoundingClientRect().top <= 0) {
    navigation.style.background = "black";
    navigation.style.animation = "unset";
    hamburger.src = "./images/hamburgerWhite.svg";
  } else {
    navigation.style.background = "none";
    navigation.style.animation = "unset";
    hamburger.src = "./images/hamburger.svg";
  }
});
// setting smooth scorlling nav elements
navContainer.forEach(function (nav) {
  console.log(nav);
  nav.addEventListener("click", function (e) {
    e.target.classList.contains("icon") ? undefined : e.preventDefault();
    if (e.target.classList.contains("navLink")) {
      const s1Cordinates = document
        .querySelector(e.target.getAttribute("href"))
        .getBoundingClientRect();

      window.scrollTo({
        left: s1Cordinates.left + window.pageXOffset,
        top: s1Cordinates.top + window.pageYOffset - 60,
        behavior: "smooth",
      });
    }
  });
});

// display mobile nav
const hamburger = document.querySelector(".hamburger");
const movileMenu = document.querySelector(".mobileOption");
const mobileUl = document.querySelector(".mobileUl");
const movileNavContainer = document.querySelector(".MobileNav__container");
let on = false;

function toggleMobileNav() {
  if (on) {
    movileMenu.style.animation = "removeError 0.7s";
    mobileUl.style.display = "none";
    setTimeout(function () {
      movileMenu.style.display = "none";
    }, 600);
  } else {
    movileMenu.style.display = "block";
    movileMenu.style.animation = "displayError 0.7s";
    setTimeout(function () {
      mobileUl.style.display = "flex";
    }, 500);
  }
  on = !on;
}
hamburger.addEventListener("click", toggleMobileNav);

// setting smooth scorlling nav elements on mobile
movileMenu.addEventListener("click", function (e) {
  e.target.classList.contains("icon") ? undefined : e.preventDefault();
  if (e.target.classList.contains("navLink")) {
    const s1Cordinates = document
      .querySelector(e.target.getAttribute("href"))
      .getBoundingClientRect();
    window.scrollTo({
      left: s1Cordinates.left + window.pageXOffset,
      top: s1Cordinates.top + window.pageYOffset - 60,
      behavior: "smooth",
    });
    toggleMobileNav();
  }
});
