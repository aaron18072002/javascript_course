// object literal
const objectLiteral = {};
// object constructor
const objectConstructor = new Object();

const student = {
  name: "evondev",
  age: 27,
  male: true,
  hi: function () {
    console.log("hello evondev");
  },
};

// properties
// method
// GETTER
// 2 cách truy xuất giá trị của object
// 2.1 Dot notation --> object.key
console.log(student.name);
// 2.2 Bracket notation --> object[key]
console.log(student["age"]);

// SETTER
student.age = 20;
student.male = "male";
student.isDeveloper = true;
student.hello = () => {
  console.log("hello");
};
console.log(student);

delete student["last-name"];

// for in
for (let key in student) {
  if (key == "name") {
    console.log("hello " + student[key]);
  }
  console.log(`key: ${key}, value: ${student[key]}`);
}

// Object.keys(obj) --> trả về 1 mảng chứa all keys của obj

const keys = Object.keys(student);
console.log(keys);
console.log(keys.length);

// Object.values(obj) --> trả về 1 mảng chứa all values của obj

const values = Object.values(student);
console.log(values);
console.log(values.length);

// Object.entries(obj) --> trả về 1 mảng chứa nhiều mảng key-value của obj

const entries = Object.entries(student);
console.log(entries);

// Object.assign(...objs) --> gồm nhiều objs thành 1 object

const a = {
  firtname: "tuan",
};

const b = {
  lastname: "tran",
};

const c = Object.assign(a, b);
console.log(c);
const d = { ...a, ...c };
console.log(d);

// Object.freeze(object) --> ngăn chặn chỉnh sửa key và value của object

const car = {
  branch: "BMW",
};
const newCar = Object.freeze(car);
newCar.branch = "Audi";
console.log(newCar);

// Object.seal(object) --> cho phép chỉnh sửa key value hiện tại nhưng ko cho thêm key value mới

const user = {
  username: "evondev",
  school: {
    name: "Cao Thang",
  },
};
Object.seal(user);
user.username = "tran anh tuan";
user.lastname = "john";
console.log(user);

// CÁC CÁCH CLONE 1 OBJECT
const newUser = user; // ko nên clone Object = cách ni vì nếu user thay đổi thì newUser thay đổi
const newUser2 = { ...user }; // nên dùng cách ni
newUser2.username = "trananhtuan";
console.log(user);
console.log(newUser2);

const newUser3 = Object.assign({}, newUser); // nên dùng cách ni
newUser3.school.name = "Designer";
console.log(user);
console.log(newUser3); // nhưng nếu field là 1 Object thì là câu chuyện khác

// JSON.stringify(obj): Chuyển đổi đối tượng thành chuỗi JSON.
// JSON.parse(jsonString): Chuyển đổi chuỗi JSON trở lại thành đối tượng mới.
// Cả 2 đều không làm thay đổi đối tượng gốc mà tạo ra một bản sao.
let newUser4 = JSON.stringify(user); // biến 1 object thành 1 json string
newUser4 = JSON.parse(newUser4); // biến 1 json string thành 1 object
newUser4.school.name = "Programmer";
console.log(user);
console.log(newUser4);

// this keyword
const student2 = {
  username: "evondev",
  age: 27,
  male: true,
  "last-name": "tuan",
  hi: function () {
    console.log(`my name is ${this.username} and i'm ${this.age} years old`);
  },
  school: {
    name: "Cao Thang",
  },
  // fullname: {
  //   name: "Tran Anh Tuan",
  // },
};
student2.hi();

// optional chainning

console.log(student2.fullname); // undefined
// console.log(student2.fullname.name); // lỗi Cannot read properties of undefined (reading 'name')
if (student2.fullname) {
  if (student2.fullname.name) {
    console.log(student2.fullname.name);
  }
}

console.log(student2.fullname?.name); // A.B?.C có C thì trả về A.B.C ko có thì trả undefined

// destructuring object

const { username, age, male, ...rest } = student2;
console.log(username, age, male);
console.log(rest);

// normal function
function whatYourInfo(name, age, school) {
  console.log(name, age, school);
}

// function with object parameter
function whatYourInfo2(obj) {
  console.log(obj.name, obj.age, obj.school);
}

const newObj = {
  age: 27,
  school: "Cao Thang",
  name: "Evondev",
};
whatYourInfo2(newObj);

// function with object destructuring parameter
function whatYourInfo3({ name, age, school }) {
  console.log(name, age, school);
}
whatYourInfo3(newObj);
