"use sctrict";
//Строки
const str = "teSt";

//console.log(str[2] = 'd');

//console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str);

const fruit = "Some fruit";

console.log(fruit.indexOf("q"));

const logg = "Hello World";

console.log(logg.slice(6, 11)); // --> (с какого по какой символ (не включая) вырезать + отрицательные значения)

console.log(logg.substring(6, 11)); // --> (с какого по какой символ (не включая) вырезать, без отрицательных ( -2 = 0)

console.log(logg.substr(6, 5)); // --> (сколько символов вырезать)
//Числа
const num = 12.2;
console.log(Math.round(num));

const test = "12.2px";
console.log(parseInt(test));
console.log(parseFloat(test));