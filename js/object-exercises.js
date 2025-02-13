// 1. Viết 1 function kiểm tra value có phải 1 object ko
// typeof() === "object"
// null [] {} đều là object
function isObject(value) {
  if (typeof value === "object" && !Array.isArray(value) && value !== null) {
    return true;
  }
  return false;
}

console.log(isObject([]));
console.log(isObject({}));
console.log(isObject(null));
