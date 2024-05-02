// Question _________ 55

// Original array of numbers
let numbers = [3, 7, 12, 5, 9];

// Create a new array where each number is twice its original value
let doubledNumbers = numbers.map(num => num * 2);

console.log(doubledNumbers);


// Question _________ 56


// Original array with mixed types of items
let mixedArray = [10, "apple", true, "banana", 25.5, "cherry"];

// Filter out non-string items and create a new array with only strings
let stringsOnly = mixedArray.filter(item => typeof item === "string");

console.log(stringsOnly);


// Question __________ 57


// List of grades
let grades = [85, 92, 78, 95, 88];

// Calculate the sum of all grades
let sum = grades.reduce((total, grade) => total + grade, 0);

// Calculate the average grade
let average = sum / grades.length;

console.log("Average grade:", average);
