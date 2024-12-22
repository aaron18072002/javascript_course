// Điều kiện
// if(condition) {
//      code ...;
// }

// const isRich = false;
// const myMoney = 1000000;
// if (isRich) {
//   console.log("I will buy a new house");
// } else if (myMoney > 100000000) {
//   console.log("I will buy a new phone");
// } else {
//   console.log("I need to save my money");
// }

// prompt,alert,confirm

// alert("Tommrow will be a beautiful day");

// const name = prompt("Vui lòng nhập tên của bạn: ", "");
// console.log("Tôi là --> " + name);

// const isYourMoney = confirm("Đây có phải là tiền của bạn hay không?");
// console.log(isYourMoney);

// Bài 1: Nhập vào số tuổi và kiểm tra nếu tuổi >= 18 thì được coi phim rạp
// ngược lại thì ko cho xem
// const input = prompt("Nhập vào tuổi của bạn: ", ""); // return String
// const age = Number(input);
// let message = "Bạn chưa đủ tuổi để vào rạp";
// if (age >= 18) {
//   message = "Bạn được phép vào rạp";
// }
// alert(message);

// Bài 2: Cho 2 số a và b, tìm ra số lớn hơn
const a = 5;
const b = 10;
let max = a;
if (b > a) {
  max = b;
}
alert(max + " là số lớn hơn");
