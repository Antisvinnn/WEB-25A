// // 1) Вывести все чётные элементы массива.
// let task1 = function (arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//       console.log(arr[i]);
//     }
//   }
// };
// task1([1, 2, 3, 4, 5, 6]);
// // 2) Вывести все чётные числа от 0 до 74.
// let task2 = function () {
//   for (let i = 0; i < 74; i++) {
//     i % 2 == 0 && console.log(i);
//   }
// };
// task2();
// // 3) Посчитать количество слов в строке.

// // 4) Посчитать количество букв в строке
// let str = "Какой-то текст";
// let counter = 0;
// str.split(``).forEach((el) => {
//   if (!(el === " " || el === "-")) {
//     counter++;
//   }
// });
// console.log(counter);
// // 5) Написать свой map() .

// let task = (count) => {
//   for (let i = 0; i < count; i++) {
//     console.log("*".repeat(i));
//   }
// };
// task(20);

// let arr = [1, 2, 3, 4, 5, 6, 7];
// let result = arr.reduce((sum, current) => {
//   console.log(this);
//   return sum + current;
// }, 0);

// console.log(result);

// Задача 1. Нужно найти самое длинное слово в строке.
let findWord = function (str) {
  let arrStr = str.split(" ");
  let wordLength = 0;
  let longestWord;

  for (let i = 0; i < arrStr.length; i++) {
    wordLength = arrStr[1].length;

    if (arrStr[i].length > wordLength) {
      longestWord = arrStr[i];

      return longestWord;
    }
  }
};

console.log(findWord("JavaScript - очень сложно"));

// Задача 3. Написать прогу, которая высчитает факториал любого числа, которое я передам.

function factorial(n) {
  result = n;
  for (let i = n - 1; i > 1; --i) {
    result *= i;
  }
  return result;
}
console.log(factorial(120));
