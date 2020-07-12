//created a funtion called time

function time(){

/*these are the var: today is equal to the 
new Date() object; var hour now gets the hour
from the variable today; var el is set to the 
Greeting id in the HTML document. */

var today = new Date();
var hourNow = today.getHours();
var el = document.getElementById("Greeting");

/*the if else statement checks the hour against the qualifiers in the if statement to
determine what to print in the id = Greeting.*/

if (hourNow > 18){
    el.innerHTML = "Good Evening";
} else if (hourNow > 12){
    el.innerHTML = "Good Afternoon";
} else if (hourNow > 0){
    el.innerHTML = "Good Morning";
}
}

/*the window.onload calls the function in
the curly braces after the HTML loads on the screen */

window.onload = function(){

time()
}