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
