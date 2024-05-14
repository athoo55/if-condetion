// Task 1
function checkVotingEligibility() {
  let age = 19 ;
  if (age >= 18) {
      console.log('You are eligible for voting');
     
  } else {
    console.log('You are not eligible for votin');
  } 
}

// Task 2
function printNumbersWithWhile() {
  let i = 1;
  while (i <= 5) {
      console.log(i);
      i++;
  }
}

// Task 3
function printEvenNumbersWithFor() {
for (let i = 1; i <= 5; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

}

// Task 4
function getDayOfWeek() {
let day = 1;
while (day <= 7) {
  console.log(day);
  day++;
}

}

// Task 5
function sum() {
let num1 = 5;
let num2 = 3;
let sum = num1 + num2;
console.log(sum);

}

// Task 6
//Uncomment and solve
// const fruits = ;
const fruits = ["apple", "banana", "orange", "grape", "kiwi"];
for (let i = 0; i < fruits.length; i++) {
console.log(fruits[i]);
}

module.exports = {
checkVotingEligibility,
printNumbersWithWhile,
printEvenNumbersWithFor,
getDayOfWeek,
sum,
fruits,

};
