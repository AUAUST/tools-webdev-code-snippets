(function () {
  const body = document.body;

  const buttons = document.querySelectorAll("[data-color]");

  const svgUses = [
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

      for (const svgUse of svgUses) {
        svgUse.setAttribute("xlink:href", xlink);
      }
    });
  }
})();
