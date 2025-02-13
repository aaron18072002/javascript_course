// 1. textContent --> ko lấy được nội dung đã bị ẩn đi

const spinner = document.querySelector("#spinner");
// thay đổi textContent
// spinner.textContent = "Hello new content";
console.log(spinner.textContent);

// 2. innerText
console.log(spinner.innerText);

// spinner.textContent = "<div class=``></div>"; --> in ra string <div>...</div> luôn

// 3. innerHTML --> lấy ra nội dung của selector bao gồm cả HTML
console.log(spinner.innerHTML);
spinner.innerHTML = `<div class = "demo">hello html</div>`;
