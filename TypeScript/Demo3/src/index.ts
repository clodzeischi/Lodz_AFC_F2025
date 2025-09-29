import {getArea} from "./helpers.js";
import {getPerimeter} from "./helpers.js";

const rectWidth: number = 25;
const rectLength: number = 4;

let myArea: number = getArea(rectWidth, rectLength);
let myPerimeter: number = getPerimeter(rectWidth, rectLength);

console.log("Area: " + myArea);
console.log("Perimeter: " + myPerimeter);
