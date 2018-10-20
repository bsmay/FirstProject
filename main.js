let name =prompt("Please state your name."); 

let pancakeConfirm =confirm("Please press OK " +  name  +  " if you cook pancakes regularly.");

if (pancakeConfirm){
    alert("Welcome to my page " + name +"!");
}

else {
     alert("Please leave immediately.");
}

console.log("The user's name is" + name)



