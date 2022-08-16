"use strict";
let startDate = Date.parse("2022-03-07");

setInterval(function () {
  timer.textContent = `${Math.trunc((Number(new Date()) - startDate) / 1000)}`;
}, 1000);
