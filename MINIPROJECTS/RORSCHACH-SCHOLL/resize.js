(function () {
  const body = document.body;
  const element = document.getElementById("resize");

  const state = {
    lastX: 0,

    moving: false,

    containerWidth: element.clientWidth,

    _width_: 50,

    get width() {
      return this._width_;
    },
    set width(value) {
      this._width_ = value;
      body.style.setProperty("--size", `${value}%`);
    },
  };

  window.addEventListener("resize", function () {
    state.containerWidth = element.clientWidth;
  });

  element.addEventListener("mousedown", function (event) {
    state.moving = true;
    state.lastX = event.clientX;
  });

  element.addEventListener("mouseup", function () {
    state.moving = false;
  });

  element.addEventListener("mousemove", function (event) {
    if (state.moving) {
      const deltaX = event.clientX - state.lastX;

      state.width = clamp(
        state.width + (deltaX / state.containerWidth) * 100,
        0,
        100
      );
    }
  });
})();
