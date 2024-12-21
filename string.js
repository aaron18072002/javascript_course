const name = "Aaron";
const job = "Web developer";

const str = `My name is ${name} and I am a ${job}`;
console.log(str);
const strLength = str.length;
console.log("str length --> " + strLength);

const title = "Fpt Dev0 Software Developer"; // immutable
console.log(title.split(" "));
console.log(title.split(""));
console.log(title.toLocaleLowerCase());
console.log(title.toUpperCase());
console.log(title.startsWith("Fpt"));
console.log(title.endsWith("developer"));
console.log(title.includes("fpt"));
console.log(title.indexOf("D"));
console.log(title.lastIndexOf("D"));
console.log(title.replace("Dev0", "Dev1"));
console.log(title.repeat(5));
console.log(title.slice(0, 4)); // [0,4) --> 0,1,2,3;
console.log(title.slice(0)); // [0,str.length)
console.log(title.slice(-1)); // số âm thì đếm từ cuối str để lấy --> r
console.log(title.trim()); // bỏ space
console.log(title.charAt(title.length - 1));

// subStr(index,length) --> lấy ra 1 phần của chuỗi
// subString(includeIndex, exclusiveIndex) --> lấy ra các kí tự của chuỗi
const title2 = "Java Web Developer";
console.log(title2.substr(1, 6)); // 1: index from, 6: số ký tự muốn lấy
console.log(title2.substring(1, 6)); // [1,6) --> 1,2,3,4,5

const title3 = "  I am a Dev0 Java Web Developer of FPT Software ";
// loại bỏ space 2 bên, đưa về in hoa hết, thay Dev0 thành Dev1, repeat 2 lần
console.log("result of title3: ");
console.log(title3.trim().toUpperCase().replace("DEV0", "DEV1").repeat(2));
