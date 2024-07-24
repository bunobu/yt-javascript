"use strict";

const title = document.getElementById("title");

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 1.0,
};

const classToggleInView = (entries, observe) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log("titleがビューポートに100%表示されました");
      entry.target.classList.add("is-inView");
    } else {
      console.log("titleがビューポートに100%表示されていません");
      entry.target.classList.remove("is-inView");
    }
  });
};

const observer = new IntersectionObserver(classToggleInView, options);
observer.observe(title);
