/***********************************************************************
Write a function `arrayConverter(array)` that will intake an
array as an argument and returns an object representing the count of each
value in the array. **Hint:** don't forget you can check if a key is present
in an object by using `obj[key] === undefined`.

Examples:

console.log(arrayConverter(["apple", "apple"])); // => {apple: 2}
console.log(arrayConverter(["mango", "pineapple"])); // => {mango: 1, pineapple: 1}
console.log(arrayConverter(["apple", "banana", "potato", "banana"])); // => {apple: 1, banana: 2, potato: 1}
***********************************************************************/

function arrayConverter(array) {
  // Your code here
  let count = 0;
  let ultimateObject = {};
  
  for(let i = 0; i < array.length; i++) {
    let word = array[i]
    let tempArray = [];
    for(let j = array.indexOf(word); j < array.length; j++) {
      if (word === array[j] && !tempArray.includes(word)) {
        count ++;
      }
    }
    ultimateObject[word] = count;
    count = 0;
  }
  return ultimateObject
}
console.log(arrayConverter(["apple", "banana", "potato", "banana"])); // => {apple: 1, banana: 2, potato: 1}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = arrayConverter;