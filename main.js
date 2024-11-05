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
document.getElementById("startGame").addEventListener("click", startGame);


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

function menu() {

    // Setup the menu
    let message = `Hi! Please make a selection:
    1 - Play
    2 - Options
    3 - DLC
    4 - Check for Updates
    5 - Exit
    `
    // Prompt with the menu
    let selection = Number(prompt(message));


    if (selection == 1) {
        console.log("Let's play")
    p_lay()
    }
    else if (selection == 2) {
        console.log("You selected Options.")
    }
    else if (selection == 3) {
        console.log("No new DLC at this time.")
    }
    else if (selection == 4) {
        console.log("Everything is up to date.")
    }
    else if (selection == 5) {
        console.log("Bye!")
    }

}

function p_lay() {
    let p = +prompt("What difficulty would you like to play in? (1)easy (2)medium (3)hard")

    if (p == 1) {
        alert("You selected the easy route.")
    }
    else if (p == 2) {
            alert("Most people select medium.")
    }
    else if (p == 3) {
        alert("I see you like a challenge!")
    }


}


function startGame() {
    let user_name = +prompt ("What is your name?")
    
    alert("Welcome "+user_name+" to haunted St. Matthew HS!")

let choice = +prompt("You and your friends go out on the night of halloween. Your friends suggest to go to an abandoned st matthew's school that has said to been haunted. Curious, you and your friends decide to enter the abandoned building hoping to give you a thrilling experience. While aproaching the building, you suddendly have an uneasy feeling about entering. do you want to (1)enter the building with your friends or (2) back out and go home")

if (choice == 1) {
    alert("You suck up your emotions and decide the worst that can happen is embarassing yourself in front of your friends. The school was everything you'd expect from an abandoned building. Rusted lockers, weird odour and almost complete darkness. you start to feel at ease because you are with your friends and you guys will protect each other.")
    school()

}
 if (choice == 2) {
    alert("You tell your friends that you don't have a good feeling about this. they tell you how you're a baby and scared of everything so they go inside without you.")
    alert("You're satisfied with your decision .")
    alert("GOOD ENDING")



    }

 }

 function basement() {



 }

 function school() {
    let s = prompt("Your friends decide to wander deeper into the school and discover the library and the basement, they let you decide which room to go into. Do you want to go to (1)the library or (2) the basement")

    if (s == 1) {
        alert("Let's head to the library!")
        alert("You're filled with excitement and the fear completely leaves your body as you enter the library. The library was very quiet. There were a bunch of old and dusty books on the bookshelves. After a few minutes, you and your friends become bored because you were expecting something more exciting. You all decide to leave the library until the door slams shut. You try to open it but the door is locked. You tremble with fear as you slowly turn around and see ghost in the middle of the room")
        library()

    }
        if (s == 2) {
            alert("Let's go down to the basement!")
            alert("You and your friends head down to the basement. You realize how it was such a bad decision to tag along with your friends. Your friends discover a hidden button that obviously leads to something, They press the button because they want to receive the thrill that they were looking for. Immediately after the button was pressed, it rains snakes from the roof. One of your friends gets bitten and falls down, since you guys were in a rush to get out, you leave him behind. You guys run out of the building and all decide never to come back. they hear a blood curdling scream and run even further")
            alert("Betrayal ending")

        }
        function library() { 
            let l = prompt("You and your friends are terrified when seeing the ghost. You can (1) scream or (2) calm down and think of a solution")
        
        }
 }
