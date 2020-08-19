import Player from './players';
import Deck from './deck';

class Board {
    constructor() {
        this.cardsInMiddle = [];
        this.players = [];
    }
    start(playerOne, playerTwo, playerThree, playerFour) {
        this.players.push(new Player(playerOne));
        this.players.push(new Player(playerTwo));
        this.players.push(new Player(playerThree));
        this.players.push(new Player(playerFour));
        let deck1 = new Deck();
        let deck2 = new Deck();
        deck1.createDeck();
        deck2.createDeck();
        deck1.shuffleDeck();
        deck2.shuffleDeck();
        deck1.cards = deck1.cards.concat(deck2.cards);
        this.players[0].playerCards = deck1.cards.slice(0, 26);
        this.players[1].playerCards = deck1.cards.slice(26, 52);
        this.players[2].playerCards = deck1.cards.slice(52, 78);
        this.players[3].playerCards = deck1.cards.slice(78, 104);
    }
}

export const DeckRender = () => {
    const testObj = {
        key1: "hi",
        key2: {
            key3: "Hello",
        },
    };
    let deck1 = new Deck();
    let deck2 = new Deck();
    deck1.createDeck();
    deck2.createDeck();
    deck1.shuffleDeck();
    deck2.shuffleDeck();

    let gameBoard = new Board();
    gameBoard.start('Mario', 'Luigi');
    console.log(gameBoard.players);

    const greeting = testObj?.key2?.key3 || testObj.key1;
    document.body.classList.add("center");

    const card = document.createElement("hand");


    for (let i = 0; i < gameBoard.players[0].playerCards.length; i++) {
    var img = document.createElement('img');
    
    img.src =  gameBoard.players[0].playerCards[i].ref;
    img.classList.add("HandCard");
    
    document.getElementById("playerHand").appendChild(img);
    //document.body.appendChild(img); 
    }

    var back = document.createElement('img');

    back.src = './dist/images/png/card_back.jpg';
    back.classList.add("HandCard");

    document.getElementById("aiHand1").appendChild(back);
    document.getElementById("aiHand2").appendChild(back);
    document.getElementById("aiHand3").appendChild(back);

    const hello = document.createElement("div");
    hello.classList.add("card", "center");
    hello.innerHTML = `<h2>${greeting} World!</h2>`;
    document.body.append(hello);
    const imgCard = document.createElement("div");
    imgCard.classList.add("card", "center", "image-card");
    document.body.appendChild(imgCard);

    

    
};
