
var tigger = { character: "Tigger" }; // start with just the character attribute
var pooh = { character: "Winnie the Pooh" };
var piglet = { character: "Piglet"};        // create Piglet's home object with just the character attribute
var bees = {character: "Bees"};
var owl = {character: "Owl"};
var chris_robin = {character: "Christopher Robin"};
var rabbit = {character: "Rabbit"};
var gopher = {character: "Gopher"};
var kanga = {character: "Kanga"};
var eeyore = {character: "Eeyore"};
var heffalumpa = {character: "Heffalump"};
var player = {location: tigger}



tigger.north = pooh; // add more attributes, where we are actually storing the memory location for the other object
pooh.south = tigger;
pooh.west = piglet;
pooh.east = bees;
pooh.north = chris_robin;
piglet.east = pooh;
piglet.north = owl;          // Piglet's east attribute is Tigger's north attribute, which is a memory address
// tigger.north.west = piglet;          // Follow Tigger's north attribute to a location in memory
                                    // Assign that object's west attribute to piglet

// bees pointers
bees.west = pooh;
// bees.west.south = tigger;
bees.north = rabbit;
// rabbit pointers
rabbit.south = bees;
rabbit.east = gopher;
rabbit.west = chris_robin;
// gopher pointer
gopher.west = rabbit;
// chris robin pointers
chris_robin.south = pooh;
chris_robin.west = owl,
chris_robin.east = rabbit;
chris_robin.north = kanga;
// owl pointers
owl.south = piglet;
owl.east = chris_robin;
// kanga pointers
kanga.south = chris_robin;
kanga.north = eeyore;
// eeyore pointers
eeyore.south = kanga;
eeyore.east = heffalumpa;
// heffalump pointer
heffalumpa.west = eeyore;

function move(direction){
    if(direction == "north" || direction == "North"){
        if(player.location.north == null){
            console.log("The path to the North leads to nowhere. You turn around and head back!")
        }
        else {
            player.location = player.location.north;
            console.log("Your travels brings you to " + player.location.character + "'s house!");
        }
    }
    if(direction == "east" || direction == "East"){
        if(player.location.east == null){
            console.log("The path to the East leads to nowhere. You turn around and head back!")
        }
        else {
            player.location = player.location.east;
            console.log("Your travels East brings you to " + player.location.character + "'s house!");
        }
    }
    if(direction == "west" || direction == "West"){
        if(player.location.west == null){
            console.log("The path to the West leads to nowhere. You turn around and head back!")
        }
        else {
            player.location = player.location.west;
            console.log("Your travels West brings you to " + player.location.character + "'s house!");
        }
    }
    if(direction == "south" || direction == "South"){3
        if(player.location.south == null){
            console.log("The path to the South leads to nowhere. You turn around and head back!")
        }
        else {
            player.location = player.location.south;
            console.log("Your travels South brings you to " + player.location.character + "'s house!");
        }
    }
}

move("north")
move("west")
move("south")
move("east")

// attempt to simplify function

// function move(direction){
//     // if(direction == "north" || direction == "North"){
//         dir = ["north", "south", "east", "west"];
//         console.log(dir.length)
//         for (var i=0;i<dir.length;i++);
//             console.log(dir[i]);
//             if(player.location.dir[i] == null){
//                 console.log("The path to the North leads to nowhere. You turn around and head back!")
//             }
//             else {
//                 player.location = player.location.dir[i];
//                 console.log("Your travels " + dir[i] + " brings you to " + player.location.character + "'s house!");
//             }
