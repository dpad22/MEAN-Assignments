// Challenge #1: Write a function that accepts an array of student objects, as shown below. Print all of the students' names and their cohorts.

let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];
function studentBody (arr){
    for(let i=0;i<arr.length; i++){
        console.log(arr[i]['name']+" attends "+ arr[i]['cohort']+" cohort.")
    }
}
studentBody(students)

// Challenge #2: Write a function that accepts an object of users divided into employees and managers, and display the number of characters per employee/manager's name, as shown below, and logs the information to the console.

let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
        {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
        {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
    };

function nameLength (someObj){
    let employees = someObj['employees']
        for(employee in employees){
            console.log(employees[employee].first_name + "'s first name has "+employees[employee].first_name.length+ " characters.")
            console.log(employees[employee].first_name + "'s last name has "+employees[employee].last_name.length+ " characters.")
        }
    let managers = someObj['managers']
        for(manager in managers){
            console.log(managers[manager].first_name + "'s first name has "+managers[manager].first_name.length+ " characters.")
            console.log(managers[manager].first_name + "'s last name has "+managers[manager].last_name.length+ " characters.")
        }

}
// }

nameLength(users)
