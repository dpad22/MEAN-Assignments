
// Rewrite the code the way it would be seen by the interpreter and predict the output. An example is shown here:
// var example; 
// console.log(example); 
// example = "I'm the example";


// // GIVEN
// // console.log(example);
// // var example = "I'm the example!";
// // AFTER HOISTING BY THE INTERPRETER
// var example;
// console.log(example); // logs undefined
// example = "I'm the example!";


// ES6


// console.log(example);
// let example = "I'm the example!";    

// 1)- undefined
// console.log(hello);                                   
// var hello = 'world';                                 

        // var hello;
        // console.log(hello)
        // hello ='world'

// 2)- // test() = 'magnet'

// var needle;
// function test();{
//     var needle ='magnet';
//     console.log(needle);
// }
// needle = haystack;
// test();

// var needle = 'haystack';
// test();
// function test(){
// 	var needle = 'magnet';
// 	console.log(needle);
// }

// 3)- // brendan = 'super cool'
// var brendan;
// function print(){
// 	brendan = 'only okay';
// 	console.log(brendan);
// }
// brendan = 'super cool';
// console.log(brendan);

// var brendan = 'super cool';
// function print(){
// 	brendan = 'only okay';
// 	console.log(brendan);
// }
// console.log(brendan);

// 4)--  undefined, function = 'half chicken'

// var food;
// function eat(){
// 	food = 'half-chicken';
// 	console.log(food);
// 	var food = 'gone';
// }
// console.log(food);
// eat();

// var food = 'chicken';
// console.log(food);
// eat();
// function eat(){
// 	food = 'half-chicken';
// 	console.log(food);
// 	var food = 'gone';
// }

// 5)--error-mean not a function, undefined

// var mean;
// mean()
// console.log(food);
// mean = function(){
//     food = "chicken";
// 	console.log(food);
// 	var food = "fish";
// 	console.log(food);
// }
// console.log(food);

// mean();
// console.log(food);
// var mean = function() {
// 	food = "chicken";
// 	console.log(food);
// 	var food = "fish";
// 	console.log(food);
// }
// console.log(food);

// 6)--undefined, genre, r&b, disco

// var genre;
// function rewind() {
// 	genre = "rock";
// 	console.log(genre);
// 	var genre = "r&b";
// 	console.log(genre);
// }
// console.log(genre);
// genre = "disco";
// rewind();
// console.log(genre);


// 7)--san jose, seattle, burbank, san jose

// function learn() {
// 	dojo = "seattle";
// 	console.log(dojo);
// 	var dojo = "burbank";
// 	console.log(dojo);
// }
// dojo = "san jose";
// console.log(dojo);
// learn();
// console.log(dojo);

// 8)--chicago-students 65-hiring,error on dojo line 145

function makeDojo(name, students){
            const dojo = {};
            dojo.name = name;
            dojo.students = students;
            if(dojo.students > 50){
                dojo.hiring = true;
            }
            else if(dojo.students <= 0){
                dojo = "closed for now";
            }
            return dojo;
    }
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
