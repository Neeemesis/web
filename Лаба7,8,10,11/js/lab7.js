import {countSandwiches, generateMultiplicationTable, showQuote, combineArrays, countUniqueValues} from './function.js';

let bread = 5;
let cheese = 6;
console.log(`countSandwiches({bread: ${bread}, cheese: ${cheese}}) -> ${countSandwiches(bread, cheese)}`);

let number = 5;
console.log(`generateMultiplicationTable(5)\n\n>\n\n${generateMultiplicationTable(number)}`);

let arr = ['Hello', 'World', 'In', 'JS'];
let symbol = '*';
console.log(`showQuote([${arr}], '${symbol}')\n\n>\n${showQuote(arr, symbol)}`)

let arrFirst = [1, 2, 3];
let arrSecond = ['a', 'b', 'c', 'd'];
console.log(`combineArrays([${arrFirst}], [${arrSecond}]) -> [${combineArrays(arrFirst, arrSecond)}]`)

let noUniqueArr = [1,2,1,2,3,4,2,5];
console.log(`countUniqueValues([${noUniqueArr}]) ->`);
console.log(countUniqueValues(noUniqueArr));