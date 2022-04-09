// 1) Вывести все чётные элементы массива.
let task1 = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      console.log(arr[i]);
    }
  }
};
task1([1, 2, 3, 4, 5, 6]);
// 2) Вывести все чётные числа от 0 до 74.
let task2 = function () {
  for (let i = 0; i < 74; i++) {
    i % 2 == 0 && console.log(i);
  }
};
task2();
// 3) Посчитать количество слов в строке.

// 4) Посчитать количество букв в строке
let str = "Какой-то текст";
let counter = 0;
str.split(``).forEach((el) => {
  if (!(el === " " || el === "-")) {
    counter++;
  }
});
console.log(counter);
// 5) Написать свой map() .
