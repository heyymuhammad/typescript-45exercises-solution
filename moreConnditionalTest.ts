/* More Conditional Tests: You don’t have to limit the number of tests you create to 10. 
If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in a array
• Test whether an item is not in a array */

let string1 = "meet"
let string2 = "meat"
console.log("string1 and string2 are not equal? True.")
console.log(string1 != string2)
console.log("string1 and string2 are equal? False.")
console.log(string1 == string2)

let employee: string = "Ali"
console.log("Is 'ali' and 'Ali' are equal? True")
console.log(employee == employee.toLowerCase())
console.log("Is 'Ali' and 'ALI' are equal? False")
console.log(employee == employee.toUpperCase())

console.log("54 is grater than 78. False")
console.log(54 > 78)
console.log("120 divided by 10 is equal to 12. True")
console.log(120/10 == 12)

console.log((10*2 || 20*1) == 20)
console.log(10*2 && 20*10 == 20)

let array: string[] = ["HP", "Dell", "Lenovo", "Apple"] 
let company = "HP"
console.log(array.includes(company))

company = "Toshiba"
console.log(array.includes(company))