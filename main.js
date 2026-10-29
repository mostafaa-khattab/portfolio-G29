//window.alert("Hello js external")

// document.getElementById("demo").innerText = "Hello Every One"

// premative datatype || non-permative data type

// console.log(10 + "5" + (20 + 20) + "5"); // 20 | 155

// Arithamtic operator
// + - * / % ++ --

// var x = Number(""); //0
// var x = Number(" "); //0
// var x = Number("ali"); // nan
// var x = Number("true"); //NaN
// var x = Number("5"); // 5
// var x = Number(null); // 0
// var x = Number(undefined); // NaN

// var x = Boolean("ali")
// var x = Boolean(" ")
// var x = Boolean("")
// var x = Boolean("0") // true
// var x = Boolean("1")
// var x = Boolean(-15)
// var x = Boolean("false")

// console.log(x);

// var y;
// console.log(y); // 5 | undefined | 0 | Random

// y = 5
// console.log(y); // 5

// var z;
// console.log(typeof z);

// z = 5
// console.log(typeof z);

// window.alert("Hello") // BOM
// document.getElementById("demo").innerText = "Hello Every One" // DOM
// console.log("Hello")

// logical operator
// &&   || !=  !== == === < >  <= >=

// var num1 = 15;
// var num2 = 5;
// var res = num1 + num2
// console.log( Boolean(15 && "0"));

// var num1 = Number(window.prompt("Enter Num1:"));
// var opt = window.prompt("Enter Opt: ");
// var num2 = Number(window.prompt("Enter Num2:"));

// if (opt == "+") {
//   console.log("result", num1, opt, num2, "=", num1 + num2);
// } else if (opt == "-") {
//   console.log("result", num1, opt, num2, "=", num1 - num2);
// } else if (opt == "*") {
//   console.log("result", num1, opt, num2, "=", num1 * num2);
// } else if (opt == "/") {
//   if (num2 != 0) {
//     console.log("result", num1, opt, num2, "=", num1 / num2);
//   } else {
//     console.log("not dvided zero");
//   }
// } else {
//   console.log("use opt + , - , * , /");
// }

// if( undefined === null){
//     console.log("equal");
// }else{
//     console.log("not equal");
// }

var userName = window.prompt("Enter Your Role");
switch (userName) {
  case "admin":
    console.log("admin");
    break;
  case "user":
    console.log("user");
    break;
  default:
    console.log("error");
}
