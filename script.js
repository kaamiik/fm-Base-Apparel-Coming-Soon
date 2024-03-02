"use strict";

const formEl = document.querySelector(".container__form");
const emailEl = document.querySelector(".container__input");
const errorEl = document.querySelector(".container__error--message");
const buttonEl = document.querySelector(".container__cta");
const errorIconEl = document.querySelector(".container__error--icon");

function validateEmail(email) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function changeStyle() {
  errorEl.classList.remove("hidden");
  errorIconEl.classList.remove("hidden");
  emailEl.setAttribute("aria-invalid", "true");
}

formEl.addEventListener("submit", function (e) {
  e.preventDefault();

  if (emailEl.value === "") {
    errorEl.textContent = "Whoops! It looks like you forgot to add your email";
    changeStyle();
    // ------------------------------
  } else if (!validateEmail(emailEl.value)) {
    errorEl.textContent = "Please provide a valid email address";
    changeStyle();

    // ------------------------------
  } else {
    e.target.submit();
    errorEl.classList.add("hidden");
    errorIconEl.classList.add("hidden");
    emailEl.setAttribute("aria-invalid", "false");
  }
});
