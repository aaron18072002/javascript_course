// 1. Đảo ngược 1 chuỗi
function reverseString(str) {
  if (!str) {
    return null;
  }
  const reversedStr = str.split(" ").reverse().join(" "); // str to array
  return reversedStr;
}
console.log(reverseString("My name is Evondev"));
