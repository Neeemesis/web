const countSandwiches = (bread, cheese) => {
  let countSandwiches = Math.trunc(bread/2);

  if (bread<2 || cheese<1) {
    return 'The sandwich requires at least two slices of bread and one slice of cheese';
  } else if (countSandwiches <= cheese) {
    return countSandwiches;
  } else {
    while (countSandwiches > cheese) {
      countSandwiches -= 1;
      if (countSandwiches == cheese) {
        return countSandwiches;
      }
    }
  }
};

const generateMultiplicationTable = (number) => {
  let row = ' ';
  let output = '';
  for (var i = 1; i <= number; i++) {
    for (var j = 1; j <= number; j++) {
      row += '  ' + i * j;
    }
    output += row + '\n';
    row = ' ';
  }
  return output;
}

const showQuote = (arrWord, symbol) => {
  symbol = String(symbol);

  let maxLen = 0;
  let outString = '';

  arrWord.forEach(word => {
    if(word.length >= maxLen) {
      maxLen = word.length;
    }
  });

  maxLen += 4;
  outString += symbol.repeat(maxLen) + '\n';
  arrWord.forEach(word => {
    outString += symbol + ' ' + word + ' '.repeat(maxLen-word.length-3) + symbol + '\n';
  });
  outString += symbol.repeat(maxLen) + '\n';
  return outString;
}

const combineArrays = (arrFirst, arrSecond) => {
  let outArr = [];
  let lengthArrFirst = arrFirst.length;
  let lengthArrSecond = arrSecond.length;

  if (lengthArrFirst >= lengthArrSecond) {
    for (let i = 0; i < lengthArrFirst; i++) {
      outArr.push(arrFirst[i]);
      if (i < lengthArrSecond) {
        outArr.push(arrSecond[i]);
      }
    }
    return outArr;

  } else {
    for (let i = 0; i < lengthArrSecond; i++) {
      if (i < lengthArrFirst) {
        outArr.push(arrFirst[i]);
      }
      outArr.push(arrSecond[i]);
    }
    return outArr;

  }
} 

const countUniqueValues = (arr) => {
  let UniqueArr = {};
  for (let i = 0; i < arr.length; i++) {
    let a = arr[i];
    if (UniqueArr[a] != undefined) {
      ++UniqueArr[a];
    } else {
      UniqueArr[a] = 1;
    }
  }
  return UniqueArr;
}

export {countSandwiches, generateMultiplicationTable, showQuote, combineArrays, countUniqueValues};
