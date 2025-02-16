// thêm xóa node trong Javascript

// 1. Tạo ra Element trong Javscript: document.createElement("tag");
const div = document.createElement("div");

// 2. selector.appendChild();
// document.body -> thẻ body
// document.querySelector("body")
const body = document.body;
body.appendChild(div);
div.classList.add("container");
div.className = "container wrapper";
div.textContent = "lorem";
div.innerHTML = `<div class="content"><h3></h3></div>`;
div.setAttribute("data-name", "evondev");

// Bài tập tạo ra html như đã minh họa
const card = document.createElement("div");
card.classList.add("card");
const cardImage = document.createElement("img");
cardImage.setAttribute(
  "src",
  "https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg"
);
cardImage.setAttribute("width", "500");
cardImage.setAttribute("height", "500");
card.appendChild(cardImage);
body.appendChild(card);

// 3. document.createTextNode()
const text = document.createTextNode("Hello my name is Evondev");
const h1 = document.createElement("h1");
h1.appendChild(text);
body.appendChild(h1);
