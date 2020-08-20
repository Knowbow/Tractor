import Player from './players';
import Deck from './deck';

class Board {
    constructor() {
        this.cardsInMiddle = [];
        this.players = [];
        this.inPlay = [];
        this.firstSuit = 1;
        this.token = 0;
        this.over = false;
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
    gameBoard.start('Tony', 'Karen', 'Alice', 'Michael');
    console.log(gameBoard.players);

    
    document.body.classList.add("center");
    var myDiv = document.getElementById("shuffleBtn");

    // creating button element  
    var button = document.createElement('BUTTON');
    var buttonStart = document.createElement('BUTTON');
    var buttonPlay = document.createElement('BUTTON');

    // creating text to be 
    //displayed on button 
    var text = document.createTextNode("Sort hand!");
    var textStart = document.createTextNode("Start round!");
    var textPlay = document.createTextNode("Play card");

    button.addEventListener("click", shuffle);
    buttonStart.addEventListener("click", start);
    buttonStart.addEventListener("click", start);
    buttonPlay.addEventListener("click", play0);
    
    // appending text to button 
    button.appendChild(text);
    buttonStart.appendChild(textStart);
    buttonPlay.appendChild(textPlay)
    // appending button to div 
    myDiv.appendChild(button);
    myDiv.appendChild(buttonStart);
    myDiv.appendChild(buttonPlay);
    
    
   
    function start(){
        // while(gameBoard.inPlay.length<4){

        // }
    }

    function shuffle(){
        while (document.getElementById("playerHand").firstChild) {
            document.getElementById("playerHand").removeChild(document.getElementById("playerHand").firstChild);
        }
        let diamonds = [];
        let spades = [];
        let hearts = [];
        let clubs = [];
        let newHand = [];
        
        for (let i = 0; i < gameBoard.players[0].playerCards.length; i++) {
            if (gameBoard.players[0].playerCards[i].suit == 'diamonds'){
                diamonds.push(gameBoard.players[0].playerCards[i]);
            }
            if (gameBoard.players[0].playerCards[i].suit == 'spades') {
                spades.push(gameBoard.players[0].playerCards[i]);
            }
            if (gameBoard.players[0].playerCards[i].suit == 'hearts') {
                hearts.push(gameBoard.players[0].playerCards[i]);
            }
            if (gameBoard.players[0].playerCards[i].suit == 'clubs') {
                clubs.push(gameBoard.players[0].playerCards[i]);
            }
        }
        diamonds.sort((a, b) => (a.value > b.value) ? 1 : -1)
        spades.sort((a, b) => (a.value > b.value) ? 1 : -1)
        hearts.sort((a, b) => (a.value > b.value) ? 1 : -1)
        clubs.sort((a, b) => (a.value > b.value) ? 1 : -1)

        newHand=diamonds.concat(spades).concat(hearts).concat(clubs);
        gameBoard.players[0].playerCards = newHand;
        // for (let i = 0; i < newHand.length; i++) {
        //     var img = document.createElement('img');
        //     img.src = newHand[i].ref;
        //     img.classList.add("HandCard");
        //     img.addEventListener("click", function () {
                
        //     move(newHand[i], i)});
        //     document.getElementById("playerHand").appendChild(img);
        // }
        render();
    }
    function render() {
        while (document.getElementById("playerHand").firstChild) {
            document.getElementById("playerHand").removeChild(document.getElementById("playerHand").firstChild);
        }
        for (let i = 0; i < gameBoard.players[0].playerCards.length; i++) {
            var img = document.createElement('img');
            img.src = gameBoard.players[0].playerCards[i].ref;
            img.classList.add("HandCard");
            img.addEventListener("click", function () {

                move(gameBoard.players[0].playerCards[i], i)
            });
            document.getElementById("playerHand").appendChild(img);
        }
    }
    function move(card, i){
        
        let list = document.getElementById("playerHand");
        var img = document.createElement('img');
        img.src = card.ref;
        img.classList.add("HandCard");
        
        
        let a = gameBoard.players[0].playerCards.splice(i,1);
        gameBoard.players[0].active.push(a);

        console.log(gameBoard.players[0].playerCards);
        img.addEventListener("click", function () {

            unmove(a, i)
        });
        document.getElementById("active1").appendChild(img);
        list.removeChild(list.childNodes[i]);
        render();
        
    }
    function unmove(card, i){
        
        let list = document.getElementById("active1");
        var img = document.createElement('img');
        img.src = card[0].ref;
        img.classList.add("HandCard");
        img.addEventListener("click", function () {

            move(card[0], i)
        });
        list.removeChild(list.firstChild);
        gameBoard.players[0].playerCards.push(card[0]);
        gameBoard.players[0].active.splice(0,1);
        //document.getElementById("playerHand").appendChild(img);
        render();
        shuffle();
    }

    function aiPlay(num){
        let hand = gameBoard.players[num].playerCards;
        let diamonds = [];
        let spades = [];
        let hearts = [];
        let clubs = [];
        

        for (let i = 0; i < gameBoard.players[num].playerCards.length; i++) {
            if (gameBoard.players[num].playerCards[i].suit == 'diamonds') {
                diamonds.push(gameBoard.players[num].playerCards[i]);
            }
            if (gameBoard.players[num].playerCards[i].suit == 'spades') {
                spades.push(gameBoard.players[num].playerCards[i]);
            }
            if (gameBoard.players[num].playerCards[i].suit == 'hearts') {
                hearts.push(gameBoard.players[num].playerCards[i]);
            }
            if (gameBoard.players[num].playerCards[i].suit == 'clubs') {
                clubs.push(gameBoard.players[num].playerCards[i]);
            }
        }
        diamonds.sort((a, b) => (a.value > b.value) ? 1 : -1)
        spades.sort((a, b) => (a.value > b.value) ? 1 : -1)
        hearts.sort((a, b) => (a.value > b.value) ? 1 : -1)
        clubs.sort((a, b) => (a.value > b.value) ? 1 : -1)
        if (gameBoard.firstSuit == 1){
            debugger
            let a = gameBoard.players[num].playerCards.shift();
            debugger
            gameBoard.players[num].active.push(a)
            gameBoard.inPlay.push(a);
            gameBoard.firstSuit = a.suit;
            debugger
            return;
            
        }
        if (gameBoard.firstSuit == 'clubs'){
            let a = clubs.pop();
            gameBoard.players[num].active.push(a)
            gameBoard.inPlay.push(a);
            gameBoard.players[num].playerCards = diamonds.concat(spades).concat(hearts).concat(clubs);
        }
        if (gameBoard.firstSuit == 'diamonds') {
            let a = diamonds.pop();
            gameBoard.players[num].active.push(a)
            gameBoard.inPlay.push(a);
            gameBoard.players[num].playerCards = diamonds.concat(spades).concat(hearts).concat(clubs);
        }
        if (gameBoard.firstSuit == 'hearts') {
            let a = hearts.pop();
            gameBoard.players[num].active.push(a)
            gameBoard.inPlay.push(a);
            gameBoard.players[num].playerCards = diamonds.concat(spades).concat(hearts).concat(clubs);
        }
        if (gameBoard.firstSuit == 'spades') {
            let a = spades.pop();
            gameBoard.players[num].active.push(a)
            gameBoard.inPlay.push(a);
            gameBoard.players[num].playerCards = diamonds.concat(spades).concat(hearts).concat(clubs);
        }
    }

    function play0(){
        if(gameBoard.token == 0){
        gameBoard.inPlay.push(gameBoard.players[0].active);
    }
    
    }

    
    
    

    function task(i){
        setTimeout(function () {
            var img = document.createElement('img');
            img.src = gameBoard.players[0].playerCards[i].ref;
            img.classList.add("HandCard");
            img.addEventListener("click", shuffle);
            document.getElementById("playerHand").appendChild(img);
        }, 10* i); 
    }
    for (let i = 0; i < gameBoard.players[0].playerCards.length; i++) {
        task(i);
    }

    var back1 = document.createElement('img');
    back1.src = './dist/images/png/card_back1.jpg';
    back1.classList.add("HandCard1", "aiFront");

    var back2 = document.createElement('img');
    back2.src = './dist/images/png/card_back1.jpg';
    back2.classList.add("SideCard");

    var back3 = document.createElement('img');
    back3.src = './dist/images/png/card_back1.jpg';
    back3.classList.add("SideCard");

    document.getElementById("aiHand1").appendChild(back1);
    document.getElementById("aiHand2").appendChild(back2);
    document.getElementById("aiHand3").appendChild(back3);

    
    
    // const hello = document.createElement("div");
    // hello.classList.add("card", "center");
    // hello.innerHTML = `<h2>Tractor World!</h2>`;
    // document.body.append(hello);
    // const imgCard = document.createElement("div");
    // imgCard.classList.add("card", "center", "image-card");
    // document.body.appendChild(imgCard);

    

    
};
