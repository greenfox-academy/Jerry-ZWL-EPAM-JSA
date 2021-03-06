'use strict';
// Join the two array by matching one girl with one boy in the order array
// Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]

var girls = ["Eve", "Ashley", "Bözsi", "Kat", "Jane"];
var boys = ["Joe", "Fred", "Béla", "Todd", "Neef", "Jeff"];
var order = [];

order = girls.map(
    (u, i) => {
        return [u, boys[i]];
    }
).reduce(function(a, b) {
    return a.concat(b);
})


console.log(order);