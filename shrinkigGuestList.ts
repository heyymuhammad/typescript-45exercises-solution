/* Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
• Print a message to each of the two people still on your list, letting them know they’re still invited.
• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program. */

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

for (let index = 0; index < guests.length; index++) {
    console.log(`Hey ${guests[index]}, I would like you to join me on dinner today at 10:00 PM sharp.`)
}
console.log("........")

for (let index = guests.length; index >= 0; index--) {
    if (guests.length != 2) {
        guests.pop()
    }
}

for (let index = guests.length; index >= 0; index--) {
    console.log(`Hey ${guests[index]}, I want to tell you that you are still invited`)
}

for (let index = guests.length; index >= 0; index--) {
    guests.pop()
}

console.log(guests)
