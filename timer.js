"use strict";
let startDate = Date.parse("2022-03-07");
let secondsInterval;

function addingTimerToText() {
  timer.textContent = `${Math.trunc((Number(new Date()) - startDate) / 1000)}`;
}

function secondsTimer(entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    clearInterval(secondsInterval);
    return;
  }
  addingTimerToText();
  secondsInterval = setInterval(addingTimerToText, 1000);
}
const timerOBS = new IntersectionObserver(secondsTimer, {
  root: null,
  threshold: 1,
});

timerOBS.observe(timer);
