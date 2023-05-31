const sentences = {
  1: {
    "#tache-01": "CARD I. Butterfly. (Upper half of picture)",
    "#tache-02": "CARD II. Two men with wild faces. (Whole picture)",
    "#tache-03": "CARD III. Two birds. (large dark parts at side)",
    "#tache-04": "CARD IV. Two boots. (large prominences in lower part)",
    "#tache-05": "CARD V. Head of a rabbit. (Head in upper middle)",
    "#tache-06":
      "CARD VI. Two people sitting at each side putting out their hands. (small protruding detail upper sides)",
    "#tache-07": "CARD VII. Two men’s faces. (middle tier)",
    "#tache-08": "CARD VIII. Two fishes at each side swimming. (sides)",
    "#tache-09": "CARD IX. A lady or a man. (middle)",
    "#tache-10": "CARD X. Long legs these two things have. (upper side)",
  },
  2: {
    "#tache-01":
      "CARD I. (Laughs) I can't get the conception of it at all. The center looks like a human being, going up to (I can't see what  the hole in center is) the neck as if the head could sit on the arms...",
    "#tache-02":
      "CARD II. The two sections look like the heads of two dogs, as if they were to kiss each other.",
    "#tache-03":
      "CARD III. Long necked person with a very small head as if he were turning his arm round to the back.",
    "#tache-04":
      "CARD IV. One would see it if the. person were sitting in a chair.",
    "#tache-05": "CARD V.aa Head of a rabbit. (Head in upper middle)",
    "#tache-06":
      "CARD VI. (Upper middle protuberances) Looks like a weight - an apple or a brick placed on the outside of the arm stretched out.",
    "#tache-07":
      "CARD VII. A human being halved in two. You can see the arms and the legs stretched out. This (center line) would be the backbone. It’s rather deep between the hip and the leg, or the half leg.",
    "#tache-08": "CARD VIII.aaaa Two fishes at each side swimming. (sides)",
    "#tache-09": "CARD IX.aaa A lady or a man. (middle)",
    "#tache-10": "CARD X.aaa Long legs these two things have. (upper side)",
  },
  3: {
    "#tache-01": "BARD I.zzz Butterfly. (Upper half of picture)",
    "#tache-02": "CARD II.zzz Two men with wild faces. (Whole picture)",
    "#tache-03": "CARD III.zzz Two birds. (large dark parts at side)",
    "#tache-04": "CARD IV.zzz Two boots. (large prominences in lower part)",
    "#tache-05": "CARD V.zzz Head of a rabbit. (Head in upper middle)",
    "#tache-06":
      "CARD VI.zz Two people sitting at each side putting out their hands. (small protruding detail upper sides)",
    "#tache-07": "CARD VII.zzz Two men’s faces. (middle tier)",
    "#tache-08": "CARD VIII.zzz Two fishes at each side swimming. (sides)",
    "#tache-09": "CARD IX.zzz A lady or a man. (middle)",
    "#tache-10": "CARD X.zzz Long legs these two things have. (upper side)",
  },
};

(function () {
  const buttons = document.querySelectorAll("[data-character]");
  const textContainer = document.getElementById("text-container");

  for (const button of buttons) {
    button.addEventListener("click", function () {
      for (const button of buttons) {
        button.classList.remove("current");
      }

      this.classList.add("current");

      // Returns the currently used SVG (<svg><use xlink:href="{this ID here}"></use></svg>)
      const currentSvg = document
        .getElementById("shape-main")
        .querySelector("use").attributes["xlink:href"].value;
      const currentCharacter = document.querySelector(
        "[data-character].current"
      ).dataset.character;

      textContainer.innerText = sentences[currentCharacter][currentSvg] || "";

      // textContainer.classList.remove("fade-in");
      // setTimeout(() => textContainer.classList.add("fade-in"), 10);
    });
  }
})();
