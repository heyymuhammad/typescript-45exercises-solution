/* Unchanged Magicians: Start with your work from Exercise 40. 
Call the function make_great() with a copy of the array of magicians’ names. 
Because the original array will be unchanged, return the new array and store it in a separate array. 
Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name. */

let magicians: string[] = ["Breda", "Schomy", "Vetson"]

function make_great(magician: string[]) {
    for (let index=0; index< magicians.length; index++) {
        magician[index] = "Great " + magician[index]
    }
}
let great_magicians: string[] = magicians.slice()
make_great(great_magicians)

console.log(magicians)
console.log(great_magicians)