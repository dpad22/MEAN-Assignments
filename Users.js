users = [
    {
        fname: "Kermit",
        lname: "the Frog",
        languages: ["Python", "JavaScript", "C#", "HTML", "CSS", "SQL"],
        interests: {
            music: ["guitar", "flute"],
            dance: ["tap", "salsa"],
            television: ["Black Mirror", "Stranger Things"]
        }
    },
    {
        fname: "Winnie",
        lname: "the Pooh",
        languages: ["Python", "Swift", "Java"],
        interests: {
            food: ["honey", "honeycomb"],
            flowers: ["honeysuckle"],
            mysteries: ["Heffalumps"]
        }
    },
    {
        fname: "Arthur",
        lname: "Dent",
        languages: ["JavaScript", "HTML", "Go"],
        interests: {
            space: ["stars", "planets", "improbability"],
            home: ["tea", "yellow bulldozers"]
        }
        }
    ]

    // Write a function called userLanguages that accepts an array of users, such as the one shown above. Return a string that lists all the users by first name and last name and the languages that each user knows. Make the string as nicely formatted as possible so that it is easy to read.

    // Example: userLanguages(users) returns
    
    // Kermit the Frog knows Python, JavaScript, C#, HTML, CSS, and SQL. 
    // Winnie the Pooh knows Python, Swift, and Java. 
    // Arthur Dent knows JavaScript, HTML, and Go.

function userLanguages(someArray){
    for (var i = 0; i<someArray.length;i++){
        for (var key in someArray[i]['interests']){
            int = someArray[i]['interests'][key];
        }
        name = someArray[i].fname +' '+ someArray[i].lname
        lang = someArray[i].languages
        saying = name + " knows " + lang +"."
        for (j = 0;j < someArray[i].interests.length; j++){
        }
        saying2 = name + " is also interested in " + int +"."
        console.log(saying)
        console.log(saying2)
    }
    return someArray
}

userLanguages(users)
