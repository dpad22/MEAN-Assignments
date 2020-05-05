
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



tigger.north = pooh; // add more attributes, where we are actually storing the memory location for the other object
pooh.south = tigger;
pooh.west = piglet;
pooh.east = bees;
pooh.north = chris_robin;
piglet.east = tigger.north;
piglet.north = owl;          // Piglet's east attribute is Tigger's north attribute, which is a memory address
tigger.north.west = piglet;          // Follow Tigger's north attribute to a location in memory
                                    // Assign that object's west attribute to piglet

// bees pointers
bees.west = pooh;
bees.west.south = tigger;
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
