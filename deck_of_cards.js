class Card{
    constructor(suit, value, num){
        this.suit = suit;
        this.value = value;
        this.num = num
    }
        showCard(){
            console.log(`Card displayed is a ${this.suit} of ${this.value}`)
        }
}

class Deck extends Card {
    constructor(suit, value, num){
        super(suit, value, num);
        this.deck = []
        this.reset();
        this.shuffle();
    }
    // deck methods
    // reset method
    reset(){
        this.deck =[];
        // arrays for deck creation
    const suits = ['Hearts','Diamonds', 'Spades', 'Clubs'];
    const values = ['Ace','2','3','4','5','6','7','8','9','10','Jack','Queen','King'];
// for loop to create 52 card deck
    for(let suit in suits){
        for(let value in values){
            this.deck.push(new Card(`${values[value]} of ${suits[suit]}`));
            }
        }
        console.log(`${this.deck}`)
    }
    // Shuffle
    shuffle(){
        const { deck } = this;
        let count = deck.length, i;
        while (count){
            i = Math.floor(Math.random() * count--);
            [deck[count], deck[i]] = [deck[i], deck[count]];
        }
        return this
    }
    // Deal card
    deal(){
        // console.log(this.deck.pop());
        console.log(`${this.deck.length}`)
        return this.deck.pop();
    }

}

class Player extends Deck{
    constructor(name){
        super();
        this.name = name;
        this.hand = [];
        
    }
        showPlayer(){
            console.log(`Player Name: ${this.name}`)
            console.log(`HandSize: ${this.hand.length} `)
        }
        flipCard(){
            var temp = this.hand[0];
            console.log(temp)
            this.showCard(temp);
        }

        draw(){
            this.hand.push(`${this.deal()}`)
            console.log(`${this.name} is dealt a card`)
            return this.hand
        }
        discardHand(){
            this.hand = []
            console.log(`${this.name} has discarded their hand. There are ${this.hand.length} cards in their hand.`)
        }
        discard(){
            // pick random card to discard
            var temp_num = Math.floor(Math.random() * this.hand.length);
            var temp = this.hand[temp_num];
            this.hand[temp_num] = this.hand[this.hand.length - 1];
            this.hand[this.hand.length - 1] = temp;
            // discard card in an array of Hand
            
            this.hand.pop();

            console.log(`${this.name} discards ${temp}, ${this.hand}`)
            return this.hand
        }
}


const firstDeck = new Deck();
const david = new Player('David');
// firstDeck.reset()
david.showPlayer()
david.draw()
david.draw()
david.draw()
david.draw()
david.flipCard()
console.log(david.hand.length)
david.discard()
// david.showCard()
// david.discardHand()
// console.log(david.hand.length)




