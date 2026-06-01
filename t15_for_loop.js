/* Paste your code from task 7 here*/

/****************************************
 * maths
 */

console.log("Running t05_JavaScript_and_HTML.js");


/********************************
 Main code
 ********************************/

 const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
 OUTPUT.innerHTML = "<h2>Added by Javascript</h2>";

 function start(){
const SHOPPING_FORM = document.getElementById("welcomeForm");
if (SHOPPING_FORM.checkValidity()=== false){
    OUTPUT.innerHTML += "Please fill out all fields correctly. <br>";
} else {
    let userName = document.getElementById("input_name").value;
    OUTPUT.innerHTML += "<p>Your name is "+userName+"</p>";
}

 }




/********************************
 Functions
 ********************************/ 




 
 
const SHOPPING_FORM = document.getElementById("shoppingForm");
if (SHOPPING_FORM.checkValidity()=== false){
    OUTPUT.innerHTML += "Please fill out all fields correctly. <br>";
} else {
//process form normally...
}
 