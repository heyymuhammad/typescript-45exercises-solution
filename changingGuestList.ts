/* Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
• Print a second set of invitation messages, one for each person who is still in your list. */

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
