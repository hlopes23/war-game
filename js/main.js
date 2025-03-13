    const generateDeck = () => {
      const suits = ["hearts", "diamonds", "spades", "clubs"];

      const values = [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
        "13",
      ];

      let deck = [];

      for (let suit of suits) {
        for (let value of values) {
          const card = { suit, value };
          deck.push(card);
        }
      }
      return deck;
    };

    deck = generateDeck();

    const shuffleDeck = (deck) => {
      for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
      }
      return deck;
    };

    const dealCards = () => {
      shuffleDeck(deck);
      const half = Math.floor(deck.length / 2);
      const deck1 = deck.slice(0, half);
      const deck2 = deck.slice(half);

      return { deck1, deck2 };
    };

    let { deck1, deck2 } = dealCards();

    const play = (deck1, deck2) => {
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
        console.log(tempStack);
        card1 = deck1.shift();
        card2 = deck2.shift();

        card1.value > card2.value
          ? deck1.push(...tempStack, card1, card2) |
            console.log("Player 1 gets " + (tempStack.length + 4) + " Cards")
          : deck2.push(...tempStack, card1, card2) |
            console.log("Player 2 gets " + (tempStack.length + 4) + " Cards");
      }

      console.log(deck1, deck2);
    };

    document.querySelector(".deal").addEventListener("click", () => {
      const { deck1, deck2 } = dealCards();
      document.querySelector(".play").disabled = false;
      console.log(deck1, deck2);
    });

    document.querySelector(".play").addEventListener("click", () => {
      while (deck1.length !== 0 && deck2.length !== 0) {
        play(deck1, deck2);
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
