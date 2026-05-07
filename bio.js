const bios = {
  hkoubliette: [
    "did shots with Japan's number one battle rapper.",
    "lives out of a capsule hotel.",
    "maintains critical support for Bikkuri Donkey.",
    "is a small teenager wearing an eyepatch."
  ],

  tomacgau: [
    "has been diagnosed with autism by three different doctors. He still doesn't buy it.",
    "is cultivating disinterest.",
    "ghostwrote Hillbilly Elegy.",
    "is a casualty of the food allergies to gnosticism pipeline",
    "has no mouth but he just can't stop smiling!",
    "is spitting on your grave to lube it up.",
    "is not living in the moment.",
    "operates a rapidly expanding kudzu farm."
  ]
};

function getRandomBio(author) {
  const options = bios[author];

  if (!options) return "";

  return options[Math.floor(Math.random() * options.length)];
}

document.querySelectorAll("[data-author]").forEach(element => {
  const author = element.dataset.author;
  element.textContent = getRandomBio(author);
});
