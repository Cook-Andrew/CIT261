//loops
//while loop
var condition = true;
var counter = 0;
while (condition) {
  if (counter > 5) {
    condition = false;
    document.write("<br>");
    break;
  }
  document.write("condition is still true, counter = " + counter + " <br>");
  counter++;
}

//for loop
for (i = 0; i < 10; i++) {
  document.write("i is still less than ten, counter = " + i + "<br>");
}
document.write("<br>");

//for in loop
var testArray = [1, 5, 3, 7, 3, 5, 6];
for (x in testArray) {
  document.write("index " + x + " = " + testArray[x] + ", <br>");
}
document.write("<br>");

//conditional Statements
//conditions can either be true or false; boolean operators are == "is it equal?", != "is it not equal?", <, >, <= "less than or equal to", >= "equal to or greater than"
// you can check two conditions with "and" &&, and "or" ||
// you can shorthand "condition != true" to !condition

//if
if (!condition) {
  document.write("condition is still false from that while loop earlier");
}
document.write("<br><br>");

//switches
var anotherCondition = Math.floor(Math.random() * 3) + 1;
switch (anotherCondition) {
  case 1:
    document.write("if you break the switch stops there");
    break;
  case 2:
    document.write("if you don't break it does every case following. <br>");
  default:
    document.write("see?");
}
document.write("<br><br>");

//Functions
//a function takes zero or more inputs, and returns one output.
function aFunction() {
  var something = "value of something";
  return something;
}
document.write(aFunction() + "<br><br>");

//variables
var variableOne = "a variable can be called with var. it is global when declared outside of a function, and local inside a function.";
let variableTwo = "a variable can also be called with let. it's scope is as big as the block enclosing it. this may be even smaller than the function it is inside. This causes some logic errors if programmers are not careful!";

//Parameters
//if you want to add an input to a function, use a paramater like so:
//a function to multiply the parameter by 2:
var input = 3;
var output = anotherFunction(input);

function anotherFunction(parameter) {
  return parameter * 2;
}
document.write(input + " times 2 is " + output + "<br><br>");

//arrays
var anArray = new Array(); // the new Array() format is risky
var exampleOne = new Array(2); // this creates and array with two undefined elements.
// you may be expecting exampleOne to one to store "2" in element 0, but it wont.
var exampleTwo = new Array(1, 2); // this creates an array with the elements 1 and 2 stored in it.

var anotherArray = []; //this format is much more straight forward.
var exampleThree = [1, 2]; //especially because you can declare and assign at the same time.
var exampleFour = [2]; //unlike example one, this actually assigns the value "2" to index 0

//I explain arrays to non-programmers like telling time. the hour is the name of the array, 
//and the minutes is the value. indexes start at zero. Notice the minutes start at 0!
var twelve = [0, 10, 20, 30, 40, 50];
document.write(twelve[0] + "<br><br>");

//arrays can have methods!
twelve.sort();
twelve.reverse();
var twelveString = twelve.toString();
document.write(twelveString + "<br><br>");

//associateve arrays
//associateve arrays sometimes act like objects, and sometimes act like named indexes.
var nameArray = [];
nameArray["don't"] = "associative arrays can use ' symbol<br><br>";
document.write(nameArray["don't"]);

nameArray[87263] = "'nameArray.87263' would produce an error, but this won't";
document.write(nameArray[87263] + "<br><br>");
nameArray["87263"] = "be careful about quotations though";
document.write(nameArray[87263] + "<br><br>"); //notice how this appears to be an index!

nameArray.name = "bob";
nameArray.warning = "see how you have to be careful?";
var name = "warning";

document.write(nameArray.name + "<br><br>"); //this should write bob. Although you may expect it to write the warning, it won't.
document.write(nameArray["name"] + "<br><br>"); // this should also write bob.
document.write(nameArray[name]); // this should write the warning. name is a variable and not an object in this case.