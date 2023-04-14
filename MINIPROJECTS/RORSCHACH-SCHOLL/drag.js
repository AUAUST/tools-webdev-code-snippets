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

    _left_: 50,
    _top_: 50,

    get left() {
      return this._left_;
    },
    get top() {
      return this._top_;
    },
    set left(value) {
      this._left_ = value;
      main.style.setProperty("--left", `${value}%`);
    },
    set top(value) {
      this._top_ = value;
      main.style.setProperty("--top", `${value}%`);
    },
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
      const deltaX = event.clientX - state.lastX;
      const deltaY = event.clientY - state.lastY;

      state.left = clamp(
        state.left + (deltaX / state.containerWidth) * 100,
        0,
        100
      );
      state.top = clamp(
        state.top + (deltaY / state.containerHeight) * 100,
        0,
        100
      );

      state.lastX = event.clientX;
      state.lastY = event.clientY;
    }
  });

  function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
  }
})();
