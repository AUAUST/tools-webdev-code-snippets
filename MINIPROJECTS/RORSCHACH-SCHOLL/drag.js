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
      if (value === NaN) return;
      this._left_ = value;
      main.style.setProperty("--left", `${value}%`);
    },
    set top(value) {
      if (value === NaN) return;
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
    console.log(left, top);
    state.left += left * 100;
    state.top += top * 100;
    // const newLeft = clamp(state.left + left * 100, -30, 130);
    // if (newLeft !== NaN) {
    //   state.left = newLeft;
    // }
    // const newTop = clamp(state.top + top * 100, -30, 130);
    // if (newTop !== NaN) {
    //   state.top = newTop;
    // }
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
    if (!state.moving) return;

    const deltaX = event.touches[0].clientX - state.lastX;
    const deltaY = event.touches[0].clientY - state.lastY;

    console.log(event.touches[0].clientX, state.lastX);

    const left = deltaX / state.containerWidth;
    const top = deltaY / state.containerHeight;

    setPosition(left, top);

    state.lastX = event.touches[0].clientX;
    state.lastY = event.touches[0].clientY;
  });
})();

function clamp(value, min, max) {
  const clamped = Math.min(Math.max(value, min), max);
  if (clamped === NaN) {
    return value;
  }
  return clamped;
}
