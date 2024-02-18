/* Magicians: Make a array of magician’s names. 
Pass the array to a function called show_magicians(), which prints the name of each magician in the array. */

let magicians: string[] = ["Breda", "Schomy", "Vetson"]

function show_magicians(magicians: string[]) {
    for (let index=0; index< magicians.length; index++) {
        console.log(magicians[index])
    }
}

show_magicians(magicians)