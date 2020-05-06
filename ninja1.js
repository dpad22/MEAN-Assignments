// create a new object contructor called Ninja with the following attributes:
    // - name
    // - health
    // - speed (private)
    // - strength (private)

    // by default, speed and strength should be 3. Health should be 100 by default.

    // Ninja should have the following methods:
    // - sayname() : This should log that ninja's name to the console.
    // - showStats() : Shows stats
    // - drinkSake() : Should add +10 hp to the ninja

function Ninja(name, health,){
        var self = this;
        this.name = name;
        this.health = 100;
        var speed = 3;
        var strength = 3;
        this.sayname = function(){
            console.log("My name is "+ this.name + " you killed my father, prepare to die")
        };
        this.showStats = function(){
            console.log("Name: "+ this.name)
            console.log("Health: "+ this.health)
            console.log("Speed: "+ speed)
            console.log("Strength: "+ strength)
        };
        this.drinkSake = function(){
            this.health += 10;
            console.log("Current Health: "+ this.name + " = " +this.health)
        }
        this.punch = function(target){
            if ((target instanceof Ninja)){
                target.health -= 5;
                console.log(this.name + " blasts "+ target.name + " with a huge punch. "+ target.name + " loses 5 hp! "+ target.name + " now has "+ target.health + "hp!")
        }
    }
        this.kick = function(target){
            if ((target instanceof Ninja)){
                var damage = 15 * strength;
                target.health -= damage;
                console.log(target.name + " was kicked in the face by "+ this.name + " and lost "+ damage + " hp!"+ target.name + " now has "+ target.health + "hp!" )
            }
        }

    }


var david = new Ninja('David')
var subZero = new Ninja ('subZero')
var scorpion = new Ninja ('scorpion')
console.log(david)
subZero.sayname()
david.sayname()
david.showStats()
david.drinkSake()
david.punch(subZero)
subZero.punch(david)
david.kick(subZero)
david.punch(subZero)
subZero.drinkSake()