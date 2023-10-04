'use strict'

let expr = "2+3-7";
try {
  const result = eval(expr);
  console.log(result);
} catch (error) {
  console.error("Помилка обчислення виразу:", error);
}