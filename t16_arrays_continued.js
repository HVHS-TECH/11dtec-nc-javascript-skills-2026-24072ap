 /* Paste your code from task 16 here*/

/****************************************
 * maths
 */

console.log("Running t16_arrays_continued.js");
 
 const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
 OUTPUT.innerHTML = "<h2>Added by Javascript</h2>";

 

 
 function start(){


  let shoppingArray = ["Chocolate bar", "Chips", "Drink"];
  let shoppingChoice = SHOPPING_FIELD.value;
  shoppingArray.push(shoppingChoice);
  OUTPUT.innerHTML += "You have added: "+shoppingChoice+ "  to the list "+"<br>";


 for(let i=0; i<shoppingArray.length; i++){
    OUTPUT.innerHTML += shoppingArray[i] + "<br>";
 }
}