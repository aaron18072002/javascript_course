// 1. DOM là gì ?
// Document Object Model
// DOM attribute
// DOM node == html element

// 2. Selecting nodes

// 2.1 document.querySelector("selector"); --> trả về 1 node nếu tồn tại, ngược lại trả về null
// selectors: .container, header, p, body, #heading
const singleNode = document.querySelector("h1");
const singleNode2 = document.querySelector(".container");
const singleNode3 = document.querySelector("#spinner");
const singleNode4 = document.querySelector(".container .heading");
console.log(singleNode);
console.log(singleNode2);
console.log(singleNode3);
console.log(singleNode4);

// 2.2 document.querySelectorAll("selector") --> trả về 1 NodeList chứa danh sách các nodes,
//                          nếu ko có thì trả về empty NodeList
// nó có thể loop và sử dụng vòng for được
// nó giống array là có thể loop và sử dụng được forEach nhưng ko sử dụng được các
//    phương thức như push, pop, ...
const multiNodes = document.querySelectorAll(".item");
console.log(multiNodes);
multiNodes.forEach((node) => {
  console.log(node);
});

// 2.3 document.getElementByClassName("className") --> trả về 1 HTMLCollection chứa danh sách các nodes,
//                          nếu ko có thì trả về empty
const classNodes = document.getElementsByClassName("item");
console.log(classNodes);

// 2.4 document.getElementByTagName("tagName") --> trả về 1 HTMLCollection chứa danh sách các nodes,
//                          nếu ko có thì trả về empty
const tagNodes = document.getElementsByTagName("h1");
console.log(tagNodes);

// 2.5 document.getElementById("idName") --> trả về 1 Node, ko có thì trả về null
const idNode = document.getElementById("spinners");
console.log(idNode);

const idNode2 = document.querySelector("#spinner");
console.log(idNode2);

// hay dùng nhất document.querySelector(tag,id,class)
// và document.querySelectorAll(tag,id,class)
