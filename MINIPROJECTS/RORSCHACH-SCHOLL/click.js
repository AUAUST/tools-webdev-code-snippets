(function () {
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
