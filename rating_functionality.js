"use strict";

const ratingContainer = document.querySelector(".rating-container");

const ratedContainer = document.querySelector(".rated-container");
const userRateEl = document.querySelector(".user-rate");

const errMessage = document.querySelector(".err-msg");

const ratingScale = document.querySelector(".rating-scale");
const ratingBtn = document.querySelector(".rating-btn");
let previousRate;
let userRate;

ratingScale.addEventListener("click", (e) => {
  const target = e.target;
  if (!target.dataset.id) return;

  if (previousRate) previousRate.classList.remove("active");
  if (target === previousRate) {
    previousRate.classList.remove("active");
    previousRate = undefined;
    return;
  }

  target.classList.add("active");
  previousRate = target;
  userRate = target.dataset.id;
});

ratingBtn.addEventListener("click", (e) => {
  if (!previousRate) {
    errMessage.classList.add("active");
    return;
  }

  e.target.disabled = false;
  userRateEl.textContent = userRate;
  ratingContainer.classList.remove("active");
  ratedContainer.classList.add("active");
});
