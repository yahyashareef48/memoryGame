const imageBox = document.querySelector("#image-box");
const restartBtn = document.querySelector("#restrat");
const lookbtn = document.querySelector("#take-a-look");

let numberOfCards = prompt("give as a number between 3 to 10");

//Generates and shuffles a list of card values.
let cardList = [];
for (let i = 1; i <= numberOfCards; i++) {
  cardList.push(i);
  cardList.push(i);
}
cardList = cardList.sort(() => Math.random() - 0.5);

// created the list to conduct the test
let cardTestList = [];

/* Generates image card elements for values in "cardList",
 adds click listener, and appends them to "imageBox" with overlay.*/
for (let i = 0; i < numberOfCards * 2; i++) {
  let div = document.createElement("div");
  let overlay = document.createElement("div");

  div.setAttribute("class", cardList[i]);
  div.innerHTML = `<img src="${cardList[i]}.jpg">`;
  div.addEventListener("click", imgFunc);

  overlay.setAttribute("class", "overlay");

  imageBox.appendChild(div);
  div.appendChild(overlay);
}

// reloding the pare
restartBtn.addEventListener("click", () => {
  location.reload();
});

// take a look btn listener
let clickCount = Math.floor(numberOfCards / 2);
lookbtn.addEventListener("click", () => {
  if (clickCount === 0) {
    alert("you'ed ritch your limit");
  } else {
    secLook();
    clickCount--;
  }
});

// Removes overlay class and adds card number to list.
function imgFunc() {
  this.querySelector(".overlay").classList.remove("overlay");
  cardTestList.push(this.classList[0]);
}

// Tests if two cards match; reloads page if they don't
setInterval(testCard, 100);
function testCard() {
  if (cardTestList.length == 2) {
    if (cardTestList[0] != cardTestList[1]) {
      location.reload();
    }
    cardTestList = [];
  }
}

/* This function checks if two cards match and reloads the page if they don't. 
It's called every 100ms using setInterval to ensure continuous checking of matched cards.*/
function secLook() {
  const imageItems = imageBox.querySelectorAll(".overlay");
  for (let i of imageItems) {
    i.style.display = "none";
  }

  setTimeout(() => {
    for (let i of imageItems) {
      i.style.display = "block";
    }
  }, 600);
}
secLook();
