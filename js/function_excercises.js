// 1. So sánh 2 số a,b tìm ra số lớn hơn
function compare(a = 0, b = 0) {
  //   if (a >= b) {
  //     return a;
  //   }
  //   return b;
  if (typeof a !== "number" || typeof b !== "number") {
    return 0;
  }
  return Math.max(a, b);
}
console.log("So sánh 5 và 3 --> " + compare(5, 3));

// 2. In hoa chữ cái đầu
function upperFirstLetter(string = "") {
  let str = String(string);
  if (str.length === 0) {
    return "";
  }
  const firstUpperLetter = str.toLowerCase().charAt(0).toUpperCase();
  const otherWords = str.toLowerCase().slice(1, str.length);
  return firstUpperLetter + otherWords;
}
console.log("Câu2: nam --> " + upperFirstLetter("nam"));
console.log("Câu2: TUAN --> " + upperFirstLetter("TUAN"));

// 3. Viết hàm có sử dụng callback (function là tham số của 1 function khác)
// và in ra kết quả của hàm compare trên
function useCallback(a, b, callback) {
  let max = compare(a, b);
  callback(max);
}
function print(number) {
  console.log("Số lớn nhất là " + number);
}
console.log(useCallback(1000, 2000, print));

// ARROW FUNCTION = ANONYMOUS FUNCTION
// ECMAScript

const square = function (x) {
  return Math.pow(x, 2);
};

// arrow function
const squareV2 = (x) => {
  return x * x;
};

const squareV3 = (x) => x * x;
