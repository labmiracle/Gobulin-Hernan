/*
Vamos a crear un juego de cartas en el cual cada jugador saca una carta del mazo y el que
obtiene el número más alto gana.

1. Tener en cuenta que al sacar una carta del mazo, no puede salir la misma carta, por lo
menos mientras se este utilizando ese mazo

2. Las cartas que saca cada jugador deben salir en orden aleatorio
*/
class Deck {
    cards: number[];

    constructor() {
        this.cards = [];
        for (let i = 1; i <= 12; i++) {
            this.cards.push(i);
        }
    }

    pickCard(): number {
        if (this.cards.length === 0) {
            throw new Error("There are no more cards in the deck!!");
        }
        const randomIndex = Math.floor(Math.random() * this.cards.length);
        return this.cards.splice(randomIndex, 1)[0];
    }
}

class CardGame {
    players: string[];
    deck: Deck;

    constructor(playerNames: string[]) {
        this.players = playerNames;
        this.deck = new Deck();
    }

    play(): void {
        this.takeCard();
        const hands: { [player: string]: number } = {};
        this.players.forEach(player => {
            const card = this.deck.pickCard();
            hands[player] = card;
            console.log(`${player} pick a card ${card}`);
        });
        const winner = this.getWinner(hands);
        console.log(`Congrats ${winner}! you are the winner with a card number ${hands[winner]}`);
    }

    takeCard(): void {
        for (let i = this.deck.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.deck.cards[i], this.deck.cards[j]] = [this.deck.cards[j], this.deck.cards[i]];
        }
    }

    getWinner(hands: { [player: string]: number }): string {
        let maxCardValue = -Infinity;
        let winner: string = "";
        for (const player in hands) {
            if (hands[player] > maxCardValue) {
                maxCardValue = hands[player];
                winner = player;
            }
        }
        return winner;
    }
}

const game = new CardGame(["John Doe", "Jane Doe"]);
game.play();
game.play();
game.play();
game.play();
game.play();
game.play();
/*
 With 12 cards, it is possible to play up to 6 rounds. 
 If it is called a seventh time, it will display the error message "There are no more cards in the deck!!"
 */
