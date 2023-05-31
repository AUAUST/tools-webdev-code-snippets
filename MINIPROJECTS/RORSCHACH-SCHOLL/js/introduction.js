(function () {
  // Scroll tooltip
  const scrollMe = document.getElementById("scroll-me");
  setTimeout(() => {
    scrollMe.classList.add("current");
  }, 1000);

  const introduction = document.getElementById("introduction");
  const slides = Array.from(introduction.querySelectorAll(".slide")).sort(
    (a, b) => a.dataset.index - b.dataset.index
  );

  slides[0].classList.add("current");
})();
