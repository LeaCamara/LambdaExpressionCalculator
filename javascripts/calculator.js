// Event Listeners for Buttons:

var inputOne = document.getElementById("input1");
var inputTwo = document.getElementById("input2");

var outputArea = document.getElementById("outputArea");

var addStuff = document.getElementById("addButton").addEventListener("click", addNums);
var subtractStuff = document.getElementById("subtractButton").addEventListener("click", subtractNums);
var multiplyStuff = document.getElementById("multiplyButton").addEventListener("click", multiplyNums);
var divideStuff = document.getElementById("divideButton").addEventListener("click", divideNums);

var calcButton = document.getElementById("calculateButton").addEventListener("click", calculateNums);

function addNums (input1, input2) {
  console.log(input1 + input2);
  return input1 + input2;
}

function subtractNums (input1, input2) {
  console.log(input1 - input2);
  return input1 - input2;
}

function multiplyNums (input1, input2) {
  console.log(input1 * input2);
  return input1 * input2;
}

function divideNums (input1, input2) {
  console.log(input1 / input2);
  return input1 / input2;
}

// When the user performs one of the operations, output the result to another DOM element of your choice.