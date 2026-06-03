 
 
 const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
 OUTPUT.innerHTML = "<h2>Added by Javascript</h2>";

 function start(){
 
 
 let classArray = ["Alice", "Bob", "Kaia", "Olivia", "Aroha", "Josh"];
 classArray.splice(3,1);

  OUTPUT.innerHTML = "There are "+ classArray.length +" people in the array.";

  for(let i=0; i<classArray.length; i++){

    OUTPUT.innerHTML += "Person "+ i +": "+classArray[i]+"<br>";

  }


OUTPUT.innerHTML = "The " + studentNumber + " person in the class is "+ classArray[choice];
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
OUTPUT.innerHTML = "<h2>Shopping list</h2>";

let shoppingList = [];

function addItem() {
  const input = document.getElementById("itemInput");
  const item = input.value.trim();
  if (!item) return;
  shoppingList.push(item);
  OUTPUT.innerHTML = "You have added <strong>" + item + "</strong> to the list.";
  input.value = "";
}

function showList() {
  if (shoppingList.length === 0) {
    OUTPUT.innerHTML = "Your shopping list is empty.";
    return;
  }
  let html = "These are the items on your shopping list:<br>";
  for (let i = 0; i < shoppingList.length; i++) {
    html += shoppingList[i] + "<br>";
  }