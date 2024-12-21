"4.5"; // 4.5 parseFloat
"4"; // 4 parseInt

// Number(value)
console.log("4.5 --> " + Number("4.5"));
console.log("4 --> " + Number("4"));
console.log("string --> " + Number("abcdef"));

// NaN: not a number
console.log("NaN --> " + Number(NaN)); //NaN
console.log("null --> " + Number(null)); // 0
console.log("true --> " + Number(true)); // 1
console.log("false --> " + Number(false)); // 0
console.log('"" --> ' + Number("")); // 0

// String(value)
console.log("=================STRING==================");
console.log("4.5 --> ", String(4.5));
console.log("4 --> ", String(4));
console.log("undefined --> ", String(undefined));
console.log("NaN --> ", String(NaN));
console.log("false --> ", String(false));

// Boolean(value) --> true hoặc false
console.log("=================BOOLEAN==================");
console.log("0 --> " + Boolean(0));
console.log('"" --> ' + Boolean(""));
console.log("null --> " + Boolean(null));
console.log("NaN --> " + Boolean(NaN));
console.log("undefined --> " + Boolean(undefined));
console.log("false --> " + Boolean(false));
console.log("Dev0 Fpt --> " + Boolean("Dev0 Fpt"));

// Type coercion - Ép kiểu
// + - * /
console.log("=================TYPE COERCION==================");
console.log("1 + 2 --> " + (1 + 2));
console.log("10 + 10 --> " + (10 + 10));
console.log('10 + "10" --> ' + (10 + "10"));
console.log('"10" + 10 --> ' + ("10" + 10));
console.log('null + "" --> ' + (null + ""));
console.log("null + undefined --> " + (null + undefined));
console.log('"" - 1 --> ' + ("" - 1)); // Number("") - 1 = 0 - 1 = -1
console.log("false - true --> " + (false - true)); // Number(false) - Number(true) = 0 - 1
