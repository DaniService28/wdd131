// //  arrays.js
// // const steps = ["one", "two", "three"];
// // function listTemplate(step) {
// //   return "<li>" + step + "</li>";
// // }
// // const stepsHtml = steps.map(listTemplate);// use map to convert the list from strings to HTML
// // document.querySelector("#myList").innerHTML =  stepsHtml.join("");// set the innerHTML

// // array-methods.js
// // example 2
// const grades = ["A", "B", "A"];
// function convertGradeToPoints(grade) {
//   let points = 0;
//   if (grade === "A") {
//     points = 4;
//   } else if (grade === "B") {
//     points = 3;
//   }
//   return points;
// }
// const gpaPoints = grades.map(convertGradeToPoints);

// // example 3
// // const gpaPoints = grades.map(convertGradeToPoints);
// // const pointsTotal = gpaPoints.reduce(function (total, item) {
// //   return total + item;
// // });
// // const gpa = pointsTotal / gpaPoints.length;

// // // example 2
// // // this is the same thing as above, but with an arrow function
// // // const pointsTotal = gpaPoints.reduce((total, item) => total + item);
// // // const gpa = pointsTotal / gpaPoints.length;

// // // this could be further simplified as
// // const gpa = gpaPoints.reduce((total, item) => total + item) / gpaPoints.length;


//  arrays.js
const steps = ["one", "two", "three"];

function listTemplate(step) {
  return `<li>${step}</li>`
}
const stepsHtml = steps.map(listTemplate)// use map to convert the list from strings to HTML
document.querySelector("#myList").innerHTML += stepsHtml.join("")// set the innerHTML


// gpa module
const gpaGrades = ['A', 'B', 'A']


function returnGpa (grade){
  let points = 0
  if (grade === "A"){
    points = 4
  } else if (grade === "B"){
    points = 3
  }

  return points
}

const gpa = gpaGrades.map(returnGpa)
const displayGpa = gpa.map(listTemplate)
document.querySelector("#gpaList").innerHTML += displayGpa.join("")

// reduce module
const reduceGpa = gpa.reduce((total, item) => {
  return total + item
})

const newGpa = reduceGpa / gpa.length;

document.querySelector("#gpaListReduce").innerHTML = newGpa.toFixed(2)


// filter
const fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];

const shortWords = fruits.filter((word) => word.length < 6);
const displayFruits = shortWords.map(listTemplate)

document.querySelector("#filterList").innerHTML = displayFruits.join("")

// indexOf
const indexPractice =[12, 34, 21, 54];

const valueIndex = indexPractice.indexOf(21);

document.querySelector("#indexOfList").innerHTML = valueIndex