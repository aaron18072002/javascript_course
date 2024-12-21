// số nguyên: 12,34,56,...
// số thập phân: 12.12, 34.34, ...

console.log("5 + 7 = " + 5 + 7);
console.log("type of 10 --> " + typeof 10);

const num1 = "5";
const num2 = "4.8";
console.log("5 + 4.8 --> " + parseInt(num1) + parseFloat(num2));

const num3 = -10;
// Math.abs
console.log("Absolute of -10 --> " + Math.abs(num3));
// Math.floor --> làm tròn xuống
console.log("Tròn xuống 4.8 --> " + Math.floor(4.8));
// Math.ceil --> làm tròn lên
console.log("Tròn lên 4.3 --> " + Math.ceil(4.3));
// Math.round --> làm tròn theo số thập phân
console.log("Tròn 4.6 --> " + Math.round(4.6));
// toFixed --> format lại số
console.log("toFixed(1/3) --> " + (1 / 3).toFixed(3));

// Math.random --> random từ 0 -> 1
console.log("số random --> " + Math.ceil(Math.random() * 10));

// Math.max Math.min
console.log("Math.max --> " + Math.max(1, 2, 3, 5, 6, 7));
console.log("Math.min --> " + Math.min(1, 2, 3, 5, 6, 7));

// Math.pow(target,mũ)
console.log("Math.pow --> " + Math.pow(3, 2)); // 3: target, 2: số mũ
