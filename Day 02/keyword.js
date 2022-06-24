/* The list of JavaScript keywords outlined below is:
In //
instanceof //
Do //
else //
Const //
Function //
return //
Catch //
For //
if  //
try //
Break //
Continue //
null //
switch //
private
New //
throw //
while //
Case //
default //
Var //
False //
typeof //
True //

// didn't done.
debugger
Yield
This
Eval
Delete
implements
protected
Void
Package
Interface
Static
finally 
arguments
public
With
*/

// Exaple of var, if, else
var no = 0;
no++;
if (no < 10) {
  console.log("Less than 10");
} else {
  console.log("greter than 10");
}
//Example of while,continue,break
var no = 0;
sposition: while (true) {
  no++;
  if (no < 10) continue sposition;
  break;
}
// Example of in,instanceof
var fruits = { f1: "apple", f2: "banana", f3: "orange" };
console.log("apple" in fruits);
fruits instanceof Object; // True
console.log(fruits instanceof Object);
// Example of do, while
var a = 1;
do {
  console.log("loop is running for " + a + "times</p>");
  a++;
} while (a <= 10);
//Example function and Return keyword
var func = function () {
  return "Hello";
};
// for keyword
for (var a = 0; a <= 10; a++) {
  console.log("The loop is running for " + a + " times");
}
// // export,let,const keyword
// export let fruits = ["apple", "banana", "orange"]; // export an array
// export const fruit = "apple"; // export a constant
// new keyword
// Employee obj = new Employee ();
// Switch,case,default keyword
var date = new Date();
switch (date.getDay()) {
  case 6:
    alert("This is weekend.");
    break;
  case 0:
    alert("This is weekend.");
  default:
    console.log("Looking for a weekend.");
    break;
}
// typeof,true,false
typeof fruit;
var inp;
var inp = true;
var inp = false;
// try,catch,throw

var i = 1;
try {
  if (i == "") throw "is Empty";
  if (x > 0) throw "positive";
  if (x < 0) throw "negative";
} catch (msg) {
  //   message.innerHTML = "Input " + msg;
}
// Null keyword
var age = null;
console.log(age);
