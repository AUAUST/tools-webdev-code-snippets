(function () {
  const introduction = document.getElementById("introduction");
  const slides = Array.from(introduction.querySelectorAll(".slide")).sort(
    (a, b) => a.dataset.index - b.dataset.index
  );
  slides[0].classList.add("current");
})();
