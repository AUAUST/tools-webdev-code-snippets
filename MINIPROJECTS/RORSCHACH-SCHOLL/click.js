(function () {
  const body = document.body;

  const buttons = document.querySelectorAll("[data-color]");
  for (const button of buttons) {
    button.addEventListener("click", function () {
      body.dataset.color = this.dataset.color;
    });
  }
})();
