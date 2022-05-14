"use strict";

const ratingContainer = document.querySelector(".rating-container");

const ratedContainer = document.querySelector(".rated-container");
const userRateEl = document.querySelector(".user-rate");

const ratingScale = document.querySelector(".rating-scale");
const ratingBtn = document.querySelector(".rating-btn");
let perviousRate;
let userRate;

ratingScale.addEventListener("click", (e) => {
  if (!e.target.dataset.id) return;

  e.target.classList.add("active");
  if (perviousRate) perviousRate.classList.remove("active");
  userRate = e.target.dataset.id;
  perviousRate = e.target;
});

ratingBtn.addEventListener("click", (e) => {
  if (!perviousRate) return;

  e.target.disabled = false;
  userRateEl.textContent = userRate;
  ratingContainer.style.display = "none";
  ratedContainer.style.display = "block";
});
