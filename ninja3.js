class Ninja{ 
    constructor (name){
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
        }
        // class methods
        sayName(){
            console.log("My name is "+ this.name + " you killed my father, prepare to die")
        };
        showStats(){
            console.log("Name: "+ this.name);
            console.log("Health: "+ this.health);
            console.log("Speed: "+ this.speed);
            console.log("Strength: "+ this.strength);
        };
        drinkSake(){
            this.health += 10;
            console.log("Current Health: "+ this.name + " = " +this.health)
        }
}

class Morph extends Ninja {
    constructor(name, wisdom){
        super(name);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
        }

        speakWisdom(){
            this.drinkSake()
            console.log("It's Morphing Time!")
    }
}       


const jason = new Ninja("Jason")
const tommy = new Ninja("Tommy")
const andros = new Ninja("Andros")
const redRanger = new Morph ("Red Ranger")
const redZeoRanger = new Morph ("Red Zeo Ranger")
const redSpaceRanger = new Morph ("Red Space Ranger")
jason.showStats();
tommy.showStats();
andros.showStats();
redRanger.speakWisdom()