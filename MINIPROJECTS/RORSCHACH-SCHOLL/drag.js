(function () {
  const view = document.getElementById("view");
  const main = document.getElementById("main");

  console.log("view", view);

  const state = {
    lastX: 0,
    lastY: 0,
    moving: false,
    containerWidth: view.clientWidth,
    containerHeight: view.clientHeight,
  };

  window.addEventListener("resize", function () {
    state.containerWidth = view.clientWidth;
    state.containerHeight = view.clientHeight;
  });

  view.addEventListener("mousedown", function (event) {
    console.log("mousedown");
    state.moving = true;
    state.lastX = event.clientX;
    state.lastY = event.clientY;
  });

  view.addEventListener("mouseup", function () {
    console.log("mouseup");
    state.moving = false;
  });

  view.addEventListener("mousemove", function (event) {
    console.log("mousemove");
    if (state.moving) {
      const x = event.clientX - state.lastX;
      const y = event.clientY - state.lastY;

      state.lastX = event.clientX;
      state.lastY = event.clientY;

      const xPercent = (x / state.containerWidth) * 100;
      const yPercent = (y / state.containerHeight) * 100;

      const left = parseInt(getComputedStyle(main).getPropertyValue("--left"));
      const top = parseInt(getComputedStyle(main).getPropertyValue("--top"));

      main.style.setProperty("--left", `${clamp(0, left + xPercent, 100)}%`);
      main.style.setProperty("--top", `${(clamp / 0, top + yPercent, 100)}%`);
    }
  });

  function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
  }
})();
