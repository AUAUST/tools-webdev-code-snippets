(function () {
  const body = document.body;
  const element = document.getElementById("resize");

  const state = {
    lastX: 0,

    moving: false,

    containerWidth: element.clientWidth,

    _width_: 20,

    get width() {
      return this._width_;
    },
    set width(value) {
      this._width_ = value;
      body.style.setProperty("--size", `${value}`);
    },
  };

  window.addEventListener("resize", function () {
    state.containerWidth = element.clientWidth;
  });

  const dragEnd = function () {
    state.moving = false;
  };

  element.addEventListener("mousedown", function (event) {
    state.moving = true;
    state.width = (event.clientX / state.containerWidth) * 100;
    state.lastX = event.clientX;
  });
  element.addEventListener("touchstart", function (event) {
    state.moving = true;
    state.width = (event.touches[0].clientX / state.containerWidth) * 100;
    state.lastX = event.touches[0].clientX;
  });

  body.addEventListener("mouseup", dragEnd);
  body.addEventListener("touchend", dragEnd);

  body.addEventListener("mousemove", function (event) {
    if (state.moving) {
      const deltaX = event.clientX - state.lastX;
      state.lastX = event.clientX;

      state.width = clamp(
        state.width + (deltaX / state.containerWidth) * 100,
        0,
        100
      );
    }
  });
  body.addEventListener("touchmove", function (event) {
    if (state.moving) {
      const deltaX = event.touches[0].clientX - state.lastX;
      state.lastX = event.touches[0].clientX;

      state.width = clamp(
        state.width + (deltaX / state.containerWidth) * 100,
        0,
        100
      );
    }
  });
})();
