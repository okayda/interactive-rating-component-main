"use strict";const ratingContainer=document.querySelector(".rating-container"),ratedContainer=document.querySelector(".rated-container"),userRateEl=document.querySelector(".user-rate"),ratingScale=document.querySelector(".rating-scale"),ratingBtn=document.querySelector(".rating-btn");let perviousRate,userRate;ratingScale.addEventListener("click",(e=>{e.target.dataset.id&&(e.target.classList.add("active"),perviousRate&&perviousRate.classList.remove("active"),userRate=e.target.dataset.id,perviousRate=e.target)})),ratingBtn.addEventListener("click",(e=>{perviousRate&&(e.target.disabled=!1,userRateEl.textContent=userRate,ratingContainer.style.display="none",ratedContainer.style.display="block")}));
//# sourceMappingURL=index.5cba5820.js.map
