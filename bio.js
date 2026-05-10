const bios = {
  hkoubliette: [
    "did shots with Japan's number one battle rapper.",
    "lives inside of a capsule hotel.",
    "maintains critical support for Bikkuri Donkey.",
    "is a small teenager wearing an eyepatch."
  ],

  yvettewheeler: [
    "hails from the land of magnets and pudding.",
    "is 5000 years <i>young</i>.",
    "is getting in the bathtub to flop around like a fish.",
    "is still trying to figure out her favorite numbers."
  ],
  
  tomacgau: [
    "has been diagnosed with autism by three different doctors. He still doesn't buy it.",
    "is cultivating disinterest.",
    "ghostwrote Hillbilly Elegy.",
    "is a casualty of the food allergies to gnosticism pipeline.",
    "has no mouth but he just can't stop smiling!",
    "is spitting on your grave to lube it up.",
    "is not living in the moment.",
    "operates a rapidly expanding kudzu farm."
  ],

  anomalouslovedoll: [
    "is currently stuffed inside of a box.",
    "will grant any of your wishes.",
    "will follow you into the afterlife.",
    "is always by your side!",
    "loves to play. Won't you?",
    "thinks she's better than you, but it's not personal.",
    "is feeling a bit lonely.",
    "hasn't been played with in 𝑥 days.",
    "is just a normal girl—promise!",
    "wants to be your friend.",
    "is enjoying fruitcakes and tea."
    ],

  yurifufurin: [
    "is growing increasingly alienated from his peers.",
    "is trapped inside sleep train arena for the time being.",
    "is really worried about you.",
    "survived a mystery health scare.",
    "emits an unpleasant aura.",
    "has been defeated.",
    "goes to the corner store once a day to buy delicious \“chocorooms.\”",
    "still gets calls from his childhood home, which was completely submerged after the hydroelectric dam was built.",
    ]
};

function getRandomBio(author) {
  const options = bios[author];

  if (!options) return "";

  return options[Math.floor(Math.random() * options.length)];
}

document.querySelectorAll("[data-author]").forEach(element => {
  const author = element.dataset.author;
  element.innerHTML = getRandomBio(author);
});
