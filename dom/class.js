// 1. selector.classList.add("className");
// const container = document.querySelector(".container");

// 2. selector.classList.remove("className");
// container.classList.add("is-active");
// container.classList.remove("container");

// 3. selector.classList.contains("className");
//console.log(container.classList.contains("container")); // false
//console.log(container.classList.contains("is-active")); // true

// 4. selector.classList.toggle("className");
//  chưa có className thì add, có rồi thì remove
//container.classList.toggle("is-active");

// 5. selector.className --> trả ra chuỗi các class của selector
// const title = document.querySelector(".title");
// console.log(title);
// console.log(title.className);
// title.className = "title";
// console.log(title.className);

// menu toggle class
const menu = document.querySelector(".menu");
menu.classList.add("is-show");
