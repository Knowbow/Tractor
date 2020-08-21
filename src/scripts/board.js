import Player from './players';
import Deck from './deck';
require("./dist/images/png/2c.png");
require("./dist/images/png/2d.png");
require("./dist/images/png/2h.png");
require("./dist/images/png/2s.png");
require("../../dist/images/png/card_back1.jpg");

class Board {
    constructor() {
        this.cardsInMiddle = [];
        this.players = [];
        this.inPlay = [];
        this.firstSuit = 1;
        this.token = 0;
        this.over = false;
        this.points = 0;
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

    buttonPlay.addEventListener("click", play0);
    
    // appending text to button 
    button.appendChild(text);
    buttonStart.appendChild(textStart);
    buttonPlay.appendChild(textPlay)
    // appending button to div 
    myDiv.appendChild(button);
    myDiv.appendChild(buttonStart);
    myDiv.appendChild(buttonPlay);
    window.setInterval(function () {
        /// call your function here
    if (gameBoard.token == 0){
        var para = document.createElement("p");
        var node = document.createTextNode("Your turn!");
        para.appendChild(node);

        if(document.getElementById("turn").firstChild){
            document
              .getElementById("turn")
              .removeChild(document.getElementById("turn").firstChild);
        }
        document.getElementById("turn").appendChild(para); 
    }
    while(!gameBoard.over && gameBoard.token != 0){
        
        if(gameBoard.token == 1 && gameBoard.inPlay.length<4){
            aiPlay(1);
        }
        if (gameBoard.token == 2 && gameBoard.inPlay.length < 4) {
            aiPlay(2);
        }
        if (gameBoard.token == 3 && gameBoard.inPlay.length < 4) {
            aiPlay(3);
            
        }
        debugger
        if(gameBoard.inPlay.length >= 4){
            
            winner();
            clear();
            gameBoard.inPlay = [];
        }

    
    }
    }, 3000);
    function clear(){
        setTimeout(function () {
            
            document.getElementById("aiPlay1").removeChild(document.getElementById("aiPlay1").firstChild);
            
            document.getElementById("aiPlay2").removeChild(document.getElementById("aiPlay2").firstChild);
            
            document.getElementById("aiPlay3").removeChild(document.getElementById("aiPlay3").firstChild);
            
            document.getElementById("active1").removeChild(document.getElementById("active1").firstChild);
        }, 3000); 
    }

    function winner(){
        debugger
        gameBoard.token = 0;
        gameBoard.players[0].active[0].shift();
        var max = gameBoard.players[0].active[0][0].value;
        
        if (gameBoard.players[1].active[0].value > max){
            max = gameBoard.players[1].active[0].value;
            gameBoard.token = 1;
        }
        if (gameBoard.players[2].active[0].value > max) {
            max = gameBoard.players[2].active[0].value;
            gameBoard.token = 2;
        }
        if (gameBoard.players[3].active[0].value > max) {
            max = gameBoard.players[3].active[0].value;
            gameBoard.token = 3;
        }
        gameBoard.firstSuit=1;
        var para = document.createElement("p");
        var node = document.createTextNode(`Player ${gameBoard.token} won!`);
        para.appendChild(node);

        if (document.getElementById("winner").firstChild) {
          document
            .getElementById("winner")
            .removeChild(document.getElementById("winner").firstChild);
        }
        document.getElementById("winner").appendChild(para); 

    }


    function gameOver(){
        if (gameBoard.players[0].playerCards.length == 0 && gameBoard.players[1].playerCards.length == 0 && gameBoard.players[2].playerCards.length == 0 && gameBoard.players[3].playerCards.length == 0){
            gameBoard.over = true;
        }
    }

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
        gameBoard.token = (gameBoard.token + 1) % 4;
        
        if (gameBoard.firstSuit == 1){
            
            let a = gameBoard.players[num].playerCards.shift();
            
            gameBoard.players[num].active.push(a)
            gameBoard.inPlay.push(a);
            gameBoard.firstSuit = a.suit;
            
            var aiImg = document.createElement('img');
            aiImg.src = a.ref;
            aiImg.classList.add("HandCard");
            
            document.getElementById(`aiPlay${num}`).appendChild(aiImg);
            
            
            return;
            
        }
        if (gameBoard.firstSuit == 'clubs'){
            let aa = clubs.pop();
            gameBoard.players[num].active.push(aa)
            gameBoard.inPlay.push(aa);
            gameBoard.players[num].playerCards = diamonds.concat(spades).concat(hearts).concat(clubs);
            var aiImg = document.createElement('img');
            aiImg.src = aa.ref;
            aiImg.classList.add("HandCard");
            

            document.getElementById(`aiPlay${num}`).appendChild(aiImg);
            
        }
        if (gameBoard.firstSuit == 'diamonds') {
            let aaa = diamonds.pop();
            gameBoard.players[num].active.push(aaa)
            gameBoard.inPlay.push(aaa);
            gameBoard.players[num].playerCards = diamonds.concat(spades).concat(hearts).concat(clubs);
            var aiImg = document.createElement('img');
            aiImg.src = aaa.ref;
            aiImg.classList.add("HandCard");

            document.getElementById(`aiPlay${num}`).appendChild(aiImg);
          
        }
        if (gameBoard.firstSuit == 'hearts') {
            let aaaa = hearts.pop();
            gameBoard.players[num].active.push(aaaa)
            gameBoard.inPlay.push(aaaa);
            gameBoard.players[num].playerCards = diamonds.concat(spades).concat(hearts).concat(clubs);
            var aiImg = document.createElement('img');
            aiImg.src = aaaa.ref;
            aiImg.classList.add("HandCard");

            document.getElementById(`aiPlay${num}`).appendChild(aiImg);
           
        }
        if (gameBoard.firstSuit == 'spades') {
            let aaaaa = spades.pop();
            gameBoard.players[num].active.push(aaaaa)
            gameBoard.inPlay.push(aaaaa);
            gameBoard.players[num].playerCards = diamonds.concat(spades).concat(hearts).concat(clubs);
            var aiImg = document.createElement('img');
            aiImg.src = aaaaa.ref;
            aiImg.classList.add("HandCard");

            document.getElementById(`aiPlay${num}`).appendChild(aiImg);
           
        }
    }

    function play0(){
        if(gameBoard.token == 0){
        gameBoard.inPlay.push(gameBoard.players[0].active);
        gameBoard.token =1;
        
    }
        if(gameBoard.firstSuit==1){
            gameBoard.firstSuit = gameBoard.players[0].active[0][0].suit
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
