(function () {
  const view = document.getElementById("view");
  const main = document.getElementById("main");
  const body = document.body;

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

  const dragStart = function (event) {
    state.moving = true;
    state.lastX = event.clientX;
    state.lastY = event.clientY;
  };
  const dragEnd = function () {
    state.moving = false;
  };

  view.addEventListener("mousedown", dragStart);
  view.addEventListener("touchstart", dragStart);

  body.addEventListener("mouseup", dragEnd);
  body.addEventListener("mouseleave", dragEnd);
  body.addEventListener("touchend", dragEnd);

  const setPosition = function (left, top) {
    state.left = clamp(state.left + left * 100, -30, 130);
    state.top = clamp(state.top + top * 100, -30, 130);
  };

  body.addEventListener("mousemove", function (event) {
    if (state.moving) {
      const deltaX = event.clientX - state.lastX;
      const deltaY = event.clientY - state.lastY;

      const left = deltaX / state.containerWidth;
      const top = deltaY / state.containerHeight;

      setPosition(left, top);

      state.lastX = event.clientX;
      state.lastY = event.clientY;
    }
  });

  body.addEventListener("touchmove", function (event) {
    if (state.moving) {
      const deltaX = event.touches[0].clientX - state.lastX;
      const deltaY = event.touches[0].clientY - state.lastY;

      const left = deltaX / state.containerWidth;
      const top = deltaY / state.containerHeight;

      setPosition(left, top);

      state.lastX = event.touches[0].clientX;
      state.lastY = event.touches[0].clientY;
    }
  });
})();

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}
