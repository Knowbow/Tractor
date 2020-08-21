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
            '../../dist/images/PNG/AC.png',
            '../../dist/images/PNG/2C.png',
            '../../dist/images/PNG/3C.png',
            '../../dist/images/PNG/4C.png',
            '../../dist/images/PNG/5C.png',
            '../../dist/images/PNG/6C.png',
            '../../dist/images/PNG/7C.png',
            '../../dist/images/PNG/8C.png',
            '../../dist/images/PNG/9C.png',
            '../../dist/images/PNG/10C.png',
            '../../dist/images/PNG/JC.png',
            '../../dist/images/PNG/QC.png',
            '../../dist/images/PNG/KC.png',
            '../../dist/images/PNG/AD.png',
            '../../dist/images/png/2D.png',
            '../../dist/images/png/3D.png',
            '../../dist/images/png/4D.png',
            '../../dist/images/png/5D.png',
            '../../dist/images/png/6D.png',
            '../../dist/images/png/7D.png',
            '../../dist/images/png/8D.png',
            '../../dist/images/png/9D.png',
            '../../dist/images/png/10D.png',
            '../../dist/images/png/JD.png',
            '../../dist/images/png/QD.png',
            '../../dist/images/png/KD.png',
            '../../dist/images/png/AH.png',
            '../../dist/images/png/2H.png',
            '../../dist/images/png/3H.png',
            '../../dist/images/png/4H.png',
            '../../dist/images/png/5H.png',
            '../../dist/images/png/6H.png',
            '../../dist/images/png/7H.png',
            '../../dist/images/png/8H.png',
            '../../dist/images/png/9H.png',
            '../../dist/images/png/10H.png',
            '../../dist/images/png/JH.png',
            '../../dist/images/png/QH.png',
            '../../dist/images/png/KH.png',
            '../../dist/images/png/AS.png',
            '../../dist/images/png/2S.png',
            '../../dist/images/png/3S.png',
            '../../dist/images/png/4S.png',
            '../../dist/images/png/5S.png',
            '../../dist/images/png/6S.png',
            '../../dist/images/png/7S.png',
            '../../dist/images/png/8S.png',
            '../../dist/images/png/9S.png',
            '../../dist/images/png/10S.png',
            '../../dist/images/png/JS.png',
            '../../dist/images/png/QS.png',
            '../../dist/images/png/KS.png',
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