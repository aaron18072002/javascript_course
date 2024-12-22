// function - hàm

// khai báo hàm
// syntax: function functionName([parameters]) {
//              code...;
//         }
// không có return thì hàm trả undefined

// viết hàm tính tổng a và b
function sum(a = 1, b = 2) {
  return a + b;
}

const sum1 = sum();
console.log("Tổng 1 và 2 --> " + sum1);

const sum2 = sum(3, 4);
console.log("Tổng 3 và 4 --> " + sum2);

// add()
function add(a = 0, b = 0) {
  return a + b;
}

const addIns = add; // gán function vào biến addIns nhưng chưa gọi
add(100, 200);

// Tính trung bình của a và b --> a+b/2
// fn: function
function average(a, b, fn) {
  const total = fn(a, b);
  return total / 2;
}

let result = average(200, 300, addIns);
console.log("Trung bình cộng của 200 và 300 --> " + result);

// Anonymous function (function expression)
const logName = function () {
  console.log("your name");
};
logName();

// IIFE -> immediately invoked function execution
(function () {
  console.log("This is IIFE");
})();

// Function decleration
