// Mảng

const a = "a";
const b = "b";
const c = "c";
const d = "d";

// 2 cách tạo mảng

// array literal
// const students1 = [];
// array constructor
// const students2 = new Array();
// ví dụ 1 mảng
// Mảng phức tạp [0,false,undefined,null,"evondev",["evondev",false,1200, []]]
// Mảng đơn giản [0,false,undefined,null,"evondev"]
// []: empty array -> mảng rỗng
let students1 = ["evondev", "tuan", "nam", "thanh", "trung"];
// index: vị trí của phần tử(giá trị) trong mảng và bắt đầu từ 0
// length: độ dài của mảng, nó đếm từ 1
// truy xuất trong mảng -> students1[index]
console.log(students1[0]);
// phần tử cuối cùng trong mảng ở vị trí length - 1
console.log(students1[students1.length - 1]);
// students1.length = 0;
console.log(students1);
// []: mảng rỗng

// phương thức hay dùng của mảng trong js
console.log("arr.length --> " + students1.length);
console.log("reversed arr --> " + students1.reverse());

// join -> nối các phần tử trong mảng với 1 chuỗi --> trả về 1 array mới
console.log("join --> " + students1.join("123"));

students1 = ["evondev", "tuan", "nam", "thanh", "trung", "tuan"];
// includes --> kiểm tra mảng đó có chứa phần tử nào đó ko
console.log("test include evondev --> " + students1.includes("evondev"));
console.log("test include a1 --> " + students1.includes("a1"));

// indexOf --> trả về vị trí của phần tử đầu tiên khớp với String truyền vào
console.log(students1.indexOf("tuan"));
// indexOf --> trả về vị trí của phần tử cuối cùng khớp với String truyền vào
console.log(students1.lastIndexOf("tuan"));

// push --> thêm phần tử vào cuối mảng --> modify mảng gốc
students1.push("javascript");
console.log(students1);

// unshift --> thêm phần tử vào đầu mảng --> modify mảng gốc
students1.unshift("frontend");
console.log(students1);

// pop --> xóa phần tử cuối cùng trong mảng --> modify mảng gốc
students1.pop();
console.log(students1);

// shift --> xóa phần tử đầu tiên trong mảng --> modify mảng gốc
students1.shift();
console.log(students1);
