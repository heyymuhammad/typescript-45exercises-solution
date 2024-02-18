// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let personName= "aLi hassAn";

console.log(`${personName.toLowerCase()}`);
console.log(`${personName.toUpperCase()}`);

let nameArray= personName.split(" ");
let titledName = ""
for (let i = 0; i < nameArray.length; i++) {
    for (let letter = 0; letter < nameArray[i].length; letter++) {
        if (letter != 0) {
            titledName += nameArray[i][letter].toLowerCase();
        }
        else {
            titledName += nameArray[i][letter].toUpperCase()
        }
    }
    titledName += " "
}
console.log(titledName)