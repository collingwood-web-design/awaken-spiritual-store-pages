(() => {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector("#site-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });
  }

  const slider = document.querySelector("[data-slider]");
  if (!slider) return;

  const slides = [...slider.querySelectorAll(".slide")];
  const dots = [...slider.querySelectorAll(".slider__dot")];
  const prev = slider.querySelector(".slider__arrow--prev");
  const next = slider.querySelector(".slider__arrow--next");
  let index = 0;
  let timer;

  const show = (i) => {
    index = (i + slides.length) % slides.length;
    slides.forEach((slide, n) => slide.classList.toggle("is-active", n === index));
    dots.forEach((dot, n) => dot.classList.toggle("is-active", n === index));
  };

  const start = () => {
    stop();
    timer = window.setInterval(() => show(index + 1), 7000);
  };

  const stop = () => {
    if (timer) window.clearInterval(timer);
  };

  prev?.addEventListener("click", () => {
    show(index - 1);
    start();
  });
  next?.addEventListener("click", () => {
    show(index + 1);
    start();
  });
  dots.forEach((dot, n) => {
    dot.addEventListener("click", () => {
      show(n);
      start();
    });
  });

  start();
})();

(() => {
  const gallery = document.querySelector("[data-gallery]");
  if (!gallery) return;

  const slides = [...gallery.querySelectorAll(".about-gallery__main > img")];
  const dots = [...gallery.querySelectorAll(".about-gallery__dots button")];
  const prev = gallery.querySelector(".about-gallery__arrow--prev");
  const next = gallery.querySelector(".about-gallery__arrow--next");
  let index = 0;
  let timer;

  const show = (i) => {
    index = (i + slides.length) % slides.length;
    slides.forEach((slide, n) => slide.classList.toggle("is-active", n === index));
    dots.forEach((dot, n) => dot.classList.toggle("is-active", n === index));
  };

  const start = () => {
    stop();
    timer = window.setInterval(() => show(index + 1), 5000);
  };

  const stop = () => {
    if (timer) window.clearInterval(timer);
  };

  prev?.addEventListener("click", () => {
    show(index - 1);
    start();
  });
  next?.addEventListener("click", () => {
    show(index + 1);
    start();
  });
  dots.forEach((dot, n) => {
    dot.addEventListener("click", () => {
      show(n);
      start();
    });
  });

  start();
})();
