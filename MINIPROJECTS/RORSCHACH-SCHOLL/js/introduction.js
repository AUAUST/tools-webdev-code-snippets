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

  const state = {
    // Config
    scrollAmount: 50,
    animationLength: (function () {
      const durationString = getComputedStyle(slides[0]).transitionDuration;
      return parseFloat(durationString) * 1000;
    })(),
    lastSlide: slides[slides.length - 1],
    // State
    currentSlide: 0,
    animating: false,
    scrollPosition: 0,
    finished: false,
  };

  function updateState(relativePosition) {
    if (state.animating) return;

    state.scrollPosition = Math.max(0, state.scrollPosition + relativePosition);

    const newSlide = Math.floor(state.scrollPosition / state.scrollAmount);

    if (newSlide >= slides.length) {
      state.finished = true;
      introduction.classList.add("finished");
    } else if (newSlide !== state.currentSlide) {
      // Prevent scrolling past multiple slides
      state.animating = true;
      setTimeout(() => {
        state.animating = false;
      }, state.animationLength);

      // Show new slide
      for (const slide of slides) {
        slide.classList.remove("current");
      }
      slides[newSlide].classList.add("current");

      // Update state
      state.currentSlide = newSlide;
    }
  }

  introduction.addEventListener("wheel", (e) => updateState(e.deltaY));
  introduction.addEventListener("touchmove", (e) =>
    updateState(e.touches[0].clientY)
  );
  introduction.addEventListener("click", (e) =>
    updateState(state.scrollAmount)
  );

  slides[0].classList.add("current");
})();
