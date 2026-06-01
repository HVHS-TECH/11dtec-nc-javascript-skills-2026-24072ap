/* Paste your code from task 7 here*/

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

function displayProduct(_name, _price){
    OUTPUT.innerHTML += "<p>" + _name + ": $" + _price + "</p>"
}

/*
function getFormInput(){
    const NAME_FIELD = document.getElementById("nameField");
    let userName = NAME_FIELD.value;
    OUTPUT.innerHTML = "<p>Your name is "+userName+"</p>";
} 
    */

function getFormInput(){
    let userAge = Number(document.getElementById("ageField").value);
        let userMoney = Number(document.getElementById("moneyField").value);

    age = userAge;
    pocketMoney = userMoney;
    halfMoney = pocketMoney / 2;
    newAge = age + 10;

    start();
    
    if (pocketMoney >= 4){
        OUTPUT.innerHTML += "<p>You can afford a chocolate bar millionare brodie</p>"
    }

    if (pocketMoney <= 3.99){
        OUTPUT.innerHTML += "<p>You cannot afford a chocolate bar homeless kid</p>"
    }

}

 
 
const SHOPPING_FORM = document.getElementById("shoppingForm");
if (SHOPPING_FORM.checkValidity()=== false){
    OUTPUT.innerHTML += "Please fill out all fields correctly. <br>";
} else {
//process form normally...
}
 