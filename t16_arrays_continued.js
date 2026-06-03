 
 
 const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
 OUTPUT.innerHTML = "<h2>Added by Javascript</h2>";

 function start(){
 
 
 let classArray = ["Alice", "Bob", "Kaia", "Olivia", "Aroha", "Josh"];

  let ordinals = ["first", "second", "third", "fourth", "fifth", "sixth"];
  let choice = CHOOSE_FIELD.value;
  let studentNumber = ordinals[choice];
  OUTPUT.innerHTML = "You chose: "+classArray[choice]+ "<br>";
  OUTPUT.innerHTML = classArray;
  OUTPUT.innerHTML = "There are "+ classArray.length +"people in the array.";


OUTPUT.innerHTML = "The " + studentNumber + " person in the class is "+ classArray[choice];

 }