 
 
 const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
 OUTPUT.innerHTML = "<h2>Added by Javascript</h2>";

 function start(){
 
 for(let i=0; i<classArray.length; i++){

    OUTPUT.innerHTML += "Person "+ i +": "+classArray[i]+"<br>";

  }

 }