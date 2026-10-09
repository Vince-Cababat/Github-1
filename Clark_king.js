// VARIABLES

let studentName = "Juan";
let studentAge = 18;
let passingGrade = 75;

// ARRAYS
let subjects = ["Math", "Science", "English", "Programming"];

let grades = [85, 92, 78, 88];

let activities = ["Basketball", "Coding", "Reading", "Gaming"];

// CONDITIONALS
if (studentAge >= 18) {
    console.log(studentName + " is an adult.");
} else {
    console.log(studentName + " is a minor.");
}

// Conditional 2
if (grades[0] >= passingGrade) {
    console.log("Math: Passed");
} else {
    console.log("Math: Failed");
}

// Conditional 3
if (grades[1] >= 90) {
    console.log("Science: Excellent!");
} else if (grades[1] >= passingGrade) {
    console.log("Science: Passed.");
} else {
    console.log("Science: Failed.");
}

// LOOPS
console.log("\nSubjects:");

for (let i = 0; i < subjects.length; i++) {
    console.log(subjects[i]);
}

// Conditional 2
console.log("\nGrades:");

for (let i = 0; i < grades.length; i++) {
    console.log(grades[i]);
}

// Conditional 3
console.log("\nActivities:");

for (let activity of activities) {
    console.log(activity);
}