(function () {
  const body = document.body;

  const buttons = document.querySelectorAll("[data-color]");

  const uses = [
    document.getElementById("shape-main").querySelector("use"),
    document.getElementById("shape-mirror").querySelector("use"),
  ];

  for (const button of buttons) {
    const xlink = button.querySelector("use").getAttribute("xlink:href");

    button.addEventListener("click", function () {
      for (const button of buttons) {
        button.classList.remove("current");
      }
      this.classList.add("current");

      body.dataset.color = this.dataset.color;

      for (const use of uses) {
        use.setAttribute("xlink:href", xlink);
      }
    });
  }
})();
