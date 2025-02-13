console.log("========= ARRAY SLICE ==========");
console.log(
  "phương thức slice() trong JavaScript không thay đổi (modify) mảng gốc."
);
console.log("dùng để tạo 1 mảng mới dựa trên mảng gốc");

// Tạo ra 1 mảng copy của mảng ban đầu
const animals = ["tiger", "lion", "hourse", "elephant"];

// slice(): tạo ra mảng mới y hệt mảng gốc
const animals2 = animals.slice();
console.log(animals2);
// slice(start:included) start --> tạo ra mảng với phần tử
//        chạy từ vị trí index trong mảng tới vị trí cuối
const animals3 = animals.slice(1);
console.log(animals3); // ['lion', 'hourse', 'elephant']
// slice(start:included, end:excluded) --> tạo ra mảng chạy
//        từ vị trí start tới end - 1
const animals4 = animals.slice(1, 3);
console.log(animals4);
const animals5 = animals.slice(-1);
console.log(animals5);

console.log("========= ARRAY SPLICE ==========");
console.log(
  "phương thức splice() trong JavaScript có thay đổi (modify) mảng gốc."
);
console.log(
  "dùng để xóa phần tử trong mảng hoặc thay thế phần tử trong mảng gốc"
);

// Nó sẽ xóa phần tử trong mảng hoặc thay thế phần tử trong mảng
const pets = ["dog", "cat", "bird", "dragon"];

// splice(start)
// const pets2 = pets.splice(0);
console.log(pets);

// splice(start, deleteCount): deleteCount là số lượng phần tử
//        muốn xóa --> bắt đầu từ vị trí start
// pets.splice(0, pets.length);
// console.log(pets);

// splice(start, deleteCount, item1, item2, itemN): deleteCount là số lượng phần tử
//        muốn thay thế --> bắt đầu từ vị trí start
pets.splice(0, 2, "dinasour", "pig");
console.log(pets);

console.log("========= ARRAY SORT ==========");
console.log(
  "phương thức sort() trong JavaScript có thay đổi (modify) mảng gốc."
);

// sắp xếp mảng các phần tử trong mảng theo chuẩn unicode-16
const random = [1, 9999, 1000000000, 6, 9];
console.log(random.sort());
// sort(function(a,b))
// function(callback)
const random2 = random.sort(function (a, b) {
  if (a > b) return 1; // sắp xếp theo tăng dần
  else if (a < b) return -1; // sắp xếp theo giảm dần
});
console.log(random2);
// ternary operator: condition ? something : something
const random3 = random.sort((a, b) => (a > b ? 1 : -1));
console.log(random3);

console.log("========= ARRAY FIND ==========");
console.log(
  "phương thức find() trong JavaScript không thay đổi (modify) mảng gốc."
);
console.log(
  "trả về phần tử đầu tiên trong mảng thỏa điều kiện, ko có thì trả về undefined"
);
const numbers = [1, 9999, 1000000000, 5, 9];
// Tìm phần tử đầu tiên trong mảng lớn hơn 10
const findYourNumber = numbers.find((element, index) => {
  return element > Number.MAX_VALUE;
});
console.log(findYourNumber);

console.log("========= ARRAY FINDINDEX ==========");
console.log(
  "phương thức findIndex() trong JavaScript không thay đổi (modify) mảng gốc."
);
console.log(
  "trả về phần tử đầu tiên trong mảng thỏa điều kiện, ko có thì trả về -1"
);

const findYourIndex = numbers.findIndex((element, index) => element < 0);
console.log(findYourIndex);

// SORT bổ sung
const random4 = random.sort((a, b) => (a > b ? 1 : -1));
console.log(random4);

console.log("========= ARRAY MAP ==========");
console.log("map() không thay đổi mảng gốc.");
console.log(
  "phương thức map() trong JavaScript duyệt qua từng phần tử trong mảng và trả về mảng mới với cùng số phần tử với mảng gốc"
);

let listNumbers = [1, 2, 3, 4, 5];
// trả về mảng mới với các giá trị nhân 2
const listNumbersDouble = listNumbers.map((value, index) => {
  return value * 2;
});
console.log(listNumbersDouble);

console.log("========= ARRAY FOREACH ==========");
console.log("forEach() không thay đổi mảng gốc.");
console.log(
  "phương thức forEach() trong JavaScript duyệt qua từng phần tử trong mảng và trả về undefined"
);

const listNumbersTriple = listNumbers.forEach((value, index, array) => {
  return value * 3;
});
console.log(listNumbersTriple);

console.log("========= ARRAY FILTER ==========");
console.log(
  "phương thức filter() trong JavaScript không thay đổi (modify) mảng gốc."
);
console.log(
  "phương thức filter() trong JavaScript duyệt qua từng phần tử trong mảng và trả về mảng mới với những phần tử thỏa điều kiện"
);

// filter(callback(value,index,array))
listNumbers = [1, 2, 3, 4, 5];
const greaterThanThree = listNumbers.filter((item, index, array) => {
  return item > 3;
});
console.log(greaterThanThree);

console.log("========= ARRAY SOME ==========");
console.log(
  "phương thức some() trong JavaScript không thay đổi (modify) mảng gốc."
);
console.log(
  "trả về true nếu có ít nhất 1 phần tử trong mảng thỏa điều kiện, ngược lại trả về false"
);
let someNumbers = listNumbers.some((value) => value > 300);
console.log(someNumbers);

console.log("========= ARRAY EVERY ==========");
console.log(
  "phương thức every() trong JavaScript không thay đổi (modify) mảng gốc."
);
console.log(
  "trả về true nếu toàn bộ phần tử trong mảng thỏa điều kiện, ngược lại trả về false"
);

const everyNumbers = listNumbers.every((value) => value > 0);
console.log(everyNumbers);

console.log("========= ARRAY REDUCE ==========");
console.log(
  "phương thức reduce() trong JavaScript không thay đổi (modify) mảng gốc."
);
console.log("trả về 1 kết quả duy nhất dựa trên mảng gốc");

// reduce((a,b) => {},initialValue);
const totalNumber = listNumbers.reduce((a, b) => {
  console.log(a, b);
  // Lần 1: gán a = initialValue, b = array[0];
  // Lần n: gán a = b, b = a + b
  return a + b;
}, 0);
console.log(totalNumber);
