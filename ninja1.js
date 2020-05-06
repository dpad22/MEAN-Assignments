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

function ninja(name, health,){
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
            console.log("Current Health: " +this.health)
        }

    }


var david = new ninja('David')
console.log(david)
david.sayname()
david.showStats()
david.drinkSake()