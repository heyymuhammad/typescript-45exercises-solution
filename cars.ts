/* Cars: Write a function that stores information about a car in a Object. 
The function should always receive a manufacturer and a model name. 
It should then accept an arbitrary number of keyword arguments. 
Call the function with the required information and two other name-value pairs, such as a color or an optional feature. 
Print the Object that’s returned to make sure all the information was stored correctly. */

function car_data(manufacturer: string, model: string, ...optional_features: { [key: string]: any }[]): { manufacturer: string, model: string, optional_features: { [key: string]: any } }  {
    let car_info = {manufacturer, model, optional_features: {}}
    for (let index = 0; index < optional_features.length; index++) {
        const feature = optional_features[index];
        const [key, value] = Object.entries(feature)[0];
        car_info.optional_features[key] = value;
    }
    return car_info
}
let car = car_data("Honda", "Civic", { color: "black" }, { year: 2024 });

console.log(car)