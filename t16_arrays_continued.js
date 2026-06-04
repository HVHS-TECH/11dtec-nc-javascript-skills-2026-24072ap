 
 
 const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
 OUTPUT.innerHTML = "<h2>Added by Javascript</h2>";

 function start(){
 
 

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