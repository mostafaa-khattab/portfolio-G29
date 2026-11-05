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

// var userName = window.prompt("Enter Your Role");
// switch (userName) {
//   case "admin":
//     console.log("admin");
//     break;
//   case "user":
//     console.log("user");
//     break;
//   default:
//     console.log("error");
// }

// var num1 = 5;
// var num2 = 10;
// var res1 = num1 + num2;
// console.log(res1);

// var num3 = 15;
// var num4 = 20;
// var res2 = num3 + num4;
// console.log(res2);

// var num5 = 30;
// var num6 = 45;
// var res3 = num5 + num6;
// console.log(res3);

// function sum(num1 = 0, num2 = 0) {
//   var res = Number(num1) + Number(num2);
//   return res;
// }

// sum(5);

// function discount(price , disc){
//   return price - (price * (disc / 100));
// }

// var price = Number( window.prompt("Enter your price: ") );
// var disc = Number( window.prompt("Enter your discount: ") );
// var afterDisc =  discount(price , disc);

// console.log( "Original price is: ", price, "After discount price is: ", afterDisc);

// var name1 = "mostafa"
// var name2 = "ali"
// var name3 = "abanoub"

//             0          1        2
// var names = ["habiba" , "jana" , "mariem"];
// console.log(names.includes("h"));

// console.log( names[0] );
// console.log( names[1] );
// console.log( names[2] );

// nums.push(6)
// nums.pop()
// nums.unshift(2)
// nums.shift()
// console.log(nums.indexOf(15));

//           0  1   2    3  4     5
// console.log(nums.slice(1, 2));
// console.log(nums.splice(1, 1));

// console.log(nums);

// loop ( for , while , do while)
// var nums = [10, 15, 13, 55, 40, 80];

// for( var i = 0  ; i < nums.length  ; i++   ){
//   console.log( nums[i]  );
// }

// var parent = document.getElementById("parent_show");

// var names = [
//   "mostafa",
//   "ali",
//   "abanoub",
//   "ahmed",
//   "eyad",
//   "mariam",
//   "habiba",
//   "jana",
//   "habiba",
//   "radwa",
//   "khadija",
//   "shahd",
//   "shrouq",
//   "hassan",
//   "mohamed",
//   "ali",
//   "alaa",
//   "menna",
//   "jovan",
// ];

// var cartona = "";
// for (var i = 0; i < names.length; i++) {
//   // cartona = cartona + "<h1>" + names[i] + "</h1>";
//   cartona = cartona + "<img  src=' " + images[i]  + "   ' />"
// }

// parent.innerHTML = cartona;

// Event

function welcome() {
  var fn = document.getElementById("fn");
  var ls = document.getElementById("ls");
  var fn_ls = document.getElementById("fn_ls");

  var rgx = /^[A-Za-z][a-z]{2,15}$/;
  var rgx_email = /^[^@]+@[^@]+\.[^@]+$/

  if (rgx.test(fn.value)) {
    fn.classList.add("is-valid");
    fn.classList.remove("is-invalid");

    if (rgx.test(ls.value)) {
      ls.classList.add("is-valid");
      ls.classList.remove("is-invalid");

      var res = fn.value + " " + ls.value;

      fn_ls.innerText = res;
    } else {
      ls.classList.add("is-invalid");
      ls.classList.remove("is-valid");
    }
  } else {
    fn.classList.add("is-invalid");
    fn.classList.remove("is-valid");
  }
}



let x = "b";
let y = "a"

console.log(x + y + +y +y);
