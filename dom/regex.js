// regular expression: biểu thức chính quy
// 1. 2 cách khai báo với Regex

const re1 = /hello/;
const re2 = new RegExp("hello");

// hello word
// regex.test(value); --> true or false
console.log(re1.test("hello"));

// 2. Anchor ^ $
// ^: string bắt đầu với từ nào đó
// $: string kết thúc với từ nào đó
const re3 = /hi/;
/hi/.test("hi"); // true
/hi$/.test("welcome to hi"); // true
/hi$/.test("welcome to hello"); // false
/hi$/.test("welcome to hi"); // true
/^hi/.test("hi to hello"); // true
/^hi/.test("hello to hello"); // false

// 3. Ranges []
// [a-z]: các ký tự từ a đến z
// [A-Z]: các ký tự từ A đến Z
// [0-9]: các số từ 0-9
// [a-z0-9A-Z]: các số từ 0-9 hoặc từ a-z hoặc từ A-Z
/[a-z]/.test("a"); // true;
/[A-Z]/.test("a"); // false;
/[A-Z]/.test("Z"); // true
/[0-9]/.test("1000"); // true
/[0-9]/.test("fdsdfsdf1000"); // true
/[0-9]/.test("abc"); // true
/[a-zA-Z0-9]/.test("123ABCabc"); // true
/[^a-z]/.test("a"); // true;

// 4. Meta Characters
// \d: khớp với số nó sẽ tương đương với [0-9]
/\d/.test("1234"); // true
// \D: ngược lại với \d --> tương đương với [^0-9]
/\D/.test("1234"); // false
// \w: khớp với các kí tự và dấu gạch dưới và số,
//      --> tương đương với [a-zA-Z0-9_]
/\w/.test("_"); // true
// \W: ngược lại với \w, --> tương đương với [^a-zA-Z0-9_]
/\W/.test("_"); // false
// \s: khớp với các ký tự khoảng trắng: space, tab, newline
/\s/.test(" "); // true
// \S: ngược lại với \s --> các kí tự ko phải khoảng trắng
/\S/.test(" "); // false
// \n: khớp với newLine(xuống hàng)
// \t: khớp với tab character
// .: khớp với tất cả ngoại trừ newLine(\n);
// [^]: khớp với tất cả mọi thứ bao gồm newLine(\n);

// 5.Quantifiers: {n} {n,m} + ? *
// string.match(regex) --> VD: abc.match("/\w/");
const str1 = "welcome to 2021";
console.log(str1.match(/\d/));
