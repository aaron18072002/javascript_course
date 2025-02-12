// built-in object
const date = new Date();
console.log(date);

// Sun Dec 22 2024 18:14:40 GMT+0700 (Indochina Time)
// Timezone: GMT+0700 (Indochina Time)
// Day of week: Sun
// Day of month: 22

// Timestamp và Epoch time
// Unix time
// timestamp tính ra kết quá là miliseconds

console.log(date.getTime()); // in ra timestamp milisecond
console.log(new Date(0)); // Epoch time = Thu Jan 01 1970 07:00:00 GMT+0700 (Indochina Time)

// 4 cách khai báo đối tượng Date
// new Date() --> in ra ngày giờ hiện tại
// new Date(timestamp) --> dựa vào timestamp để in ra ngày giờ
// new Date(date string)
// new Date(year,month,day,hours,minutes,second,miliseconds)
console.log(new Date(1734867146942));
console.log(new Date("Sun Dec 22 2024 18:32:35 GMT+0700 (Indochina Time)"));
console.log(new Date(2021, 0, 1, 23, 23, 23));

// Các hàm get trong Date
const birthday = new Date(1994, 9, 5);
// in ra năm
console.log(birthday.getFullYear());
// in ra tháng
// getMonth(): 0 - 11
// 0 tháng 1 (January), 11 tháng 12 (Dec)
console.log(birthday.getMonth());
// in ra ngày của tháng: 1 -> 31
console.log(birthday.getDate());
// in ra thứ của tuần
// 0-6: 0 -> chủ nhật, 6 -> thứ bảy
console.log(birthday.getDay());
// in ra giờ
console.log(birthday.getHours());
// in ra phút
console.log(birthday.getMinutes());
// in ra giây
console.log(birthday.getSeconds());
// in ra mili giây
console.log(birthday.getMilliseconds());
// in ra timestamp
console.log(birthday.getTime()); //781290000000

// Các hàm set trong Date

console.log(`My birthday: ${birthday}`);
birthday.setFullYear(1993);
birthday.setMonth(10); // 10 -> tháng 11 (Nov)
birthday.setDate(30); // set ngày trong tháng
birthday.setHours(23);
birthday.setMinutes(23);
birthday.setMilliseconds(23);
console.log(`My birthday after update: ${birthday}`);

// UTC: Universal Time - giờ quốc tế
console.log(birthday.getUTCFullYear());
// in ra tháng
// getMonth(): 0 - 11
// 0 tháng 1 (January), 11 tháng 12 (Dec)
console.log(birthday.getUTCMonth());
// in ra ngày của tháng: 1 -> 31
console.log(birthday.getUTCDate());
// in ra thứ của tuần
// 0-6: 0 -> chủ nhật, 6 -> thứ bảy
console.log(birthday.getUTCDay());
// in ra giờ
console.log(birthday.getUTCHours());
// in ra phút
console.log(birthday.getUTCMinutes());
// in ra giây
console.log(birthday.getUTCSeconds());
// in ra mili giây
console.log(birthday.getUTCMilliseconds());

const now = new Date();
console.log(now.toDateString()); //Wed Feb 12 2025
console.log(now.toTimeString()); //15:56:35 GMT+0700 (Indochina Time)
console.log(now.toLocaleDateString()); // MM/dd/yyyy -> 2/12/2025
console.log(now.toLocaleDateString("vi-VI")); // 12/2/2025
console.log(now.toISOString()); // 2025-02-12T08:58:23.108Z

const myTime = new Date("Fri Jan 01 2021 23:23:23 GMT+0700 (Indochina Time)"); // 1/1/2021
const myYear = myTime.getFullYear(); // 2021
const myMonth = myTime.getMonth(); // 0
const myDate = myTime.getDate(); // 1
console.log(myYear);
console.log(myMonth);
console.log(myDate);
const prefixMonth = myMonth < 10 ? "0" : "";
console.log(`${myDate}/${prefixMonth}${myMonth}/${myYear}`);
