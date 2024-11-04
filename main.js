/**
 * Unit 3 - Conditionals and Loops
 * ICS3 - Mr. Brash 🐿️
 * 
 * For this unit, Mr. Brash is trying something different. Each lesson will
 * be in this one repository, separated in the Lessons folder.
 * 
 * If you run into Git or Github issues, call Mr. Brash over.
 **/ 


'use strict';

/*** Event Listeners ***/
document.getElementById(


/*** Functions ***/

// A very accurate rounding function
function round(value, decimals) {
    let multiplier = 10**decimals;
    return Math.round((value + Number.EPSILON) * multiplier) / multiplier;
}

// Get a random number from min to max
function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function user_age() {

let age = +prompt("Please enter your age")

    if (age >= 60) {
        console.log("You qualify for the senior discount!");
    }
    if (age = 44) {
        console.log("So is Mr. Squirrel!");
    }

    if (age <= 16) {
        console.log(" You're not old enough to drive yet!")
    }
}





let user_name = +prompt ("What is your name?")

alert("Welcome "+user_name+" to haunted St. Matthew HS!")

function startGame() {

let choice = +prompt("do you want to go to the (1)library or (2)basement?")

if (choice == 1) {
    alert("lets go to the library")
    library()

}
 if (choice == 2) {
    alert("Let's head down to the basement")



    }

 }

 function basement() {



 }

 function library() {
    let l = prompt("you see a creepy old book laying on the table, you notice it has a weird odour and seems to have been there for quite a while. Do you want to (1)open the book or (2) ignore the book and explore the rest of the library")

    if (l == 1) {
        prompt("The book was completely blank, you we're dissapointed because you were expecting to find something interesting. right when you were about to close the book, some ink forms on the page and it says i'm watching you. you can either (1) try to escape the library as fast as you can or (2) calm down and stay in the library")

    }
        if (l == 2) {
            alert("")

        }
 }
