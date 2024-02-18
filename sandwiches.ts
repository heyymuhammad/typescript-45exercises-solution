/* Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. 
The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. 
Call the function three times, using a different number of arguments each time. */

function describe_sandwich(sandwich_items: string[]) {
    let sandwich_description = ""
    for (let index=0; index< sandwich_items.length; index++) {
        sandwich_description += ` ${sandwich_items[index]},`
    }
    console.log(`You have order a sandwich with${sandwich_description} ...`)
}
let sandwich_items: string[] = ["Salad", "Egg", "Masalah", "Chicken", "Yogurt", "Extra Sauce"]
describe_sandwich(sandwich_items)