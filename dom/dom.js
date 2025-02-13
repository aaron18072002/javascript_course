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
