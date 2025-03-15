// CREATE DECK ()
const generateDeck = () => {

  for (let suit of suits) {
    //for (let value of values) {
    values.forEach((text, value) => {
      value = value + 1;
      const card = { suit, text, value };
      deck.push(card);
    });
  }
};

// SHUFFLE DECK ()
const shuffleDeck = (deck) => {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
};

// DEAL CARDS ()
const dealCards = () => {
  if(deck.length===0)
  generateDeck();
  shuffleDeck(deck);
  const half = Math.floor(deck.length / 2);
  deck1 = deck.slice(0, half);
  deck2 = deck.slice(half);
};

// PLAY ()
const play = () => {
  
  shuffleDeck(deck1);
  shuffleDeck(deck2);
  
  let card1 = deck1.shift();
  let card2 = deck2.shift();

  if (card1.value > card2.value) {
    console.log("Player 1 wins this round.");
    deck1.push(card1, card2);
  } else {
    console.log("Player 2 wins this round.");
    deck2.push(card1, card2);
  }

  if (card1.value === card2.value && deck1.length > 3 && deck2.length > 3) {
    console.log("It's a tie.");
    let tempStack = [];

    for (i = 0; i <= 2; i++) {
      card1 = deck1.shift();
      card2 = deck2.shift();
      tempStack.push(card1, card2);
    }
    console.table(tempStack);
    card1 = deck1.shift();
    card2 = deck2.shift();

    card1.value > card2.value
      ? deck1.push(...tempStack, card1, card2) |
        console.log("Player 1 gets " + (tempStack.length + 4) + " Cards")
      : deck2.push(...tempStack, card1, card2) |
        console.log("Player 2 gets " + (tempStack.length + 4) + " Cards");
  }

  console.table(deck1, deck2);
};



let deck1 = [];
let deck2 = [];
let deck = [];

let suits = ["hearts", "diamonds", "spades", "clubs"];

let values = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
];




// DEAL CARDS BUTTON
document.querySelector(".deal").addEventListener("click", () => {
  dealCards();
  document.querySelector(".play").disabled = false;
  console.table(deck1); 
   console.table( deck2);
});




// PLAY BUTTON
document.querySelector(".play").addEventListener("click", () => {
  while (deck1.length !== 0 && deck2.length !== 0) {
    play();
    console.log(
      "PLayer 1: " +
        deck1.length +
        " cards." +
        "\n" +
        "Player 2: " +
        deck2.length +
        " cards."
    );
  }

  if (deck1.length === 0) {
    alert("Player 2 wins.");
  } else if (deck2.length === 0) {
    alert("Player 1 wins.");
  }
});






