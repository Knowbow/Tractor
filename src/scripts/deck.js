import Card from './cards';

class Deck {
    constructor() {
        this.cards = [];
    }

    createDeck() {
        let suits = ['clubs', 'diamonds', 'hearts', 'spades'];
        let ranks = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king'];
        let values = [14, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
        let ref = [
          "./dist/images/PNG/AC.png",
          "./dist/images/PNG/2C.png",
          "./dist/images/PNG/3C.png",
          "./dist/images/PNG/4C.png",
          "./dist/images/PNG/5C.png",
          "./dist/images/PNG/6C.png",
          "./dist/images/PNG/7C.png",
          "./dist/images/PNG/8C.png",
          "./dist/images/PNG/9C.png",
          "./dist/images/PNG/10C.png",
          "./dist/images/PNG/JC.png",
          "./dist/images/PNG/QC.png",
          "./dist/images/PNG/KC.png",
          "./dist/images/PNG/AD.png",
          "./dist/images/PNG/2D.png",
          "./dist/images/PNG/3D.png",
          "./dist/images/PNG/4D.png",
          "./dist/images/PNG/5D.png",
          "./dist/images/PNG/6D.png",
          "./dist/images/PNG/7D.png",
          "./dist/images/PNG/8D.png",
          "./dist/images/PNG/9D.png",
          "./dist/images/PNG/10D.png",
          "./dist/images/PNG/JD.png",
          "./dist/images/PNG/QD.png",
          "./dist/images/PNG/KD.png",
          "./dist/images/PNG/AH.png",
          "./dist/images/PNG/2H.png",
          "./dist/images/PNG/3H.png",
          "./dist/images/PNG/4H.png",
          "./dist/images/PNG/5H.png",
          "./dist/images/PNG/6H.png",
          "./dist/images/PNG/7H.png",
          "./dist/images/PNG/8H.png",
          "./dist/images/PNG/9H.png",
          "./dist/images/PNG/10H.png",
          "./dist/images/PNG/JH.png",
          "./dist/images/PNG/QH.png",
          "./dist/images/PNG/KH.png",
          "./dist/images/PNG/AS.png",
          "./dist/images/PNG/2S.png",
          "./dist/images/PNG/3S.png",
          "./dist/images/PNG/4S.png",
          "./dist/images/PNG/5S.png",
          "./dist/images/PNG/6S.png",
          "./dist/images/PNG/7S.png",
          "./dist/images/PNG/8S.png",
          "./dist/images/PNG/9S.png",
          "./dist/images/PNG/10S.png",
          "./dist/images/PNG/JS.png",
          "./dist/images/PNG/QS.png",
          "./dist/images/PNG/KS.png",
        ];

        for (let i = 0; i < suits.length; i++) {
            for (let j = 0; j < ranks.length; j++) {
                this.cards.push(new Card(suits[i], ranks[j], values[j], ref[(i*13)+j]));
            }
        }
    }
    shuffleDeck() {
        let location1, location2, tmp;
        for (let i = 0; i < 1000; i++) {
            location1 = Math.floor((Math.random() * this.cards.length));
            location2 = Math.floor((Math.random() * this.cards.length));
            tmp = this.cards[location1];
            this.cards[location1] = this.cards[location2];
            this.cards[location2] = tmp;
        }
    }
}

export default Deck;