import { Equation } from "./Calculator";
const print = console.log;
print("Typescript compile test and stuff.");

const equation = new Equation(19.5);
const cool = document.querySelector("#cool");
const modifierToSymbol = {add: "+",subtract: "-", multiply:"*",divide:"/"}

equation.addNumber(13);
equation.subtractNumber(23);    
equation.divideNumber(2);
equation.multiplyNumber(2);
equation.addNumber(13);
equation.subtractNumber(23);  
equation.addNumber(13);
equation.subtractNumber(23);  
const history = equation.getHistory();

const appender = history.map((value, _index) => {
    return `<li>Old answer: ${value.currentAnswer}. Operation: ${value.modifier}. Argument: ${value.givenArgument}. New answer: ${value.newAnswer}.</li>`;
}).join("");

const appender2 = history.map((value, _index) => {
    if (value.modifier !== "none") {
        return `<div class="module"><p><span>${value.nthModification}: </span>${value.currentAnswer}${modifierToSymbol[value.modifier]}${value.givenArgument}=${value.newAnswer}</p></div>`;
    }
    return `<div class="module"><p><span>${value.nthModification}: </span>${value.currentAnswer}</p></div>`;
}).join("");

document.querySelector("#rest").innerHTML = appender2;
cool.innerHTML = appender;