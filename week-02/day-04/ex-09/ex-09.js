'use strict';

var students = [
    { 'name': 'Teodor', 'age': 3, 'candies': 2 },
    { 'name': 'Rezso', 'age': 9.5, 'candies': 2 },
    { 'name': 'Zsombor', 'age': 12, 'candies': 5 },
    { 'name': 'Aurel', 'age': 7, 'candies': 3 },
    { 'name': 'Olaf', 'age': 12, 'candies': 7 },
    { 'name': 'Gerzson', 'age': 10, 'candies': 1 },
]

// create a function that takes a list of students and logs: 
// - how many candies are owned by students

// create a function that takes a list of students and logs:
// - Sum of the age of people who have lass than 5 candies
function candies(stu) {
    var numOfCandies = stu.reduce(
        (p, c) => { return p += c['candies']; }, 0);
    console.log(numOfCandies);
}
candies(students);

function agesMoreThan5(stu) {
    var ages = stu.reduce(
        (p, c) => {
            if (c['candies'] > 5) { return p += c['age']; } else { return p; }
        }, 0)
    console.log(ages);
}
agesMoreThan5(students);