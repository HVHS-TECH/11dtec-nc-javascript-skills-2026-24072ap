 
 
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

 }