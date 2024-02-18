/* More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list. */

let guests = ["Ami", "Abu", "Bhai"]

for (let index = 0; index < guests.length; index++) {
    console.log(`Hey ${guests[index]}, I would like you to join me on dinner today at 10:00 PM sharp.`)
}

for (let index = 0; index < guests.length; index++) {
    console.log(`Hey ${guests[index]}, I would like you to join me on dinner today at 10:00 PM sharp.`)
}

console.log(`Guys! I am so sorry ${guests[2]} can't make it.`)

guests[2] = "Bhabi"

for (let index = 0; index < guests.length; index++) {
    console.log(`Hey ${guests[index]}, I would like you to join me on dinner today at 10:00 PM sharp.`)
}

guests.unshift("Chacha")
guests.splice(Math.floor(guests.length / 2), 0, "Behna")
guests.push("Chachi")

for (let index = 0; index < guests.length; index++) {
    console.log(`Hey ${guests[index]}, I would like you to join me on dinner today at 10:00 PM sharp.`)
}
