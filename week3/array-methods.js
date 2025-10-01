//  arrays.js
// const steps = ["one", "two", "three"];
// function listTemplate(step) {
//   return "<li>" + step + "</li>";
// }
// const stepsHtml = steps.map(listTemplate);// use map to convert the list from strings to HTML
// document.querySelector("#myList").innerHTML =  stepsHtml.join("");// set the innerHTML

// array-methods.js
// example 2
const grades = ["A", "B", "A"];
function convertGradeToPoints(grade) {
  let points = 0;
  if (grade === "A") {
    points = 4;
  } else if (grade === "B") {
    points = 3;
  }
  return points;
}
const gpaPoints = grades.map(convertGradeToPoints);

// example 3
// const gpaPoints = grades.map(convertGradeToPoints);
// const pointsTotal = gpaPoints.reduce(function (total, item) {
//   return total + item;
// });
// const gpa = pointsTotal / gpaPoints.length;

// // example 2
// // this is the same thing as above, but with an arrow function
// // const pointsTotal = gpaPoints.reduce((total, item) => total + item);
// // const gpa = pointsTotal / gpaPoints.length;

// // this could be further simplified as
// const gpa = gpaPoints.reduce((total, item) => total + item) / gpaPoints.length;