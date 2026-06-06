 /* Paste your code from task 16 here*/

/****************************************
 * maths
 */

console.log("Running t16_arrays_continued.js");
 
 const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
 OUTPUT.innerHTML = "<h2>Added by Javascript</h2>";

 

 
 function start(){

  let classArray = ["You loath chocolate", "Chocolate is meh", "Chocolate is pretty good", "Chocolate is the best thing EVER!!!!"];
  let ordinals = ["first", "second", "third", "fourth"];
  let choice = CHOOSE_FIELD.value;
  let studentNumber = ordinals[choice];
  OUTPUT.innerHTML = "You chose: "+classArray[choice]+ "<br>";
  OUTPUT.innerHTML = classArray;


OUTPUT.innerHTML = "The " + studentNumber + " message is "+ classArray[choice];

 

 }