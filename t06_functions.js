
/****************************************
 * maths
 */

console.log("Running t05_JavaScript_and_HTML.js");


//variables
let Username = "Anish";
let year = 2026;
let age = 15;
let money = 20;
let birthyear;
let oldage;
let pocketMoney = 20;
let newAge = age + 10;
birthyear = year - age;
halfMoney = money / 2; 


/********************************
 Main code
 ********************************/

 const OUTPUT = document.getElementById("JavaScriptOutput");
 OUTPUT.innerHTML = "<h2>Added by Javascript</h2>";
OUTPUT.innerHTML += ("<p>Welcome " + "to " + "the " + "shop </p>");
OUTPUT.innerHTML += ("<p>Hi " + Username + "</p>");
OUTPUT.innerHTML += ("<p>As of " + year + " you are " + age + " years old" + "</p>");
OUTPUT.innerHTML += ("<p>You were born in " + (year - age) + "</p>");
OUTPUT.innerHTML += ("<p>In 10 years you will be " + newAge + " years old" + "</p>");
OUTPUT.innerHTML += ("<p>You have " + pocketMoney + " dollars" + "</p>" );
OUTPUT.innerHTML += ("<p>You spend half of your money, now you have " + halfMoney + "</p>" );
OUTPUT.innerHTML += ("<p>Then you get $3, now you have " + (halfMoney + 3) + "</p>" );
writeLine()

/********************************
 Functions
 ********************************/ 
function writeLine(){

    OUTPUT.innerHTML += "<p>Less code matters</p>";
}