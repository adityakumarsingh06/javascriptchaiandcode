// data types 
//alert("hello"); we are using nodejs not browser
// data type change 
let number = "undefined";
console.log(typeof(number));
let value = Number(number);
console.log(typeof(value));
console.log(value);
//"33"-> 33
//"33abc"->nan
let some_Nume = 123;
let string_num = String(some_Nume);
console.log(typeof(string_num));

// stack(primitive) -- copy 
//heap(non-primitive)--reference 
let user = {
  email: "aditya@google.com"
}
let user2 = user;
user2.email = "hitesh@gmail.com";
console.log(user2.email);
console.log(user.email); // this uses heap as it is changed by same reference 

let a = "a";
a = "b";
let b = "a";
console.log(a);
console.log(b);
// it uses stack