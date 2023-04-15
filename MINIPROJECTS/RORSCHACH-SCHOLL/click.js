(function () {
  // For colors buttons

  const body = document.body;

  const buttons = document.querySelectorAll("[data-color]");

  for (const button of buttons) {
    button.addEventListener("click", function () {
      for (const button of buttons) {
        button.classList.remove("current");
      }
      this.classList.add("current");

      body.dataset.color = this.dataset.color;
    });
  }
})();

(function () {
  // For shapes (icons) buttons

  const buttons = document.querySelectorAll("[data-icon]");

  const views = [
    document.getElementById("shape-main").querySelector("svg use"),
    document.getElementById("shape-mirror").querySelector("svg use"),
  ];

  for (const button of buttons) {
    button.addEventListener("click", function () {
      for (const button of buttons) {
        button.classList.remove("current");
      }
      this.classList.add("current");

      for (const view of views) {
        view.setAttribute("xlink:href", `#${this.dataset.icon}`);
      }
    });
  }
})();
