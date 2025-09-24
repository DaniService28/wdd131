const PI = 3.14;
let radius = 3;
let area = 0;

function calculateArea(r) {
    return PI * r * r;
}

area = calculateArea(3);
console.log("Area1:", area);
// radius = 4;
area = calculateArea(4);
console.log("Area2:", area);