(function () {
  const view = document.getElementById("view");
  const main = document.getElementById("main");

  console.log("view", view);

  const state = {
    lastX: 0,
    lastY: 0,
    moving: false,
  };

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

      // set --left and --top
      const left = parseInt(getComputedStyle(main).getPropertyValue("--left"));
      const top = parseInt(getComputedStyle(main).getPropertyValue("--top"));

      main.style.setProperty("--left", `${left + x}%`);
      main.style.setProperty("--top", `${top + y}%`);
    }
  });
})();
