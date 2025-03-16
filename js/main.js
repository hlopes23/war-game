// CREATE DECK ()
const generateDeck = () => {

  for (const [i, suit] of suits.entries()) {
    for(let element of elements){
      const card = {suit: suit, value: element.value, text: element.text, body: element.body[i]};
      deck.push(card);
    };
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
  drawDecks();
};


// DRAW DECKS FOR EACH PLAYER
const drawDecks = () => {
  const deckOne = document.getElementById("deck-one");
  const deckTwo = document.getElementById("deck-two");


  for (let i = 0; i <= 5; i++) {
    cardOne = document.createElement("article");
    cardOne.setAttribute("class", "background reverse");
    cardTwo = document.createElement("article");
    cardTwo.setAttribute("class", "background");
    deckOne.appendChild(cardOne);
    deckTwo.appendChild(cardTwo);
  }
}

// DRAW TEMP STACK
const drawTempStak = (card1, card2) =>{
  tempDeck = document.getElementById("temp");

  while (tempDeck.firstChild) {
    tempDeck.removeChild(tempDeck.firstChild);
  }

  equalOne = document.createElement("article");
  equalOne.setAttribute("id", "equal-one");
  equalOne.innerHTML = card1.body;

  equalTwo = document.createElement("article");
  equalTwo.setAttribute("id", "equal-two");
  equalTwo.innerHTML = card2.body;

  tempDeck.appendChild(equalOne);
  tempDeck.appendChild(equalTwo);

  for (let i = 0; i <= 5; i++){
    tempCard = document.createElement("article");
    tempCard.setAttribute("class", "temp-stack");
    tempDeck.appendChild(tempCard);
  }

  return true;
}


// DRAW CARDS IN TABLE
const drawCards = (card1, card2) => {

  let cardOne = document.getElementById('card-one');
  cardOne.innerHTML = card1.body;
  cardOne.style.display="flex";

  let cardTwo = document.getElementById('card-two');
  cardTwo.innerHTML = card2.body;
  cardTwo.style.display="flex";
}



// PLAY ()
const play = () => {

  document.getElementById("temp").style.display = "none";

  shuffleDeck(deck1);
  shuffleDeck(deck2);
  
  let card1 = deck1.shift();
  let card2 = deck2.shift();

  drawCards(card1, card2);

  card1.value > card2.value
    ? deck1.push(card1, card2)
    : deck2.push(card1, card2);


  if (card1.value === card2.value && deck1.length > 3 && deck2.length > 3) {
    let tempStack = [];
    document.getElementById("temp").style.display = "flex";
    drawTempStak(card1, card2);
    

    for (i = 0; i <= 2; i++) {
      card1 = deck1.shift();
      card2 = deck2.shift();
      tempStack.push(card1, card2);
    } 
    
    card1 = deck1.shift();
    card2 = deck2.shift();
    
    drawCards(card1, card2);

    if (card1.value > card2.value){
      deck1.push(...tempStack, card1, card2);
    } else {
      deck2.push(...tempStack, card1, card2);
    }

    if(card1.value === card2.value) {
      play()
    }

  }
};


//  ---- VARIABLES -----

let deck1 = [];
let deck2 = [];
let deck = [];
let equalOne;
let equalTwo;
let tempCard;
let tempDeck;

let suits = ["hearts", "diamonds", "spades", "clubs"];

let elements = [{value: 1, text: 'A', body: [
  `<div class="column one">
    <div class="row1">
      <div class="topleft corner">A</div>
      <div class="suit">
        <img class="cornerimgsuit" src="/img sources/spades.png" />
      </div>
    </div>
    <div class="row2"></div>
  </div>
  <div class="column two fig">
    <div class="row2">
      <div class="center">
        <img class="centerimgsuit" src="/img sources/spades.png" />
      </div>
    </div>
  </div>
  <div class="column five">
    <div class="row1">
      <div class="bottomright corner">A</div>
      <div class="suit">
        <img class="cornerimgsuit" src="/img sources/spades.png" />
      </div>
    </div>
    <div class="row2"></div>
    <div class="row1"></div>
  </div>`, `<div class="column one">
            <div class="row1">
              <div class="topleft corner">A</div>
              <div class="suit">
                <img class="cornerimgsuit" src="/img sources/hearts.png" />
              </div>
            </div>
            <div class="row2"></div>
          </div>
          <div class="column two fig">
            <div class="row2">
              <div class="center">
                <img class="centerimgsuit" src="/img sources/hearts.png" />
              </div>
            </div>
          </div>
          <div class="column five">
            <div class="row1">
              <div class="bottomright corner">A</div>
              <div class="suit">
                <img class="cornerimgsuit" src="/img sources/hearts.png" />
              </div>
            </div>
            <div class="row2"></div>
            <div class="row1"></div>
          </div>`, `<div class="column one">
            <div class="row1">
              <div class="topleft corner">A</div>
              <div class="suit">
                <img class="cornerimgsuit" src="/img sources/clubs.png" />
              </div>
            </div>
            <div class="row2"></div>
          </div>
          <div class="column two fig">
            <div class="row2">
              <div class="center">
                <img class="centerimgsuit" src="/img sources/clubs.png" />
              </div>
            </div>
          </div>
          <div class="column five">
            <div class="row1">
              <div class="bottomright corner">A</div>
              <div class="suit">
                <img class="cornerimgsuit" src="/img sources/clubs.png" />
              </div>
            </div>
            <div class="row2"></div>
            <div class="row1"></div>
          </div>`, `<div class="column one">
            <div class="row1">
              <div class="topleft corner">A</div>
              <div class="suit">
                <img class="cornerimgsuit" src="/img sources/diamonds.png" />
              </div>
            </div>
            <div class="row2"></div>
          </div>
          <div class="column two fig">
            <div class="row2">
              <div class="center">
                <img class="centerimgsuit" src="/img sources/diamonds.png" />
              </div>
            </div>
          </div>
          <div class="column five">
            <div class="row1">
              <div class="bottomright corner">A</div>
              <div class="suit">
                <img class="cornerimgsuit" src="/img sources/diamonds.png" />
              </div>
            </div>
            <div class="row2"></div>
            <div class="row1"></div>
          </div>`]}, {value: 2, text: '2', body:[`
            <div class="column one">
              <div class="row1">
                <div class="topleft corner">2</div>
                <div class="suit">
                  <img class="cornerimgsuit" src="/img sources/spades.png" />
                </div>
              </div>
              <div class="numrow2"></div>
            </div>
            <div class="column two"></div>
            <div class="column three">
              <div class="row1">
                <div class="suit">
                  <img class="insideimgsuit" src="/img sources/spades.png" />
                </div>
              </div>
              <div class="row1"></div>
              <div class="row1">
                <div class="suit">
                  <img
                    class="insideimgsuit rotateimgsuit"
                    src="/img sources/spades.png"
                  />
                </div>
              </div>
            </div>
            <div class="column four"></div>
            <div class="column five">
              <div class="row1">
                <div class="bottomright corner">2</div>
                <div class="suit">
                  <img class="cornerimgsuit" src="/img sources/spades.png" />
                </div>
              </div>
              <div class="row2"></div>
            </div>`, `<div class="column one">
            <div class="row1">
              <div class="topleft corner">2</div>
              <div class="suit">
                <img class="cornerimgsuit" src="/img sources/hearts.png" />
              </div>
            </div>
            <div class="numrow2"></div>
          </div>
          <div class="column two"></div>
          <div class="column three">
            <div class="row1">
              <div class="suit">
                <img class="insideimgsuit" src="/img sources/hearts.png" />
              </div>
            </div>
            <div class="row1"></div>
            <div class="row1">
              <div class="suit">
                <img
                  class="insideimgsuit rotateimgsuit"
                  src="/img sources/hearts.png"
                />
              </div>
            </div>
          </div>
          <div class="column four"></div>
          <div class="column five">
            <div class="row1">
              <div class="bottomright corner">2</div>
              <div class="suit">
                <img class="cornerimgsuit" src="/img sources/hearts.png" />
              </div>
            </div>
            <div class="row2"></div>
          </div>`, `<div class="column one">
            <div class="row1">
              <div class="topleft corner">2</div>
              <div class="suit">
                <img class="cornerimgsuit" src="/img sources/clubs.png" />
              </div>
            </div>
            <div class="numrow2"></div>
          </div>
          <div class="column two"></div>
          <div class="column three">
            <div class="row1">
              <div class="suit">
                <img class="insideimgsuit" src="/img sources/clubs.png" />
              </div>
            </div>
            <div class="row1"></div>
            <div class="row1">
              <div class="suit">
                <img
                  class="insideimgsuit rotateimgsuit"
                  src="/img sources/clubs.png"
                />
              </div>
            </div>
          </div>
          <div class="column four"></div>
          <div class="column five">
            <div class="row1">
              <div class="bottomright corner">2</div>
              <div class="suit">
                <img class="cornerimgsuit" src="/img sources/clubs.png" />
              </div>
            </div>
            <div class="row2"></div>
          </div>`, `<div class="column one">
            <div class="row1">
              <div class="topleft corner">2</div>
              <div class="suit">
                <img class="cornerimgsuit" src="/img sources/diamonds.png" />
              </div>
            </div>
            <div class="numrow2"></div>
          </div>
          <div class="column two"></div>
          <div class="column three">
            <div class="row1">
              <div class="suit">
                <img class="insideimgsuit" src="/img sources/diamonds.png" />
              </div>
            </div>
            <div class="row1"></div>
            <div class="row1">
              <div class="suit">
                <img
                  class="insideimgsuit rotateimgsuit"
                  src="/img sources/diamonds.png"
                />
              </div>
            </div>
          </div>
          <div class="column four"></div>
          <div class="column five">
            <div class="row1">
              <div class="bottomright corner">2</div>
              <div class="suit">
                <img class="cornerimgsuit" src="/img sources/diamonds.png" />
              </div>
            </div>
            <div class="row2"></div>
          </div>`]}, {value: 3, text: '3', body:[`<div class="column one">
            <div class="row1">
              <div class="topleft corner">3</div>
              <div class="suit">
                <img class="cornerimgsuit" src="/img sources/spades.png" />
              </div>
            </div>
            <div class="row2"></div>
          </div>
          <div class="column two"></div>
          <div class="column three">
            <div class="row1">
              <div class="suit">
                <img class="insideimgsuit" src="/img sources/spades.png" />
              </div>
            </div>
            <div class="row1">
              <div class="suit">
                <img class="insideimgsuit" src="/img sources/spades.png" />
              </div>
            </div>
            <div class="row1">
              <div class="suit">
                <img
                  class="insideimgsuit rotateimgsuit"
                  src="/img sources/spades.png"
                />
              </div>
            </div>
          </div>
          <div class="column four"></div>
          <div class="column five">
            <div class="row1">
              <div class="bottomright corner">3</div>
              <div class="suit">
                <img class="cornerimgsuit" src="/img sources/spades.png" />
              </div>
            </div>
            <div class="row2"></div>
          </div>`, `<div class="column one">
            <div class="row1">
              <div class="topleft corner">3</div>
              <div class="suit">
                <img class="cornerimgsuit" src="/img sources/hearts.png" />
              </div>
            </div>
            <div class="row2"></div>
          </div>
          <div class="column two"></div>
          <div class="column three">
            <div class="row1">
              <div class="suit">
                <img class="insideimgsuit" src="/img sources/hearts.png" />
              </div>
            </div>
            <div class="row1">
              <div class="suit">
                <img class="insideimgsuit" src="/img sources/hearts.png" />
              </div>
            </div>
            <div class="row1">
              <div class="suit">
                <img
                  class="insideimgsuit rotateimgsuit"
                  src="/img sources/hearts.png"
                />
              </div>
            </div>
          </div>
          <div class="column four"></div>
          <div class="column five">
            <div class="row1">
              <div class="bottomright corner">3</div>
              <div class="suit">
                <img class="cornerimgsuit" src="/img sources/hearts.png" />
              </div>
            </div>
            <div class="row2"></div>
          </div>`, `<div class="column one">
            <div class="row1">
              <div class="topleft corner">3</div>
              <div class="suit">
                <img class="cornerimgsuit" src="/img sources/clubs.png" />
              </div>
            </div>
            <div class="row2"></div>
          </div>
          <div class="column two"></div>
          <div class="column three">
            <div class="row1">
              <div class="suit">
                <img class="insideimgsuit" src="/img sources/clubs.png" />
              </div>
            </div>
            <div class="row1">
              <div class="suit">
                <img class="insideimgsuit" src="/img sources/clubs.png" />
              </div>
            </div>
            <div class="row1">
              <div class="suit">
                <img
                  class="insideimgsuit rotateimgsuit"
                  src="/img sources/clubs.png"
                />
              </div>
            </div>
          </div>
          <div class="column four"></div>
          <div class="column five">
            <div class="row1">
              <div class="bottomright corner">3</div>
              <div class="suit">
                <img class="cornerimgsuit" src="/img sources/clubs.png" />
              </div>
            </div>
            <div class="row2"></div>
          </div>`, `<div class="column one">
            <div class="row1">
              <div class="topleft corner">3</div>
              <div class="suit">
                <img class="cornerimgsuit" src="/img sources/diamonds.png" />
              </div>
            </div>
            <div class="row2"></div>
          </div>
          <div class="column two"></div>
          <div class="column three">
            <div class="row1">
              <div class="suit">
                <img class="insideimgsuit" src="/img sources/diamonds.png" />
              </div>
            </div>
            <div class="row1">
              <div class="suit">
                <img class="insideimgsuit" src="/img sources/diamonds.png" />
              </div>
            </div>
            <div class="row1">
              <div class="suit">
                <img
                  class="insideimgsuit rotateimgsuit"
                  src="/img sources/diamonds.png"
                />
              </div>
            </div>
          </div>
          <div class="column four"></div>
          <div class="column five">
            <div class="row1">
              <div class="bottomright corner">3</div>
              <div class="suit">
                <img class="cornerimgsuit" src="/img sources/diamonds.png" />
              </div>
            </div>
            <div class="row2"></div>
          </div>`]}, {value: 4, text: '4', body:[`<div class="column one">
            <div class="row1">
              <div class="topleft corner">4</div>
              <div class="suit">
                <img class="cornerimgsuit" src="/img sources/spades.png" />
              </div>
            </div>
            <div class="row2"></div>
          </div>
          <div class="column two">
            <div class="row1">
              <div class="suit">
                <img class="insideimgsuit" src="/img sources/spades.png" />
              </div>
            </div>
            <div class="row1"></div>
            <div class="row1">
              <div class="suit">
                <img
                  class="insideimgsuit rotateimgsuit"
                  src="/img sources/spades.png"
                />
              </div>
            </div>
          </div>
          <div class="column three"></div>
          <div class="column four">
            <div class="row1">
              <div class="suit">
                <img class="insideimgsuit" src="/img sources/spades.png" />
              </div>
            </div>
            <div class="row1"></div>
            <div class="row1">
              <div class="suit">
                <img
                  class="insideimgsuit rotateimgsuit"
                  src="/img sources/spades.png"
                />
              </div>
            </div>
          </div>
          <div class="column five">
            <div class="row1">
              <div class="bottomright corner">4</div>
              <div class="suit">
                <img class="cornerimgsuit" src="/img sources/spades.png" />
              </div>
            </div>
            <div class="row2"></div>
          </div>`, `<div class="column one">
            <div class="row1">
              <div class="topleft corner">4</div>
              <div class="suit">
                <img class="cornerimgsuit" src="/img sources/hearts.png" />
              </div>
            </div>
            <div class="row2"></div>
          </div>
          <div class="column two">
            <div class="row1">
              <div class="suit">
                <img class="insideimgsuit" src="/img sources/hearts.png" />
              </div>
            </div>
            <div class="row1"></div>
            <div class="row1">
              <div class="suit">
                <img
                  class="insideimgsuit rotateimgsuit"
                  src="/img sources/hearts.png"
                />
              </div>
            </div>
          </div>
          <div class="column three"></div>
          <div class="column four">
            <div class="row1">
              <div class="suit">
                <img class="insideimgsuit" src="/img sources/hearts.png" />
              </div>
            </div>
            <div class="row1"></div>
            <div class="row1">
              <div class="suit">
                <img
                  class="insideimgsuit rotateimgsuit"
                  src="/img sources/hearts.png"
                />
              </div>
            </div>
          </div>
          <div class="column five">
            <div class="row1">
              <div class="bottomright corner">4</div>
              <div class="suit">
                <img class="cornerimgsuit" src="/img sources/hearts.png" />
              </div>
            </div>
            <div class="row2"></div>
          </div>`, `<div class="column one">
            <div class="row1">
              <div class="topleft corner">4</div>
              <div class="suit">
                <img class="cornerimgsuit" src="/img sources/clubs.png" />
              </div>
            </div>
            <div class="row2"></div>
          </div>
          <div class="column two">
            <div class="row1">
              <div class="suit">
                <img class="insideimgsuit" src="/img sources/clubs.png" />
              </div>
            </div>
            <div class="row1"></div>
            <div class="row1">
              <div class="suit">
                <img
                  class="insideimgsuit rotateimgsuit"
                  src="/img sources/clubs.png"
                />
              </div>
            </div>
          </div>
          <div class="column three"></div>
          <div class="column four">
            <div class="row1">
              <div class="suit">
                <img class="insideimgsuit" src="/img sources/clubs.png" />
              </div>
            </div>
            <div class="row1"></div>
            <div class="row1">
              <div class="suit">
                <img
                  class="insideimgsuit rotateimgsuit"
                  src="/img sources/clubs.png"
                />
              </div>
            </div>
          </div>
          <div class="column five">
            <div class="row1">
              <div class="bottomright corner">4</div>
              <div class="suit">
                <img class="cornerimgsuit" src="/img sources/clubs.png" />
              </div>
            </div>
            <div class="row2"></div>
          </div>`, `<div class="column one">
            <div class="row1">
              <div class="topleft corner">4</div>
              <div class="suit">
                <img class="cornerimgsuit" src="/img sources/diamonds.png" />
              </div>
            </div>
            <div class="row2"></div>
          </div>
          <div class="column two">
            <div class="row1">
              <div class="suit">
                <img class="insideimgsuit" src="/img sources/diamonds.png" />
              </div>
            </div>
            <div class="row1"></div>
            <div class="row1">
              <div class="suit">
                <img
                  class="insideimgsuit rotateimgsuit"
                  src="/img sources/diamonds.png"
                />
              </div>
            </div>
          </div>
          <div class="column three"></div>
          <div class="column four">
            <div class="row1">
              <div class="suit">
                <img class="insideimgsuit" src="/img sources/diamonds.png" />
              </div>
            </div>
            <div class="row1"></div>
            <div class="row1">
              <div class="suit">
                <img
                  class="insideimgsuit rotateimgsuit"
                  src="/img sources/diamonds.png"
                />
              </div>
            </div>
          </div>
          <div class="column five">
            <div class="row1">
              <div class="bottomright corner">4</div>
              <div class="suit">
                <img class="cornerimgsuit" src="/img sources/diamonds.png" />
              </div>
            </div>
            <div class="row2"></div>
          </div>`]}, {value: 5, text: '5', body:[`<div class="column one">
            <div class="row1">
              <div class="topleft corner">5</div>
              <div class="suit">
                <img class="cornerimgsuit" src="/img sources/spades.png" />
              </div>
            </div>
            <div class="row2"></div>
          </div>
          <div class="column two">
            <div class="row1">
              <div class="suit">
                <img class="insideimgsuit" src="/img sources/spades.png" />
              </div>
            </div>
            <div class="row1"></div>
            <div class="row1">
              <div class="suit">
                <img
                  class="insideimgsuit rotateimgsuit"
                  src="/img sources/spades.png"
                />
              </div>
            </div>
          </div>
          <div class="column three">
            <div class="row1"></div>
            <div class="row1">
              <div class="suit">
                <img class="insideimgsuit" src="/img sources/spades.png" />
              </div>
            </div>
            <div class="row1"></div>
          </div>
          <div class="column four">
            <div class="row1">
              <div class="suit">
                <img class="insideimgsuit" src="/img sources/spades.png" />
              </div>
            </div>
            <div class="row1"></div>
            <div class="row1">
              <div class="suit">
                <img
                  class="insideimgsuit rotateimgsuit"
                  src="/img sources/spades.png"
                />
              </div>
            </div>
          </div>
          <div class="column five">
            <div class="row1">
              <div class="bottomright corner">5</div>
              <div class="suit">
                <img class="cornerimgsuit" src="/img sources/spades.png" />
              </div>
            </div>
            <div class="row2"></div>
          </div>`, `<div class="column one">
            <div class="row1">
              <div class="topleft corner">5</div>
              <div class="suit">
                <img class="cornerimgsuit" src="/img sources/hearts.png" />
              </div>
            </div>
            <div class="row2"></div>
          </div>
          <div class="column two">
            <div class="row1">
              <div class="suit">
                <img class="insideimgsuit" src="/img sources/hearts.png" />
              </div>
            </div>
            <div class="row1"></div>
            <div class="row1">
              <div class="suit">
                <img
                  class="insideimgsuit rotateimgsuit"
                  src="/img sources/hearts.png"
                />
              </div>
            </div>
          </div>
          <div class="column three">
            <div class="row1"></div>
            <div class="row1">
              <div class="suit">
                <img class="insideimgsuit" src="/img sources/hearts.png" />
              </div>
            </div>
            <div class="row1"></div>
          </div>
          <div class="column four">
            <div class="row1">
              <div class="suit">
                <img class="insideimgsuit" src="/img sources/hearts.png" />
              </div>
            </div>
            <div class="row1"></div>
            <div class="row1">
              <div class="suit">
                <img
                  class="insideimgsuit rotateimgsuit"
                  src="/img sources/hearts.png"
                />
              </div>
            </div>
          </div>
          <div class="column five">
            <div class="row1">
              <div class="bottomright corner">5</div>
              <div class="suit">
                <img class="cornerimgsuit" src="/img sources/hearts.png" />
              </div>
            </div>
            <div class="row2"></div>
          </div>`, `<div class="column one">
            <div class="row1">
              <div class="topleft corner">4</div>
              <div class="suit">
                <img class="cornerimgsuit" src="/img sources/clubs.png" />
              </div>
            </div>
            <div class="row2"></div>
          </div>
          <div class="column two">
            <div class="row1">
              <div class="suit">
                <img class="insideimgsuit" src="/img sources/clubs.png" />
              </div>
            </div>
            <div class="row1"></div>
            <div class="row1">
              <div class="suit">
                <img
                  class="insideimgsuit rotateimgsuit"
                  src="/img sources/clubs.png"
                />
              </div>
            </div>
          </div>
          <div class="column three"></div>
          <div class="column four">
            <div class="row1">
              <div class="suit">
                <img class="insideimgsuit" src="/img sources/clubs.png" />
              </div>
            </div>
            <div class="row1"></div>
            <div class="row1">
              <div class="suit">
                <img
                  class="insideimgsuit rotateimgsuit"
                  src="/img sources/clubs.png"
                />
              </div>
            </div>
          </div>
          <div class="column five">
            <div class="row1">
              <div class="bottomright corner">4</div>
              <div class="suit">
                <img class="cornerimgsuit" src="/img sources/clubs.png" />
              </div>
            </div>
            <div class="row2"></div>
          </div>`, `<div class="column one">
            <div class="row1">
              <div class="topleft corner">5</div>
              <div class="suit">
                <img class="cornerimgsuit" src="/img sources/diamonds.png" />
              </div>
            </div>
            <div class="row2"></div>
          </div>
          <div class="column two">
            <div class="row1">
              <div class="suit">
                <img class="insideimgsuit" src="/img sources/diamonds.png" />
              </div>
            </div>
            <div class="row1"></div>
            <div class="row1">
              <div class="suit">
                <img
                  class="insideimgsuit rotateimgsuit"
                  src="/img sources/diamonds.png"
                />
              </div>
            </div>
          </div>
          <div class="column three">
            <div class="row1"></div>
            <div class="row1">
              <div class="suit">
                <img class="insideimgsuit" src="/img sources/diamonds.png" />
              </div>
            </div>
            <div class="row1"></div>
          </div>
          <div class="column four">
            <div class="row1">
              <div class="suit">
                <img class="insideimgsuit" src="/img sources/diamonds.png" />
              </div>
            </div>
            <div class="row1"></div>
            <div class="row1">
              <div class="suit">
                <img
                  class="insideimgsuit rotateimgsuit"
                  src="/img sources/diamonds.png"
                />
              </div>
            </div>
          </div>
          <div class="column five">
            <div class="row1">
              <div class="bottomright corner">5</div>
              <div class="suit">
                <img class="cornerimgsuit" src="/img sources/diamonds.png" />
              </div>
            </div>
            <div class="row2"></div>
          </div>`]}, {value: 6, text: '6', body:[`<div class="column one">
            <div class="row1">
              <div class="topleft corner">6</div>
              <div class="suit">
                <img class="cornerimgsuit" src="/img sources/spades.png" />
              </div>
            </div>
            <div class="row2"></div>
          </div>
          <div class="column two">
            <div class="row1">
              <div class="suit">
                <img class="insideimgsuit" src="/img sources/spades.png" />
              </div>
            </div>
            <div class="row1">
              <div class="suit">
                <img class="insideimgsuit" src="/img sources/spades.png" />
              </div>
            </div>
            <div class="row1">
              <div class="suit">
                <img
                  class="insideimgsuit rotateimgsuit"
                  src="/img sources/spades.png"
                />
              </div>
            </div>
          </div>
          <div class="column three"></div>
          <div class="column four">
            <div class="row1">
              <div class="suit">
                <img class="insideimgsuit" src="/img sources/spades.png" />
              </div>
            </div>
            <div class="row1">
              <div class="suit">
                <img class="insideimgsuit" src="/img sources/spades.png" />
              </div>
            </div>
            <div class="row1">
              <div class="suit">
                <img
                  class="insideimgsuit rotateimgsuit"
                  src="/img sources/spades.png"
                />
              </div>
            </div>
          </div>
          <div class="column five">
            <div class="row1">
              <div class="topleft corner">6</div>
              <div class="suit">
                <img class="cornerimgsuit" src="/img sources/spades.png" />
              </div>
            </div>
            <div class="row2"></div>
          </div>`, `<div class="column one">
            <div class="row1">
              <div class="topleft corner">6</div>
              <div class="suit">
                <img class="cornerimgsuit" src="/img sources/hearts.png" />
              </div>
            </div>
            <div class="row2"></div>
          </div>
          <div class="column two">
            <div class="row1">
              <div class="suit">
                <img class="insideimgsuit" src="/img sources/hearts.png" />
              </div>
            </div>
            <div class="row1">
              <div class="suit">
                <img class="insideimgsuit" src="/img sources/hearts.png" />
              </div>
            </div>
            <div class="row1">
              <div class="suit">
                <img
                  class="insideimgsuit rotateimgsuit"
                  src="/img sources/hearts.png"
                />
              </div>
            </div>
          </div>
          <div class="column three"></div>
          <div class="column four">
            <div class="row1">
              <div class="suit">
                <img class="insideimgsuit" src="/img sources/hearts.png" />
              </div>
            </div>
            <div class="row1">
              <div class="suit">
                <img class="insideimgsuit" src="/img sources/hearts.png" />
              </div>
            </div>
            <div class="row1">
              <div class="suit">
                <img
                  class="insideimgsuit rotateimgsuit"
                  src="/img sources/hearts.png"
                />
              </div>
            </div>
          </div>
          <div class="column five">
            <div class="row1">
              <div class="topleft corner">6</div>
              <div class="suit">
                <img class="cornerimgsuit" src="/img sources/hearts.png" />
              </div>
            </div>
            <div class="row2"></div>
          </div>`, `<div class="column one">
            <div class="row1">
              <div class="topleft corner">6</div>
              <div class="suit">
                <img class="cornerimgsuit" src="/img sources/clubs.png" />
              </div>
            </div>
            <div class="row2"></div>
          </div>
          <div class="column two">
            <div class="row1">
              <div class="suit">
                <img class="insideimgsuit" src="/img sources/clubs.png" />
              </div>
            </div>
            <div class="row1">
              <div class="suit">
                <img class="insideimgsuit" src="/img sources/clubs.png" />
              </div>
            </div>
            <div class="row1">
              <div class="suit">
                <img
                  class="insideimgsuit rotateimgsuit"
                  src="/img sources/clubs.png"
                />
              </div>
            </div>
          </div>
          <div class="column three"></div>
          <div class="column four">
            <div class="row1">
              <div class="suit">
                <img class="insideimgsuit" src="/img sources/clubs.png" />
              </div>
            </div>
            <div class="row1">
              <div class="suit">
                <img class="insideimgsuit" src="/img sources/clubs.png" />
              </div>
            </div>
            <div class="row1">
              <div class="suit">
                <img
                  class="insideimgsuit rotateimgsuit"
                  src="/img sources/clubs.png"
                />
              </div>
            </div>
          </div>
          <div class="column five">
            <div class="row1">
              <div class="topleft corner">6</div>
              <div class="suit">
                <img class="cornerimgsuit" src="/img sources/clubs.png" />
              </div>
            </div>
            <div class="row2"></div>
          </div>`, `<div class="column one">
            <div class="row1">
              <div class="topleft corner">6</div>
              <div class="suit">
                <img class="cornerimgsuit" src="/img sources/diamonds.png" />
              </div>
            </div>
            <div class="row2"></div>
          </div>
          <div class="column two">
            <div class="row1">
              <div class="suit">
                <img class="insideimgsuit" src="/img sources/diamonds.png" />
              </div>
            </div>
            <div class="row1">
              <div class="suit">
                <img class="insideimgsuit" src="/img sources/diamonds.png" />
              </div>
            </div>
            <div class="row1">
              <div class="suit">
                <img
                  class="insideimgsuit rotateimgsuit"
                  src="/img sources/diamonds.png"
                />
              </div>
            </div>
          </div>
          <div class="column three"></div>
          <div class="column four">
            <div class="row1">
              <div class="suit">
                <img class="insideimgsuit" src="/img sources/diamonds.png" />
              </div>
            </div>
            <div class="row1">
              <div class="suit">
                <img class="insideimgsuit" src="/img sources/diamonds.png" />
              </div>
            </div>
            <div class="row1">
              <div class="suit">
                <img
                  class="insideimgsuit rotateimgsuit"
                  src="/img sources/diamonds.png"
                />
              </div>
            </div>
          </div>
          <div class="column five">
            <div class="row1">
              <div class="topleft corner">6</div>
              <div class="suit">
                <img class="cornerimgsuit" src="/img sources/diamonds.png" />
              </div>
            </div>
            <div class="row2"></div>
          </div>`]}, {value: 7, text: '7', body:[`<div class="column one">
            <div class="row1">
              <div class="topleft corner">7</div>
              <div class="suit">
                <img class="cornerimgsuit" src="/img sources/spades.png" />
              </div>
            </div>
            <div class="row2"></div>
          </div>
          <div class="column two">
            <div class="row1">
              <div class="suit">
                <img class="insideimgsuit" src="/img sources/spades.png" />
              </div>
            </div>
            <div class="row1">
              <div class="suit">
                <img class="insideimgsuit" src="/img sources/spades.png" />
              </div>
            </div>
            <div class="row1">
              <div class="suit">
                <img
                  class="insideimgsuit rotateimgsuit"
                  src="/img sources/spades.png"
                />
              </div>
            </div>
          </div>
          <div class="column three">
            <div class="row1"></div>
            <div class="row1 middlerow1">
              <div class="suit">
                <img class="insideimgsuit" src="/img sources/spades.png" />
              </div>
            </div>
            <div class="row1"></div>
            <div class="row1"></div>
          </div>
          <div class="column four">
            <div class="row1">
              <div class="suit">
                <img class="insideimgsuit" src="/img sources/spades.png" />
              </div>
            </div>
            <div class="row1">
              <div class="suit">
                <img class="insideimgsuit" src="/img sources/spades.png" />
              </div>
            </div>
            <div class="row1">
              <div class="suit">
                <img
                  class="insideimgsuit rotateimgsuit"
                  src="/img sources/spades.png"
                />
              </div>
            </div>
          </div>
          <div class="column five">
            <div class="row1">
              <div class="topleft corner">7</div>
              <div class="suit">
                <img class="cornerimgsuit" src="/img sources/spades.png" />
              </div>
            </div>
            <div class="row2"></div>
          </div>`, `<div class="column one">
            <div class="row1">
              <div class="topleft corner">7</div>
              <div class="suit">
                <img class="cornerimgsuit" src="/img sources/hearts.png" />
              </div>
            </div>
            <div class="row2"></div>
          </div>
          <div class="column two">
            <div class="row1">
              <div class="suit">
                <img class="insideimgsuit" src="/img sources/hearts.png" />
              </div>
            </div>
            <div class="row1">
              <div class="suit">
                <img class="insideimgsuit" src="/img sources/hearts.png" />
              </div>
            </div>
            <div class="row1">
              <div class="suit">
                <img
                  class="insideimgsuit rotateimgsuit"
                  src="/img sources/hearts.png"
                />
              </div>
            </div>
          </div>
          <div class="column three">
            <div class="row1"></div>
            <div class="row1 middlerow1">
              <div class="suit">
                <img class="insideimgsuit" src="/img sources/hearts.png" />
              </div>
            </div>
            <div class="row1"></div>
            <div class="row1"></div>
          </div>
          <div class="column four">
            <div class="row1">
              <div class="suit">
                <img class="insideimgsuit" src="/img sources/hearts.png" />
              </div>
            </div>
            <div class="row1">
              <div class="suit">
                <img class="insideimgsuit" src="/img sources/hearts.png" />
              </div>
            </div>
            <div class="row1">
              <div class="suit">
                <img
                  class="insideimgsuit rotateimgsuit"
                  src="/img sources/hearts.png"
                />
              </div>
            </div>
          </div>
          <div class="column five">
            <div class="row1">
              <div class="topleft corner">7</div>
              <div class="suit">
                <img class="cornerimgsuit" src="/img sources/hearts.png" />
              </div>
            </div>
            <div class="row2"></div>
          </div>`, `<div class="column one">
            <div class="row1">
              <div class="topleft corner">7</div>
              <div class="suit">
                <img class="cornerimgsuit" src="/img sources/clubs.png" />
              </div>
            </div>
            <div class="row2"></div>
          </div>
          <div class="column two">
            <div class="row1">
              <div class="suit">
                <img class="insideimgsuit" src="/img sources/clubs.png" />
              </div>
            </div>
            <div class="row1">
              <div class="suit">
                <img class="insideimgsuit" src="/img sources/clubs.png" />
              </div>
            </div>
            <div class="row1">
              <div class="suit">
                <img
                  class="insideimgsuit rotateimgsuit"
                  src="/img sources/clubs.png"
                />
              </div>
            </div>
          </div>
          <div class="column three">
            <div class="row1"></div>
            <div class="row1 middlerow1">
              <div class="suit">
                <img class="insideimgsuit" src="/img sources/clubs.png" />
              </div>
            </div>
            <div class="row1"></div>
            <div class="row1"></div>
          </div>
          <div class="column four">
            <div class="row1">
              <div class="suit">
                <img class="insideimgsuit" src="/img sources/clubs.png" />
              </div>
            </div>
            <div class="row1">
              <div class="suit">
                <img class="insideimgsuit" src="/img sources/clubs.png" />
              </div>
            </div>
            <div class="row1">
              <div class="suit">
                <img
                  class="insideimgsuit rotateimgsuit"
                  src="/img sources/clubs.png"
                />
              </div>
            </div>
          </div>
          <div class="column five">
            <div class="row1">
              <div class="topleft corner">7</div>
              <div class="suit">
                <img class="cornerimgsuit" src="/img sources/clubs.png" />
              </div>
            </div>
            <div class="row2"></div>
          </div>`, `<div class="column one">
            <div class="row1">
              <div class="topleft corner">7</div>
              <div class="suit">
                <img class="cornerimgsuit" src="/img sources/diamonds.png" />
              </div>
            </div>
            <div class="row2"></div>
          </div>
          <div class="column two">
            <div class="row1">
              <div class="suit">
                <img class="insideimgsuit" src="/img sources/diamonds.png" />
              </div>
            </div>
            <div class="row1">
              <div class="suit">
                <img class="insideimgsuit" src="/img sources/diamonds.png" />
              </div>
            </div>
            <div class="row1">
              <div class="suit">
                <img
                  class="insideimgsuit rotateimgsuit"
                  src="/img sources/diamonds.png"
                />
              </div>
            </div>
          </div>
          <div class="column three">
            <div class="row1"></div>
            <div class="row1 middlerow1">
              <div class="suit">
                <img class="insideimgsuit" src="/img sources/diamonds.png" />
              </div>
            </div>
            <div class="row1"></div>
            <div class="row1"></div>
          </div>
          <div class="column four">
            <div class="row1">
              <div class="suit">
                <img class="insideimgsuit" src="/img sources/diamonds.png" />
              </div>
            </div>
            <div class="row1">
              <div class="suit">
                <img class="insideimgsuit" src="/img sources/diamonds.png" />
              </div>
            </div>
            <div class="row1">
              <div class="suit">
                <img
                  class="insideimgsuit rotateimgsuit"
                  src="/img sources/diamonds.png"
                />
              </div>
            </div>
          </div>
          <div class="column five">
            <div class="row1">
              <div class="topleft corner">7</div>
              <div class="suit">
                <img class="cornerimgsuit" src="/img sources/diamonds.png" />
              </div>
            </div>
            <div class="row2"></div>
          </div>`]}, {value: 8, text: '8', body:[`<div class="column one">
            <div class="row1">
              <div class="topleft corner">8</div>
              <div class="suit">
                <img class="cornerimgsuit" src="/img sources/spades.png" />
              </div>
            </div>
            <div class="row2"></div>
          </div>
          <div class="column two">
            <div class="row1">
              <div class="suit">
                <img class="insideimgsuit" src="/img sources/spades.png" />
              </div>
            </div>
            <div class="row1">
              <div class="suit">
                <img class="insideimgsuit" src="/img sources/spades.png" />
              </div>
            </div>
            <div class="row1">
              <div class="suit">
                <img
                  class="insideimgsuit rotateimgsuit"
                  src="/img sources/spades.png"
                />
              </div>
            </div>
          </div>
          <div class="column three">
            <div class="row1"></div>
            <div class="row1 middlerow1">
              <div class="suit">
                <img class="insideimgsuit" src="/img sources/spades.png" />
              </div>
            </div>
            <div class="row1 middlerow2">
              <div class="suit">
                <img
                  class="insideimgsuit rotateimgsuit"
                  src="/img sources/spades.png"
                />
              </div>
            </div>
            <div class="row1"></div>
          </div>
          <div class="column four">
            <div class="row1">
              <div class="suit">
                <img class="insideimgsuit" src="/img sources/spades.png" />
              </div>
            </div>
            <div class="row1">
              <div class="suit">
                <img class="insideimgsuit" src="/img sources/spades.png" />
              </div>
            </div>
            <div class="row1">
              <div class="suit">
                <img
                  class="insideimgsuit rotateimgsuit"
                  src="/img sources/spades.png"
                />
              </div>
            </div>
          </div>
          <div class="column five">
            <div class="row1">
              <div class="topleft corner">8</div>
              <div class="suit">
                <img class="cornerimgsuit" src="/img sources/spades.png" />
              </div>
            </div>
            <div class="row2"></div>
          </div>`, `<div class="column one">
            <div class="row1">
              <div class="topleft corner">8</div>
              <div class="suit">
                <img class="cornerimgsuit" src="/img sources/hearts.png" />
              </div>
            </div>
            <div class="row2"></div>
          </div>
          <div class="column two">
            <div class="row1">
              <div class="suit">
                <img class="insideimgsuit" src="/img sources/hearts.png" />
              </div>
            </div>
            <div class="row1">
              <div class="suit">
                <img class="insideimgsuit" src="/img sources/hearts.png" />
              </div>
            </div>
            <div class="row1">
              <div class="suit">
                <img
                  class="insideimgsuit rotateimgsuit"
                  src="/img sources/hearts.png"
                />
              </div>
            </div>
          </div>
          <div class="column three">
            <div class="row1"></div>
            <div class="row1 middlerow1">
              <div class="suit">
                <img class="insideimgsuit" src="/img sources/hearts.png" />
              </div>
            </div>
            <div class="row1 middlerow2">
              <div class="suit">
                <img
                  class="insideimgsuit rotateimgsuit"
                  src="/img sources/hearts.png"
                />
              </div>
            </div>
            <div class="row1"></div>
          </div>
          <div class="column four">
            <div class="row1">
              <div class="suit">
                <img class="insideimgsuit" src="/img sources/hearts.png" />
              </div>
            </div>
            <div class="row1">
              <div class="suit">
                <img class="insideimgsuit" src="/img sources/hearts.png" />
              </div>
            </div>
            <div class="row1">
              <div class="suit">
                <img
                  class="insideimgsuit rotateimgsuit"
                  src="/img sources/hearts.png"
                />
              </div>
            </div>
          </div>
          <div class="column five">
            <div class="row1">
              <div class="topleft corner">8</div>
              <div class="suit">
                <img class="cornerimgsuit" src="/img sources/hearts.png" />
              </div>
            </div>
            <div class="row2"></div>
          </div>`, `<div class="column one">
            <div class="row1">
              <div class="topleft corner">8</div>
              <div class="suit">
                <img class="cornerimgsuit" src="/img sources/clubs.png" />
              </div>
            </div>
            <div class="row2"></div>
          </div>
          <div class="column two">
            <div class="row1">
              <div class="suit">
                <img class="insideimgsuit" src="/img sources/clubs.png" />
              </div>
            </div>
            <div class="row1">
              <div class="suit">
                <img class="insideimgsuit" src="/img sources/clubs.png" />
              </div>
            </div>
            <div class="row1">
              <div class="suit">
                <img
                  class="insideimgsuit rotateimgsuit"
                  src="/img sources/clubs.png"
                />
              </div>
            </div>
          </div>
          <div class="column three">
            <div class="row1"></div>
            <div class="row1 middlerow1">
              <div class="suit">
                <img class="insideimgsuit" src="/img sources/clubs.png" />
              </div>
            </div>
            <div class="row1 middlerow2">
              <div class="suit">
                <img
                  class="insideimgsuit rotateimgsuit"
                  src="/img sources/clubs.png"
                />
              </div>
            </div>
            <div class="row1"></div>
          </div>
          <div class="column four">
            <div class="row1">
              <div class="suit">
                <img class="insideimgsuit" src="/img sources/clubs.png" />
              </div>
            </div>
            <div class="row1">
              <div class="suit">
                <img class="insideimgsuit" src="/img sources/clubs.png" />
              </div>
            </div>
            <div class="row1">
              <div class="suit">
                <img
                  class="insideimgsuit rotateimgsuit"
                  src="/img sources/clubs.png"
                />
              </div>
            </div>
          </div>
          <div class="column five">
            <div class="row1">
              <div class="topleft corner">8</div>
              <div class="suit">
                <img class="cornerimgsuit" src="/img sources/clubs.png" />
              </div>
            </div>
            <div class="row2"></div>
          </div>`, `<div class="column one">
            <div class="row1">
              <div class="topleft corner">8</div>
              <div class="suit">
                <img class="cornerimgsuit" src="/img sources/diamonds.png" />
              </div>
            </div>
            <div class="row2"></div>
          </div>
          <div class="column two">
            <div class="row1">
              <div class="suit">
                <img class="insideimgsuit" src="/img sources/diamonds.png" />
              </div>
            </div>
            <div class="row1">
              <div class="suit">
                <img class="insideimgsuit" src="/img sources/diamonds.png" />
              </div>
            </div>
            <div class="row1">
              <div class="suit">
                <img
                  class="insideimgsuit rotateimgsuit"
                  src="/img sources/diamonds.png"
                />
              </div>
            </div>
          </div>
          <div class="column three">
            <div class="row1"></div>
            <div class="row1 middlerow1">
              <div class="suit">
                <img class="insideimgsuit" src="/img sources/diamonds.png" />
              </div>
            </div>
            <div class="row1 middlerow2">
              <div class="suit">
                <img
                  class="insideimgsuit rotateimgsuit"
                  src="/img sources/diamonds.png"
                />
              </div>
            </div>
            <div class="row1"></div>
          </div>
          <div class="column four">
            <div class="row1">
              <div class="suit">
                <img class="insideimgsuit" src="/img sources/diamonds.png" />
              </div>
            </div>
            <div class="row1">
              <div class="suit">
                <img class="insideimgsuit" src="/img sources/diamonds.png" />
              </div>
            </div>
            <div class="row1">
              <div class="suit">
                <img
                  class="insideimgsuit rotateimgsuit"
                  src="/img sources/diamonds.png"
                />
              </div>
            </div>
          </div>
          <div class="column five">
            <div class="row1">
              <div class="topleft corner">8</div>
              <div class="suit">
                <img class="cornerimgsuit" src="/img sources/diamonds.png" />
              </div>
            </div>
            <div class="row2"></div>
          </div>`]}, {value: 9, text: '9', body:[`<div class="column one">
            <div class="row1">
              <div class="topleft corner">9</div>
              <div class="suit">
                <img class="cornerimgsuit" src="/img sources/spades.png" />
              </div>
            </div>
            <div class="row2"></div>
          </div>
          <div class="column two">
            <div class="row1 middlerow2">
              <div class="suit">
                <img class="insideimgsuit" src="/img sources/spades.png" />
              </div>
            </div>
            <div class="row1">
              <div class="suit">
                <img class="insideimgsuit" src="/img sources/spades.png" />
              </div>
            </div>
            <div class="row1">
              <div class="suit">
                <img
                  class="insideimgsuit rotateimgsuit"
                  src="/img sources/spades.png"
                />
              </div>
            </div>
            <div class="row1 middlerow1">
              <div class="suit">
                <img
                  class="insideimgsuit rotateimgsuit"
                  src="/img sources/spades.png"
                />
              </div>
            </div>
          </div>
          <div class="column three">
            <div class="row1"></div>
            <div class="row1">
              <div class="suit">
                <img class="insideimgsuit" src="/img sources/spades.png" />
              </div>
            </div>
            <div class="row1"></div>
          </div>
          <div class="column four">
            <div class="row1 middlerow2">
              <div class="suit">
                <img class="insideimgsuit" src="/img sources/spades.png" />
              </div>
            </div>
            <div class="row1">
              <div class="suit">
                <img class="insideimgsuit" src="/img sources/spades.png" />
              </div>
            </div>
            <div class="row1">
              <div class="suit">
                <img
                  class="insideimgsuit rotateimgsuit"
                  src="/img sources/spades.png"
                />
              </div>
            </div>
            <div class="row1 middlerow1">
              <div class="suit">
                <img
                  class="insideimgsuit rotateimgsuit"
                  src="/img sources/spades.png"
                />
              </div>
            </div>
          </div>
          <div class="column five">
            <div class="row1">
              <div class="topleft corner">9</div>
              <div class="suit">
                <img class="cornerimgsuit" src="/img sources/spades.png" />
              </div>
            </div>
            <div class="row2"></div>
          </div>`, `<div class="column one">
            <div class="row1">
              <div class="topleft corner">9</div>
              <div class="suit">
                <img class="cornerimgsuit" src="/img sources/hearts.png" />
              </div>
            </div>
            <div class="row2"></div>
          </div>
          <div class="column two">
            <div class="row1 middlerow2">
              <div class="suit">
                <img class="insideimgsuit" src="/img sources/hearts.png" />
              </div>
            </div>
            <div class="row1">
              <div class="suit">
                <img class="insideimgsuit" src="/img sources/hearts.png" />
              </div>
            </div>
            <div class="row1">
              <div class="suit">
                <img
                  class="insideimgsuit rotateimgsuit"
                  src="/img sources/hearts.png"
                />
              </div>
            </div>
            <div class="row1 middlerow1">
              <div class="suit">
                <img
                  class="insideimgsuit rotateimgsuit"
                  src="/img sources/hearts.png"
                />
              </div>
            </div>
          </div>
          <div class="column three">
            <div class="row1"></div>
            <div class="row1">
              <div class="suit">
                <img class="insideimgsuit" src="/img sources/hearts.png" />
              </div>
            </div>
            <div class="row1"></div>
          </div>
          <div class="column four">
            <div class="row1 middlerow2">
              <div class="suit">
                <img class="insideimgsuit" src="/img sources/hearts.png" />
              </div>
            </div>
            <div class="row1">
              <div class="suit">
                <img class="insideimgsuit" src="/img sources/hearts.png" />
              </div>
            </div>
            <div class="row1">
              <div class="suit">
                <img
                  class="insideimgsuit rotateimgsuit"
                  src="/img sources/hearts.png"
                />
              </div>
            </div>
            <div class="row1 middlerow1">
              <div class="suit">
                <img
                  class="insideimgsuit rotateimgsuit"
                  src="/img sources/hearts.png"
                />
              </div>
            </div>
          </div>
          <div class="column five">
            <div class="row1">
              <div class="topleft corner">9</div>
              <div class="suit">
                <img class="cornerimgsuit" src="/img sources/hearts.png" />
              </div>
            </div>
            <div class="row2"></div>
          </div>`, `<div class="column one">
            <div class="row1">
              <div class="topleft corner">9</div>
              <div class="suit">
                <img class="cornerimgsuit" src="/img sources/clubs.png" />
              </div>
            </div>
            <div class="row2"></div>
          </div>
          <div class="column two">
            <div class="row1 middlerow2">
              <div class="suit">
                <img class="insideimgsuit" src="/img sources/clubs.png" />
              </div>
            </div>
            <div class="row1">
              <div class="suit">
                <img class="insideimgsuit" src="/img sources/clubs.png" />
              </div>
            </div>
            <div class="row1">
              <div class="suit">
                <img
                  class="insideimgsuit rotateimgsuit"
                  src="/img sources/clubs.png"
                />
              </div>
            </div>
            <div class="row1 middlerow1">
              <div class="suit">
                <img
                  class="insideimgsuit rotateimgsuit"
                  src="/img sources/clubs.png"
                />
              </div>
            </div>
          </div>
          <div class="column three">
            <div class="row1"></div>
            <div class="row1">
              <div class="suit">
                <img class="insideimgsuit" src="/img sources/clubs.png" />
              </div>
            </div>
            <div class="row1"></div>
          </div>
          <div class="column four">
            <div class="row1 middlerow2">
              <div class="suit">
                <img class="insideimgsuit" src="/img sources/clubs.png" />
              </div>
            </div>
            <div class="row1">
              <div class="suit">
                <img class="insideimgsuit" src="/img sources/clubs.png" />
              </div>
            </div>
            <div class="row1">
              <div class="suit">
                <img
                  class="insideimgsuit rotateimgsuit"
                  src="/img sources/clubs.png"
                />
              </div>
            </div>
            <div class="row1 middlerow1">
              <div class="suit">
                <img
                  class="insideimgsuit rotateimgsuit"
                  src="/img sources/clubs.png"
                />
              </div>
            </div>
          </div>
          <div class="column five">
            <div class="row1">
              <div class="topleft corner">9</div>
              <div class="suit">
                <img class="cornerimgsuit" src="/img sources/clubs.png" />
              </div>
            </div>
            <div class="row2"></div>
          </div>`, `<div class="column one">
            <div class="row1">
              <div class="topleft corner">9</div>
              <div class="suit">
                <img class="cornerimgsuit" src="/img sources/diamonds.png" />
              </div>
            </div>
            <div class="row2"></div>
          </div>
          <div class="column two">
            <div class="row1 middlerow2">
              <div class="suit">
                <img class="insideimgsuit" src="/img sources/diamonds.png" />
              </div>
            </div>
            <div class="row1">
              <div class="suit">
                <img class="insideimgsuit" src="/img sources/diamonds.png" />
              </div>
            </div>
            <div class="row1">
              <div class="suit">
                <img
                  class="insideimgsuit rotateimgsuit"
                  src="/img sources/diamonds.png"
                />
              </div>
            </div>
            <div class="row1 middlerow1">
              <div class="suit">
                <img
                  class="insideimgsuit rotateimgsuit"
                  src="/img sources/diamonds.png"
                />
              </div>
            </div>
          </div>
          <div class="column three">
            <div class="row1"></div>
            <div class="row1">
              <div class="suit">
                <img class="insideimgsuit" src="/img sources/diamonds.png" />
              </div>
            </div>
            <div class="row1"></div>
          </div>
          <div class="column four">
            <div class="row1 middlerow2">
              <div class="suit">
                <img class="insideimgsuit" src="/img sources/diamonds.png" />
              </div>
            </div>
            <div class="row1">
              <div class="suit">
                <img class="insideimgsuit" src="/img sources/diamonds.png" />
              </div>
            </div>
            <div class="row1">
              <div class="suit">
                <img
                  class="insideimgsuit rotateimgsuit"
                  src="/img sources/diamonds.png"
                />
              </div>
            </div>
            <div class="row1 middlerow1">
              <div class="suit">
                <img
                  class="insideimgsuit rotateimgsuit"
                  src="/img sources/diamonds.png"
                />
              </div>
            </div>
          </div>
          <div class="column five">
            <div class="row1">
              <div class="topleft corner">9</div>
              <div class="suit">
                <img class="cornerimgsuit" src="/img sources/diamonds.png" />
              </div>
            </div>
            <div class="row2"></div>
          </div>`]}, {value: 10, text: '10', body:[`<div class="column one">
            <div class="row1">
              <div class="topleft corner">10</div>
              <div class="suit">
                <img class="cornerimgsuit" src="/img sources/spades.png" />
              </div>
            </div>
            <div class="row2"></div>
          </div>
          <div class="column two">
            <div class="row1 middlerow2">
              <div class="suit">
                <img class="insideimgsuit" src="/img sources/spades.png" />
              </div>
            </div>
            <div class="row1">
              <div class="suit">
                <img class="insideimgsuit" src="/img sources/spades.png" />
              </div>
            </div>
            <div class="row1">
              <div class="suit">
                <img
                  class="insideimgsuit rotateimgsuit"
                  src="/img sources/spades.png"
                />
              </div>
            </div>
            <div class="row1 middlerow1">
              <div class="suit">
                <img
                  class="insideimgsuit rotateimgsuit"
                  src="/img sources/spades.png"
                />
              </div>
            </div>
          </div>
          <div class="column three justify">
            <div class="row1">
              <div class="suit">
                <img class="insideimgsuit" src="/img sources/spades.png" />
              </div>
            </div>
            <div class="row1"></div>
            <div class="row1">
              <div class="suit">
                <img
                  class="insideimgsuit rotateimgsuit"
                  src="/img sources/spades.png"
                />
              </div>
            </div>
          </div>
          <div class="column four">
            <div class="row1 middlerow2">
              <div class="suit">
                <img class="insideimgsuit" src="/img sources/spades.png" />
              </div>
            </div>
            <div class="row1">
              <div class="suit">
                <img class="insideimgsuit" src="/img sources/spades.png" />
              </div>
            </div>
            <div class="row1">
              <div class="suit">
                <img
                  class="insideimgsuit rotateimgsuit"
                  src="/img sources/spades.png"
                />
              </div>
            </div>
            <div class="row1 middlerow1">
              <div class="suit">
                <img
                  class="insideimgsuit rotateimgsuit"
                  src="/img sources/spades.png"
                />
              </div>
            </div>
          </div>
          <div class="column five">
            <div class="row1">
              <div class="topleft corner">10</div>
              <div class="suit">
                <img class="cornerimgsuit" src="/img sources/spades.png" />
              </div>
            </div>
            <div class="row2"></div>
          </div>`, `<div class="column one">
            <div class="row1">
              <div class="topleft corner">10</div>
              <div class="suit">
                <img class="cornerimgsuit" src="/img sources/hearts.png" />
              </div>
            </div>
            <div class="row2"></div>
          </div>
          <div class="column two">
            <div class="row1 middlerow2">
              <div class="suit">
                <img class="insideimgsuit" src="/img sources/hearts.png" />
              </div>
            </div>
            <div class="row1">
              <div class="suit">
                <img class="insideimgsuit" src="/img sources/hearts.png" />
              </div>
            </div>
            <div class="row1">
              <div class="suit">
                <img
                  class="insideimgsuit rotateimgsuit"
                  src="/img sources/hearts.png"
                />
              </div>
            </div>
            <div class="row1 middlerow1">
              <div class="suit">
                <img
                  class="insideimgsuit rotateimgsuit"
                  src="/img sources/hearts.png"
                />
              </div>
            </div>
          </div>
          <div class="column three justify">
            <div class="row1">
              <div class="suit">
                <img class="insideimgsuit" src="/img sources/hearts.png" />
              </div>
            </div>
            <div class="row1"></div>
            <div class="row1">
              <div class="suit">
                <img
                  class="insideimgsuit rotateimgsuit"
                  src="/img sources/hearts.png"
                />
              </div>
            </div>
          </div>
          <div class="column four">
            <div class="row1 middlerow2">
              <div class="suit">
                <img class="insideimgsuit" src="/img sources/hearts.png" />
              </div>
            </div>
            <div class="row1">
              <div class="suit">
                <img class="insideimgsuit" src="/img sources/hearts.png" />
              </div>
            </div>
            <div class="row1">
              <div class="suit">
                <img
                  class="insideimgsuit rotateimgsuit"
                  src="/img sources/hearts.png"
                />
              </div>
            </div>
            <div class="row1 middlerow1">
              <div class="suit">
                <img
                  class="insideimgsuit rotateimgsuit"
                  src="/img sources/hearts.png"
                />
              </div>
            </div>
          </div>
          <div class="column five">
            <div class="row1">
              <div class="topleft corner">10</div>
              <div class="suit">
                <img class="cornerimgsuit" src="/img sources/hearts.png" />
              </div>
            </div>
            <div class="row2"></div>
          </div>`, `<div class="column one">
            <div class="row1">
              <div class="topleft corner">10</div>
              <div class="suit">
                <img class="cornerimgsuit" src="/img sources/clubs.png" />
              </div>
            </div>
            <div class="row2"></div>
          </div>
          <div class="column two">
            <div class="row1 middlerow2">
              <div class="suit">
                <img class="insideimgsuit" src="/img sources/clubs.png" />
              </div>
            </div>
            <div class="row1">
              <div class="suit">
                <img class="insideimgsuit" src="/img sources/clubs.png" />
              </div>
            </div>
            <div class="row1">
              <div class="suit">
                <img
                  class="insideimgsuit rotateimgsuit"
                  src="/img sources/clubs.png"
                />
              </div>
            </div>
            <div class="row1 middlerow1">
              <div class="suit">
                <img
                  class="insideimgsuit rotateimgsuit"
                  src="/img sources/clubs.png"
                />
              </div>
            </div>
          </div>
          <div class="column three justify">
            <div class="row1">
              <div class="suit">
                <img class="insideimgsuit" src="/img sources/clubs.png" />
              </div>
            </div>
            <div class="row1"></div>
            <div class="row1">
              <div class="suit">
                <img
                  class="insideimgsuit rotateimgsuit"
                  src="/img sources/clubs.png"
                />
              </div>
            </div>
          </div>
          <div class="column four">
            <div class="row1 middlerow2">
              <div class="suit">
                <img class="insideimgsuit" src="/img sources/clubs.png" />
              </div>
            </div>
            <div class="row1">
              <div class="suit">
                <img class="insideimgsuit" src="/img sources/clubs.png" />
              </div>
            </div>
            <div class="row1">
              <div class="suit">
                <img
                  class="insideimgsuit rotateimgsuit"
                  src="/img sources/clubs.png"
                />
              </div>
            </div>
            <div class="row1 middlerow1">
              <div class="suit">
                <img
                  class="insideimgsuit rotateimgsuit"
                  src="/img sources/clubs.png"
                />
              </div>
            </div>
          </div>
          <div class="column five">
            <div class="row1">
              <div class="topleft corner">10</div>
              <div class="suit">
                <img class="cornerimgsuit" src="/img sources/clubs.png" />
              </div>
            </div>
            <div class="row2"></div>
          </div>`, `<div class="column one">
            <div class="row1">
              <div class="topleft corner">10</div>
              <div class="suit">
                <img class="cornerimgsuit" src="/img sources/diamonds.png" />
              </div>
            </div>
            <div class="row2"></div>
          </div>
          <div class="column two">
            <div class="row1 middlerow2">
              <div class="suit">
                <img class="insideimgsuit" src="/img sources/diamonds.png" />
              </div>
            </div>
            <div class="row1">
              <div class="suit">
                <img class="insideimgsuit" src="/img sources/diamonds.png" />
              </div>
            </div>
            <div class="row1">
              <div class="suit">
                <img
                  class="insideimgsuit rotateimgsuit"
                  src="/img sources/diamonds.png"
                />
              </div>
            </div>
            <div class="row1 middlerow1">
              <div class="suit">
                <img
                  class="insideimgsuit rotateimgsuit"
                  src="/img sources/diamonds.png"
                />
              </div>
            </div>
          </div>
          <div class="column three justify">
            <div class="row1">
              <div class="suit">
                <img class="insideimgsuit" src="/img sources/diamonds.png" />
              </div>
            </div>
            <div class="row1"></div>
            <div class="row1">
              <div class="suit">
                <img
                  class="insideimgsuit rotateimgsuit"
                  src="/img sources/diamonds.png"
                />
              </div>
            </div>
          </div>
          <div class="column four">
            <div class="row1 middlerow2">
              <div class="suit">
                <img class="insideimgsuit" src="/img sources/diamonds.png" />
              </div>
            </div>
            <div class="row1">
              <div class="suit">
                <img class="insideimgsuit" src="/img sources/diamonds.png" />
              </div>
            </div>
            <div class="row1">
              <div class="suit">
                <img
                  class="insideimgsuit rotateimgsuit"
                  src="/img sources/diamonds.png"
                />
              </div>
            </div>
            <div class="row1 middlerow1">
              <div class="suit">
                <img
                  class="insideimgsuit rotateimgsuit"
                  src="/img sources/diamonds.png"
                />
              </div>
            </div>
          </div>
          <div class="column five">
            <div class="row1">
              <div class="topleft corner">10</div>
              <div class="suit">
                <img class="cornerimgsuit" src="/img sources/diamonds.png" />
              </div>
            </div>
            <div class="row2"></div>
          </div>`]}, {value: 11, text: 'J', body:[`<div class="column one">
            <div class="row1">
              <div class="topleft corner">J</div>
              <div class="suit">
                <img class="cornerimgsuit" src="/img sources/spades.png" />
              </div>
            </div>
            <div class="row2 fig black">
              <div class="semicolumn fig black"></div>
            </div>
          </div>
          <div class="column two fig">
            <div class="row1 fig top black"></div>
            <div class="row2 fig">
              <div class="figurespace">
                <div class="figure">
                  <img class="figureimg" src="/img sources/spades.png" />
                </div>
                <img class="mainfig" src="/img sources/jacket-tyrion.png" />
              </div>
              <div class="figurespace rotateimgsuit">
                <div class="figure">
                  <img class="figureimg" src="/img sources/spades.png" />
                </div>
                <img class="mainfig" src="/img sources/jacket-tyrion.png" />
              </div>
            </div>
            <div class="row1 fig bottom black"></div>
          </div>
          <div class="column five">
            <div class="row1">
              <div class="topleft corner">J</div>
              <div class="suit">
                <img class="cornerimgsuit" src="/img sources/spades.png" />
              </div>
            </div>
            <div class="row2 fig">
              <div class="semicolumn fig black"></div>
            </div>
          </div>`, `<div class="column one">
            <div class="row1">
              <div class="topleft corner">J</div>
              <div class="suit">
                <img class="cornerimgsuit" src="/img sources/hearts.png" />
              </div>
            </div>
            <div class="row2 fig red">
              <div class="semicolumn fig red"></div>
            </div>
          </div>
          <div class="column two fig">
            <div class="row1 fig top red"></div>
            <div class="row2 fig">
              <div class="figurespace">
                <div class="figure">
                  <img class="figureimg" src="/img sources/hearts.png" />
                </div>
                <img class="mainfig" src="/img sources/jacket-tyrion.png" />
              </div>
              <div class="figurespace rotateimgsuit">
                <div class="figure">
                  <img class="figureimg" src="/img sources/hearts.png" />
                </div>
                <img class="mainfig" src="/img sources/jacket-tyrion.png" />
              </div>
            </div>
            <div class="row1 fig bottom red"></div>
          </div>
          <div class="column five">
            <div class="row1">
              <div class="topleft corner">J</div>
              <div class="suit">
                <img class="cornerimgsuit" src="/img sources/hearts.png" />
              </div>
            </div>
            <div class="row2 fig">
              <div class="semicolumn fig red"></div>
            </div>
          </div>`, `<div class="column one">
            <div class="row1">
              <div class="topleft corner">J</div>
              <div class="suit">
                <img class="cornerimgsuit" src="/img sources/clubs.png" />
              </div>
            </div>
            <div class="row2 fig black">
              <div class="semicolumn fig black"></div>
            </div>
          </div>
          <div class="column two fig">
            <div class="row1 fig top black"></div>
            <div class="row2 fig">
              <div class="figurespace">
                <div class="figure">
                  <img class="figureimg" src="/img sources/clubs.png" />
                </div>
                <img class="mainfig" src="/img sources/jacket-tyrion.png" />
              </div>
              <div class="figurespace rotateimgsuit">
                <div class="figure">
                  <img class="figureimg" src="/img sources/clubs.png" />
                </div>
                <img class="mainfig" src="/img sources/jacket-tyrion.png" />
              </div>
            </div>
            <div class="row1 fig bottom black"></div>
          </div>
          <div class="column five">
            <div class="row1">
              <div class="topleft corner">J</div>
              <div class="suit">
                <img class="cornerimgsuit" src="/img sources/clubs.png" />
              </div>
            </div>
            <div class="row2 fig">
              <div class="semicolumn fig black"></div>
            </div>
          </div>`, `<div class="column one">
            <div class="row1">
              <div class="topleft corner">J</div>
              <div class="suit">
                <img class="cornerimgsuit" src="/img sources/diamonds.png" />
              </div>
            </div>
            <div class="row2 fig red">
              <div class="semicolumn fig red"></div>
            </div>
          </div>
          <div class="column two fig">
            <div class="row1 fig top red"></div>
            <div class="row2 fig">
              <div class="figurespace">
                <div class="figure">
                  <img class="figureimg" src="/img sources/diamonds.png" />
                </div>
                <img class="mainfig" src="/img sources/jacket-tyrion.png" />
              </div>
              <div class="figurespace rotateimgsuit">
                <div class="figure">
                  <img class="figureimg" src="/img sources/diamonds.png" />
                </div>
                <img class="mainfig" src="/img sources/jacket-tyrion.png" />
              </div>
            </div>
            <div class="row1 fig bottom red"></div>
          </div>
          <div class="column five">
            <div class="row1">
              <div class="topleft corner">J</div>
              <div class="suit">
                <img class="cornerimgsuit" src="/img sources/diamonds.png" />
              </div>
            </div>
            <div class="row2 fig">
              <div class="semicolumn fig red"></div>
            </div>
          </div>`]}, {value: 12, text: 'Q', body:[`<div class="column one">
            <div class="row1">
              <div class="topleft corner">Q</div>
              <div class="suit">
                <img class="cornerimgsuit" src="/img sources/spades.png" />
              </div>
            </div>
            <div class="row2 fig black">
              <div class="semicolumn fig black"></div>
            </div>
          </div>
          <div class="column two fig">
            <div class="row1 fig top black"></div>
            <div class="row2 fig">
              <div class="figurespace">
                <div class="figure">
                  <img class="figureimg" src="/img sources/spades.png" />
                </div>
                <img
                  class="mainfig khaleesi"
                  src="/img sources/queen-khaleesi.png"
                />
              </div>
              <div class="figurespace rotateimgsuit">
                <div class="figure">
                  <img class="figureimg" src="/img sources/spades.png" />
                </div>
                <img
                  class="mainfig khaleesi"
                  src="/img sources/queen-khaleesi.png"
                />
              </div>
            </div>
            <div class="row1 fig bottom black"></div>
          </div>
          <div class="column five">
            <div class="row1">
              <div class="topleft corner">Q</div>
              <div class="suit">
                <img class="cornerimgsuit" src="/img sources/spades.png" />
              </div>
            </div>
            <div class="row2 fig">
              <div class="semicolumn fig black"></div>
            </div>
          </div>`, `<div class="column one">
            <div class="row1">
              <div class="topleft corner">Q</div>
              <div class="suit">
                <img class="cornerimgsuit" src="/img sources/hearts.png" />
              </div>
            </div>
            <div class="row2 fig red">
              <div class="semicolumn fig red"></div>
            </div>
          </div>
          <div class="column two fig">
            <div class="row1 fig top red"></div>
            <div class="row2 fig">
              <div class="figurespace">
                <div class="figure">
                  <img class="figureimg" src="/img sources/hearts.png" />
                </div>
                <img
                  class="mainfig khaleesi"
                  src="/img sources/queen-khaleesi.png"
                />
              </div>
              <div class="figurespace rotateimgsuit">
                <div class="figure">
                  <img class="figureimg" src="/img sources/hearts.png" />
                </div>
                <img
                  class="mainfig khaleesi"
                  src="/img sources/queen-khaleesi.png"
                />
              </div>
            </div>
            <div class="row1 fig bottom red"></div>
          </div>
          <div class="column five">
            <div class="row1">
              <div class="topleft corner">Q</div>
              <div class="suit">
                <img class="cornerimgsuit" src="/img sources/hearts.png" />
              </div>
            </div>
            <div class="row2 fig">
              <div class="semicolumn fig red"></div>
            </div>
          </div>`, `<div class="column one">
            <div class="row1">
              <div class="topleft corner">Q</div>
              <div class="suit">
                <img class="cornerimgsuit" src="/img sources/clubs.png" />
              </div>
            </div>
            <div class="row2 fig black">
              <div class="semicolumn fig black"></div>
            </div>
          </div>
          <div class="column two fig">
            <div class="row1 fig top black"></div>
            <div class="row2 fig">
              <div class="figurespace">
                <div class="figure">
                  <img class="figureimg" src="/img sources/clubs.png" />
                </div>
                <img
                  class="mainfig khaleesi"
                  src="/img sources/queen-khaleesi.png"
                />
              </div>
              <div class="figurespace rotateimgsuit">
                <div class="figure">
                  <img class="figureimg" src="/img sources/clubs.png" />
                </div>
                <img
                  class="mainfig khaleesi"
                  src="/img sources/queen-khaleesi.png"
                />
              </div>
            </div>
            <div class="row1 fig bottom black"></div>
          </div>
          <div class="column five">
            <div class="row1">
              <div class="topleft corner">Q</div>
              <div class="suit">
                <img class="cornerimgsuit" src="/img sources/clubs.png" />
              </div>
            </div>
            <div class="row2 fig">
              <div class="semicolumn fig black"></div>
            </div>
          </div>`, `<div class="column one">
            <div class="row1">
              <div class="topleft corner">Q</div>
              <div class="suit">
                <img class="cornerimgsuit" src="/img sources/diamonds.png" />
              </div>
            </div>
            <div class="row2 fig red">
              <div class="semicolumn fig red"></div>
            </div>
          </div>
          <div class="column two fig">
            <div class="row1 fig top red"></div>
            <div class="row2 fig">
              <div class="figurespace">
                <div class="figure">
                  <img class="figureimg" src="/img sources/diamonds.png" />
                </div>
                <img
                  class="mainfig khaleesi"
                  src="/img sources/queen-khaleesi.png"
                />
              </div>
              <div class="figurespace rotateimgsuit">
                <div class="figure">
                  <img class="figureimg" src="/img sources/diamonds.png" />
                </div>
                <img
                  class="mainfig khaleesi"
                  src="/img sources/queen-khaleesi.png"
                />
              </div>
            </div>
            <div class="row1 fig bottom red"></div>
          </div>
          <div class="column five">
            <div class="row1">
              <div class="topleft corner">Q</div>
              <div class="suit">
                <img class="cornerimgsuit" src="/img sources/diamonds.png" />
              </div>
            </div>
            <div class="row2 fig">
              <div class="semicolumn fig red"></div>
            </div>
          </div>`]}, {value: 13, text: 'K', body:[`<div class="column one">
            <div class="row1">
              <div class="topleft corner">K</div>
              <div class="suit">
                <img class="cornerimgsuit" src="/img sources/spades.png" />
              </div>
            </div>
            <div class="row2 fig black">
              <div class="semicolumn fig black"></div>
            </div>
          </div>
          <div class="column two fig">
            <div class="row1 fig top black"></div>
            <div class="row2 fig">
              <div class="figurespace">
                <div class="figure">
                  <img class="figureimg" src="/img sources/spades.png" />
                </div>
                <img class="mainfig jon" src="/img sources/king-jonsnow.png" />
              </div>
              <div class="figurespace rotateimgsuit">
                <div class="figure">
                  <img class="figureimg" src="/img sources/spades.png" />
                </div>
                <img class="mainfig jon" src="/img sources/king-jonsnow.png" />
              </div>
            </div>
            <div class="row1 fig bottom black"></div>
          </div>
          <div class="column five">
            <div class="row1">
              <div class="topleft corner">K</div>
              <div class="suit">
                <img class="cornerimgsuit" src="/img sources/spades.png" />
              </div>
            </div>
            <div class="row2 fig">
              <div class="semicolumn fig black"></div>
            </div>
          </div>`, `<div class="column one">
            <div class="row1">
              <div class="topleft corner">K</div>
              <div class="suit">
                <img class="cornerimgsuit" src="/img sources/hearts.png" />
              </div>
            </div>
            <div class="row2 fig red">
              <div class="semicolumn fig red"></div>
            </div>
          </div>
          <div class="column two fig">
            <div class="row1 fig top red"></div>
            <div class="row2 fig">
              <div class="figurespace">
                <div class="figure">
                  <img class="figureimg" src="/img sources/hearts.png" />
                </div>
                <img class="mainfig jon" src="/img sources/king-jonsnow.png" />
              </div>
              <div class="figurespace rotateimgsuit">
                <div class="figure">
                  <img class="figureimg" src="/img sources/hearts.png" />
                </div>
                <img class="mainfig jon" src="/img sources/king-jonsnow.png" />
              </div>
            </div>
            <div class="row1 fig bottom red"></div>
          </div>
          <div class="column five">
            <div class="row1">
              <div class="topleft corner">K</div>
              <div class="suit">
                <img class="cornerimgsuit" src="/img sources/hearts.png" />
              </div>
            </div>
            <div class="row2 fig">
              <div class="semicolumn fig red"></div>
            </div>
          </div>`, `<div class="column one">
            <div class="row1">
              <div class="topleft corner">K</div>
              <div class="suit">
                <img class="cornerimgsuit" src="/img sources/clubs.png" />
              </div>
            </div>
            <div class="row2 fig black">
              <div class="semicolumn fig black"></div>
            </div>
          </div>
          <div class="column two fig">
            <div class="row1 fig top black"></div>
            <div class="row2 fig">
              <div class="figurespace">
                <div class="figure">
                  <img class="figureimg" src="/img sources/clubs.png" />
                </div>
                <img class="mainfig jon" src="/img sources/king-jonsnow.png" />
              </div>
              <div class="figurespace rotateimgsuit">
                <div class="figure">
                  <img class="figureimg" src="/img sources/clubs.png" />
                </div>
                <img class="mainfig jon" src="/img sources/king-jonsnow.png" />
              </div>
            </div>
            <div class="row1 fig bottom black"></div>
          </div>
          <div class="column five">
            <div class="row1">
              <div class="topleft corner">K</div>
              <div class="suit">
                <img class="cornerimgsuit" src="/img sources/clubs.png" />
              </div>
            </div>
            <div class="row2 fig">
              <div class="semicolumn fig black"></div>
            </div>
          </div>`, `<div class="column one">
            <div class="row1">
              <div class="topleft corner">K</div>
              <div class="suit">
                <img class="cornerimgsuit" src="/img sources/diamonds.png" />
              </div>
            </div>
            <div class="row2 fig red">
              <div class="semicolumn fig red"></div>
            </div>
          </div>
          <div class="column two fig">
            <div class="row1 fig top red"></div>
            <div class="row2 fig">
              <div class="figurespace">
                <div class="figure">
                  <img class="figureimg" src="/img sources/diamonds.png" />
                </div>
                <img class="mainfig jon" src="/img sources/king-jonsnow.png" />
              </div>
              <div class="figurespace rotateimgsuit">
                <div class="figure">
                  <img class="figureimg" src="/img sources/diamonds.png" />
                </div>
                <img class="mainfig jon" src="/img sources/king-jonsnow.png" />
              </div>
            </div>
            <div class="row1 fig bottom red"></div>
          </div>
          <div class="column five">
            <div class="row1">
              <div class="topleft corner">K</div>
              <div class="suit">
                <img class="cornerimgsuit" src="/img sources/diamonds.png" />
              </div>
            </div>
            <div class="row2 fig">
              <div class="semicolumn fig red"></div>
            </div>
          </div>`]}]







// DEAL CARDS BUTTON
document.querySelector(".deal").addEventListener("click", () => {
  dealCards();
  document.getElementById("card-stack").style.visibility = "hidden"; // animations: cards leaving 1 by 1 
  document.querySelector(".deal").disabled = true;
  document.querySelector(".play").disabled = false;
  document.querySelector(".play").style.borderTop = "1px solid rgb(170, 171, 145)";
  console.table(deck1); 
   console.table( deck2);
});




// PLAY BUTTON
document.querySelector(".play").addEventListener("click", () => {
  //while (deck1.length !== 0 && deck2.length !== 0) {
  play();

  if (deck1.length === 0) {
    alert("Player 2 wins.");
    document.querySelector(".play").disabled = true;
  } else if (deck2.length === 0) {
    alert("Player 1 wins.");
    document.querySelector(".play").disabled = true;
  }
//}
});





