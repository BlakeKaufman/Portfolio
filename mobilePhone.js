"use strict";
const timeLabel = document.querySelector(".time");

let updateDate;

function updateDateFunction() {
  let date = new Date();
  let minutes = date.getMinutes();
  let hours = date.getHours();
  if (hours > 12) {
    hours -= 12;
  }
  timeLabel.textContent = `${String(hours)}: ${String(minutes).padStart(
    2,
    "0"
  )}`;
}

function startDatePhone(entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    clearInterval(updateDate);
    return;
  }
  updateDate = setInterval(updateDateFunction, 1000);
}

updateDateFunction();
const timeLabelOBS = new IntersectionObserver(startDatePhone, {
  root: null,
  threshold: 1,
});
timeLabelOBS.observe(timeLabel);

// switching the iframe on click
const mobileOptionsContainer = document.querySelector(".mobileOptions");
const mibourbonLabel = document.querySelector("#MiBourbonOption");
const bookmarkLabel = document.querySelector("#BookmarkOption");
const iframe = document.querySelector(".iframe");

mobileOptionsContainer.addEventListener("click", function (e) {
  if (!e.target.classList.contains("option")) return;

  if (e.target.classList.contains("active")) return;

  [...mobileOptionsContainer.children].forEach(function (sib) {
    sib.classList.remove("active");
  });

  iframe.src = `${e.target.dataset.link}`;
  e.target.classList.add("active");
});
