/* Great Magicians: Start with a copy of your program from Exercise 39. 
Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. 
Call show_magicians() to see that the list has actually been modified. */

let magicians: string[] = ["Breda", "Schomy", "Vetson"]

function make_great(magician: string[]) {
    for (let index=0; index< magicians.length; index++) {
        magician[index] = "Great " + magician[index]
    }
}

function show_magicians(magicians: string[]) {
    for (let index=0; index< magicians.length; index++) {
        console.log(magicians[index])
    }
}

make_great(magicians)
show_magicians(magicians)