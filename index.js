"use strict";
// learn about me home btn start
let GradientTimer;
let count = 0;
let ammt = 0;
learnAboutMeBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const s1Cordinates = aboutMe.getBoundingClientRect();
  window.scrollTo({
    left: s1Cordinates.left + window.pageXOffset,
    top: s1Cordinates.top + window.pageYOffset,
    behavior: "smooth",
  });
});

learnAboutMeBtn.addEventListener("mouseenter", function () {});
// learn about me home btn end

// About Attribures section start
const attributes = ["Designer", "Problem Solver", "Learner", "Hard Worker"];
let i = 0;
let textPosition = 0;
const speed = 200;

function typeWritter() {
  if (i > attributes.length - 1) {
    i = 0;
  }
  whoIam.innerHTML = attributes[i].substring(0, textPosition);
  if (textPosition++ != attributes[i].length) {
    setTimeout(typeWritter, 100);
  } else {
    setTimeout(function () {
      i++;
      textPosition = 0;
      setTimeout(typeWritter, speed);
    }, 2000);
  }
}
typeWritter();

// About me section load in late

const paragraph = document.querySelector(".parText");
const aboutH1 = document.querySelector(".h1-style");
const first = document.querySelector(".first");
const second = document.querySelector(".second");
const third = document.querySelector(".third");
const fourth = document.querySelector(".fourth");

function unBlur(entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;

  document.querySelector(`.${entry.target.classList[0]}`).style.filter =
    "unset";
  unBlurObs.unobserve(document.querySelector(`.${entry.target.classList[0]}`));
}
function pText(entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;

  first.style.animation = "left 4s";
  second.style.animation = "left 5s";
  third.style.animation = "left 6s";
  fourth.style.animation = "left 7s";
  paragraphObs.unobserve(paragraph);
}
const unBlurObs = new IntersectionObserver(unBlur, {
  root: null,
  threshold: 1,
});
const paragraphObs = new IntersectionObserver(pText, {
  root: null,
  threshold: 0.6,
  rootMargin: "400px",
});
unBlurObs.observe(whoIam);
unBlurObs.observe(aboutH1);
paragraphObs.observe(paragraph);

// Add moving up animation to projects heading
const projectsTextContainer = document.querySelector(".headingContainer");
const project1 = document.querySelector(".firstProject");
const project2 = document.querySelector(".secondProject");
const project3 = document.querySelector(".thirdProject");

function moveHeader(entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;

  entry.target.style.transform = "translateY(0px)";
  entry.target.style.transition = "all 0.5s";
  projectsHedingOBS.unobserve(entry.target);
}

const projectsHedingOBS = new IntersectionObserver(moveHeader, {
  root: null,
  threshold: 0,
});
projectsHedingOBS.observe(projectsTextContainer);
projectsHedingOBS.observe(project1);
projectsHedingOBS.observe(project2);
projectsHedingOBS.observe(project3);

// link to minigolf page depending on if you are on mobile or computer
const minigolf = document.querySelector(".minogolfLink");
const popup = document.querySelector(".popup");
const exit = document.querySelector(".exit");

// button hover effects
const buttons = document.querySelectorAll(".btnHover");

function hoverEvent(bool, button) {
  if (bool) {
    if (
      button.classList.contains("LearnAboutMeBtn") ||
      button.classList.contains("exit")
    ) {
      button.style.backgroundColor = "white";
      button.style.color = "black";
      button.style.borderColor = "black";
      button.style.cursor = "pointer";
    } else {
      button.style.backgroundColor = "white";
      button.style.color = "black";
      button.style.cursor = "pointer";
    }
  } else {
    if (
      button.classList.contains("LearnAboutMeBtn") ||
      button.classList.contains("exit")
    ) {
      button.style.backgroundColor = "unset";
      button.style.color = "white";
      button.style.borderColor = "white";
      button.style.cursor = "pointer";
    } else {
      button.style.backgroundColor = "unset";
      button.style.color = "black";
      button.style.cursor = "pointer";
    }
  }
}

function checkMobile() {
  if (window.innerWidth < 480) {
    minigolf.href = "https://rdgolftest.epizy.com/";
    return;
  }
  buttons.forEach((button) =>
    button.addEventListener("mouseover", function (e) {
      hoverEvent(true, button);
    })
  );

  buttons.forEach((button) =>
    button.addEventListener("mouseout", function (e) {
      hoverEvent(false, button);
    })
  );

  minigolf.addEventListener("click", function (e) {
    e.preventDefault();
    popup.style.animation = "displayError 1s";
    popup.style.display = "flex";
  });
  exit.addEventListener("click", function (e) {
    e.preventDefault();
    popup.style.animation = "removeError 1s";
    setTimeout(function () {
      popup.style.display = "none";
    }, 1000);
  });
}
checkMobile();
