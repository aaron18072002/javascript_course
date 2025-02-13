// 1. selector.getAttribute("attribute") --> lấy ra giá trị của attribute selector
// attribute --> thuộc tính: href,id,class,src,style

const link = document.querySelector(".link");
if (link != null) {
  console.log(link.getAttribute("href"));
}
const li = document.querySelectorAll(".item");
console.log(li);
li.forEach((item) => {
  console.log(item.getAttribute("class"));
});

// 2. selector.setAttribute("attribute", value); --> set giá trị cho attribute nào đó
//        của selector
link.setAttribute("target", "_blank");

const listLinks = document.querySelectorAll("a.link");
listLinks.forEach((link) => {
  link.setAttribute("target", "_blank");
});

// 3. selector.removeAttribute("attribute") --> xóa attribute
const p = document.getElementById("spinner");
p.removeAttribute("style");

// 4. hasAttribute("attribute") --> kiểm tra selector có attribute nào đó hay ko
console.log(p.hasAttribute("class"));
console.log(p.hasAttribute("id"));
if (p.hasAttribute("id")) {
  // do sth ...
}
