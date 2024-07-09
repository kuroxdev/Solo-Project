var easyWords = [
  "come",
  "get",
  "give",
  "go",
  "keep",
  "let",
  "make",
  "put",
  "seem",
  "take",
  "be",
  "have",
  "say",
  "see",
  "send",
  "may",
  "will",
  "about",
  "across",
  "after",
  "against",
  "among",
  "at",
  "before",
  "between",
  "by",
  "down",
  "from",
  "off",
  "on",
  "over",
  "through",
  "to",
  "under",
  "up",
  "as",
  "till",
  "than",

  "the",
  "all",
  "any",
  "every",
  "no",
  "other",
  "some",
  "such",
  "that",
  "he",
  "you",
  "who",
  "and",
  "because",
  "but",
  "or",
  "though",
  "how",
  "when",
  "where",
  "why",
  "again",
  "ever",
  "far",
  "forward",
  "here",
  "near",
  "now",
  "out",
  "still",
  "then",
  "there",
  "together",
  "well",
  "almost",
  "enough",
  "even",
  "little",
  "much",
  "not",
  "only",
  "quite",
  "so",
  "very",
  "tomorrow",
  "yesterday",
  "north",
  "south",
  "east",
  "west",
  "please",
  "yes",
];

var Medium = [
  "angle",
  "ant",
  "apple",
  "arch",
  "arm",
  "army",
  "baby",
  "bag",
  "ball",
  "band",
  "basin",
  "basket",
  "bath",
  "bed",
  "bee",
  "bell",
  "berry",
  "bird",
  "blade",
  "board",
  "boat",
  "bone",
  "book",
  "boot",
  "bottle",
  "box",
  "boy",
  "brain",
  "brake",
  "branch",
  "brick",
  "bridge",
  "brush",
  "bucket",
  "bulb",
  "button",
  "cake",
  "camera",
  "card",
  "cart",
  "carriage",
  "cat",
  "chain",
  "cheese",
  "chest",
  "chin",
  "church",
  "circle",
  "clock",
  "cloud",
  "coat",
  "collar",
  "comb",
  "cord",
  "cow",
  "cup",
  "curtain",
  "cushion",
  "dog",
  "door",
  "drain",
  "drawer",
  "dress",
  "drop",
  "ear",
  "egg",
  "engine",
  "eye",
  "face",
  "farm",
  "feather",
  "finger",
  "fish",
  "flag",
  "floor",
  "fly",
  "foot",
  "fork",
  "fowl",
  "frame",
  "garden",
  "girl",
  "glove",
  "goat",
  "gun",
  "hair",
  "hammer",
  "hand",
  "hat",
  "head",
  "heart",
  "hook",
  "horn",
  "horse",
  "hospital",
  "house",
  "island",
  "jewel",
  "kettle",
  "key",
  "knee",
  "knife",
  "knot",
  "leaf",
  "leg",
  "library",
  "line",
  "lip",
  "lock",
  "map",
  "match",
  "monkey",
  "moon",
  "mouth",
  "muscle",
  "nail",
  "neck",
  "needle",
  "nerve",
  "net",
  "nose",
  "nut",
  "office",
  "orange",
  "oven",
  "parcel",
  "pen",
  "pencil",
  "picture",
  "pig",
  "pin",
  "pipe",
  "plane",
  "plate",
  "plough",
  "pocket",
  "pot",
  "potato",
  "prison",
  "pump",
  "rail",
  "rat",
  "receipt",
  "ring",
  "rod",
  "roof",
  "root",
  "sail",
  "school",
  "scissors",
  "screw",
  "seed",
  "sheep",
  "shelf",
  "ship",
  "shirt",
  "shoe",
  "skin",
  "skirt",
  "snake",
  "sock",
  "spade",
  "sponge",
  "spoon",
  "spring",
  "square",
  "stamp",
  "star",
  "station",
  "stem",
  "stick",
  "stocking",
  "stomach",
  "store",
  "street",
  "sun",
  "table",
  "tail",
  "thread",
  "throat",
  "thumb",
  "ticket",
  "toe",
  "tongue",
  "tooth",
  "town",
  "train",
  "tray",
  "tree",
  "trousers",
  "umbrella",
  "wall",
  "watch",
  "wheel",
  "whip",
  "whistle",
  "window",
  "wing",
  "wire",
];

var BossWord = [
  "Pseudopseudohypoparathyroidism",
  "Honorificabilitudinitatibus",
  "Uncopyrightable",
  "subdermatoglyphic",
  "Uncopyrightable",
  "Gratuitous",
  "Idiosyncratic",
];
let audio1 = new Audio("./pics/gameOver.mp3");
let audio2 = new Audio("./pics/zombiedie.mp3");
let audio3 = new Audio("./pics/death2.mp3");
let container = document.querySelector(".game");
let input = document.querySelector("input");
let numberOfZombiesKilled = 0;
let bossZombie = false;
let level = 1;
let zombies = [];

if (numberOfZombiesKilled > 10) {
  level = 2;
}

function createZombie() {
  let randomWord = "";
  if (bossZombie) {
    randomWord = BossWord[Math.floor(Math.random() * BossWord.length)];
  } else if (level === 1) {
    randomWord = easyWords[Math.floor(Math.random() * easyWords.length)];
  } else if (level === 2) {
    randomWord = Medium[Math.floor(Math.random() * Medium.length)];
  }
  let zombie = document.createElement("div");
  zombie.classList.add("zombie");
  zombie.textContent = randomWord;
  zombie.style.right = "0px";

  let calcWithzombie = container.clientHeight - 250;

  zombie.style.top = Math.floor(Math.random() * calcWithzombie) + "px";

  container.appendChild(zombie);
  zombies.push(zombie);

  moveZombie(zombie);
}

function moveZombie(zombie) {
  const interval = setInterval(() => {
    let right = parseInt(zombie.style.right);
    let left = parseInt(zombie.style.left);
    console.log(right);

    if (right === container.clientWidth) {
      clearInterval(interval);
      lost();
    } else {
      zombie.style.right = `${right + 4}px`;
    }
  }, 50);

  zombie.interval = interval;
}

function lost() {
  console.log("zombie arr", zombies);
  audio1.play();
  alert("You lost a zombie got inside your house");
  location.reload();
}

input.addEventListener("input", function (e) {
  for (let i = 0; i < zombies.length; i++) {
    if (zombies[i].textContent === e.target.value) {
      clearInterval(zombies[i].interval);
      zombies[i].classList.add("fade-out");
      audio2.play();
      zombies[i].addEventListener("animationend", function () {
        container.removeChild(zombies[i]);
        zombies.splice(i, 1);

        audio2.play();
      });
      input.value = "";
      numberOfZombiesKilled++;
    }
  }
});

setInterval(createZombie, 4000);
