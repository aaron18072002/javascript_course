// const fruit = "apple";
// if (fruit === "apple") {
//   console.log("Bạn thích ăn táo");
// } else if (fruit === "lemon") {
//   console.log("Bạn thích ăn chanh");
// }

// const fruit = "lemon";

// switch (fruit) {
//   case "apple":
//     console.log("Bạn thích ăn táo");
//     break;
//   case "lemon":
//   case "chanh":
//     console.log("Bạn thích ăn chanh");
//     break;
//   default:
//     console.log("Bạn thích ăn cam");
//     break;
// }

const age = prompt("Nhập tuổi của bạn: ", "");
let message;
message =
  age >= 18
    ? "You are adult"
    : age >= 16
    ? "You are teenager"
    : "You just a kid";
console.log(message);
