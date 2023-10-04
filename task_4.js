'use strict';

class ArrayOperations {
  constructor(array1, array2, array3, array4) {
    this.array1 = array1;
    this.array2 = array2;
    this.array3 = array3;
    this.array4 = array4;
  }

  // Зібрати в п'ятий масив елементи всіх масивів. Отриманий масив відсортувати за спаданням.
  funcOne() {
    const combinedArray = [...this.array1, ...this.array2, ...this.array3, ...this.array4];
    return combinedArray.sort((a, b) => b - a);
  }

  // Зібрати в п'ятий масив унікальні елементи для кожного з чотирьох масивів.
  funcTwo() {
    const combinedArray = [...this.array1, ...this.array2, ...this.array3, ...this.array4];
    return [...new Set(combinedArray)];
  }

  // Зібрати в п'ятий масив спільні елементи для всіх чотирьох масивів.
  funcThree() {
    return this.array1.filter(value => this.array2.includes(value) && this.array3.includes(value) && this.array4.includes(value));
  }

  // Функція, чи число є простим
  isSimple(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    let i = 5;
    while (i * i <= num) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
      i += 6;
    }
    return true;
  }

  // Зібрати в п'ятий масив усі прості числа з чотирьох масивів. Прибрати з масиву результату всі неунікальні значення.
  funcFour() {
    const combinedArray = [...this.array1, ...this.array2, ...this.array3, ...this.array4];
    const primesArray = combinedArray.filter(num => this.isSimple(num));
    return [...new Set(primesArray)];
  }
}

const array1 = [11, 2, 9, 10, 5];
const array2 = [3, 13, 8, 8, 11];
const array3 = [1, 11, 7, 4, 6];
const array4 = [12, 3, 10, 2, 11];

const operations = new ArrayOperations(array1, array2, array3, array4);

const result1 = operations.funcOne();
const result2 = operations.funcTwo();
const result3 = operations.funcThree();
const result4 = operations.funcFour();

console.log("Результат функції 1:\n" + result1);
console.log("Результат функції 2:\n" + result2);
console.log("Результат функції 3:\n" + result3);
console.log("Результат функції 4:\n" + result4);
