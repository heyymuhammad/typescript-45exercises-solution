/* Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. 
The text of each message should be the same, but each message should be personalized with the person’s name. */

let friends_names = ["Shafi", "Azlan", "Hassan", "Haseeb"]

for (let index = 0; index < friends_names.length; index++) {
    console.log(`Hey ${friends_names[index]}, Good Morning!`)
}