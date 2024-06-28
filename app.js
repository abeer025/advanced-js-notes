//#region 1) var, let, const:

//var: Function-scoped hota ha, aur ye re-declared ya updated bhi karskte han.
//let: Block-scoped hota ha , aur updated to hojata ha lekin re-declared nai karskte.
//const: Block-scoped hota ha , isko updated or re-declared nai krskte.

//Example:
// var a = 10;
// let b = 20;
// const c = 30;

// a = 40; // 40
// b = 50; // 50
// // c = 60; // Error
// // console.log(a,b,c);

//Example global scope
// if (true) {
//   var a = 10;
// }
// console.log(a); // not defined

//Example function scope
// function abc() {
//   var a = 10;
// }
// abc();
// console.log(a); //10

// Hoisting:
//var me hoisting hoti ha. Hoisting aik default behavior js me  variables bnne se phle uska scope top per save hojata ha code execute hone se phle.
//Example:
// console.log(x); // undefined
// var x = 5;

//Example:
// let x;
// console.log(x); // undefined
// x = 5;

//#endregion

//#region 2) Template Litral

//Template literals basically aik backticks (`) ko kehte han , jise hum multi-line strings bhi likhskte han.
//Example:
// let name = 'Abeer';
// let greeting = `Hello, ${name}!`;
// console.log(greeting); //  Hello, Abeer!

//Example:
// let a = 7;
// let b = `the square root of ${a} is ${a * a}`;
// console.log(b);

// let a = `asdasdasda sad as dasd as
// d asd as da sd`;
// console.log(a);

//#endregion

//#region 3) Ternary Operator

// ternary operator if else statement ka short symbol ha,jiska syntax  condition ? expressionIfTrue : expressionIfFalse.

//Example:
// let age = 18;
// let canVote = age >= 18 ? 'Yes' : 'No';
// console.log(canVote); //Yes

// let condition = false;

// condition
//   ? console.log("True Condition Works")
//   : console.log("False Condition Works");

// let age = 21;
// let studentCard = false;

// age > 17
// ? console.log("allow")
// : studentCard
// ? console.log("allow on studentCard")
// : console.log("not allow");

// age > 17 || studentCard ? console.log("allow"): console.log("not allow");

//#endregion

//#region 4) Circuits

//Circuits aik logical operator ha && and || yeah jb kam krta ha jb dekhta ha condition true ha to age ka code run krdeta wrna false pe code rokdeta ha aur false ya uski value console krdeta ha. 


//Example:
// let condition = 5;

// let a = condition && "ABC";
// console.log(a);

//#endregion

//#region 5) Pass By Value and Pass By Reference

// pass by value me kisi bhi number or string ko dosre variable me refrence ke zarye (...)

// let num = 10;
// let copyNum = num;
// num = 20;
// console.log(copyNum); // 10

// pass by refrence me kisi bhi array or object ko kisi bhi new object me refrence deskte jisse old array or object ko merge krskte han

// let obj = {a: 1};
// let copyObj = obj; 
// obj.a = 2;
// console.log(copyObj.a); // 2

// let a = {
//   id: 1,
//   name: "ABC",
// };

// let b = a;
// b.inst = "SMIT";

// console.log(a);

// let a = [1, 2, 3];
// let b = a;
// b.push("ABC");
// console.log(a);

//#endregion

//#region 6) Spread Operator

//spread operator kisi array ya obj ko merge krne ke liye use hota ha

//Example:

// let a1 = [1, 2, 3, 4, 5];
// let b2 = [6, 7, 8, 9, 10];
// let merge = [...a1, ...b2 ];
// console.log(merge);

// let a = [1, 2, 3];
// let b = [...a];
// b.push("ABC");
// console.log(a, b);

// let a = [1, 2, 3];
// let b = ["A", "B", "C"];
// let c = [...a, ...b];
// console.log(c);

// let a = {
//   id: 1,
//   name: "ABC",
// };
// let b = {
//   inst: "ABC",
// };

// let c = {
//   ...a,
//   ...b,
// };

// console.log(c);

//#endregion

//#region 7) Rest Operator

// ...rest operator jb lagate jb hamen multiple parameter me argument dene ho tb ham yeah operator use krte han.

//Example:


// function rest(a = "Not provided", ...opr) {
//   console.log(a, opr);
// }

// rest("abeer","abeeriqbalahmed@gmail.com", 204979, "SMIT");

// function abc(a, b, c, ...abc) {
//   console.log(a, b, c, abc);
// }

// abc(1, 2, 3, 4, 5, 6, 7, 8, 9);

//#endregion

//#region 8) Destructure Array and Objects

// destructue array ya phr object me use krtey han jb hamen object me se multiple property ko get krna ho to iskko use krsktey han 

//Example: 
// let a = [1, 2, 3, 4];
// let [firstIndex, secondIndex, , index4] = a;
// console.log(index4);

// let userDetails = {
//   firstName: "Amir",
//   lastName: "Iqbal",
//   email: "abc@mail.com"
// };

// let { firstName, lastName, email } = userDetails;

// console.log(firstName, lastName, email);

// #endregion

//#region 9) Object Methods

// object ke kch advance js methods hote han
// let obj = {
//   id: 1,
//   name: "ABC",
//   age: 18,
//   inst: "SMIT",
// };
// // let keys = Object.keys(obj);
// // let val = Object.values(obj);
// let entries = Object.entries(obj);
// Object.freeze(obj);
// obj.name = "XYZ";
// console.log(obj); // id: 1 //name: "ABC"// age: 18 //inst: "SMIT"

//#endregion

//#region 10) functions

// a) ==== Heigher Order and call back Function

//aisa function jo apne function ke parameter me run ya return ho higher order function khelata ha

//Example:
// function higherOrder(func) {
//     return func(5);
// }

// function addFive(x) {
//     return x + 5;
// }

// console.log(higherOrder(addFive)); // 10


//aisa function jo kisi aur function ke parameter me run ya return ho callback function khelata ha

//Example:
// function greet(name, callback) {
//     console.log(`Hello, ${name}`);
//     callback();
// }

// function sayGoodbye() {
//     console.log('Goodbye!');
// }

// greet('John', sayGoodbye); // Hello, John // Goodbye!

// function abc(a) {
//   return a;
// }

// function xyz(b) {
//   console.log(b);
// }

// xyz(abc("Hello :)"));

// function abc() {
//   console.log("ABC");
//   return function () {
//     console.log("Return hone wala function");
//   };
// }

// abc()();

// b) ==== Arrow Function
// Advance me ham ab arrow function use krte han.arrow func ko fed arrow func bhi kehte han short syntax ke tor pe use krte ham.

// c) ==== Closures

// d) ==== lexical Scoping
//variables apne scope se bahr nai jaata function ke andar ho jb 

// let a = "xyz";
// function abc() {
//   let a = "abc";
//   console.log(a);
// }
// abc();

// e) ==== default perameter
// parameter me argument dene ke liye ham default parameter use krte han take user koi error show na ho.

// Example:

// function abc(b = 1) {
    //   let a = 420;
    //   console.log(b * a);
    // }
    
    // abc();
    
    // function multiply(a, b = 1) {
    //     return a * b;
    // }
    // console.log(multiply(5)); //  5
    // console.log(multiply(5, 2)); // 10

    // multiply();

//#endregion

//#region 11) ======== Array Functions =======

// `sare array of function ke methhod me auto loop chalta he,har func me callback laga hota he callback har iteration pe chalta he aur har aik array of func me pehle perameter me value milti he, dusre me index number , tesary me pura array dubaara mlilta he.`
// let arr = [ "a","b","c"];
// arr.map((p,q,r) => {
//   console.log(p);
//   console.log(q);
//   console.log(r);
// });

//*filter
// array se value nikalne k lie
//Example:
// 

//*forEach
// har aik item  par kaam karne k lie
//Example:
// 

//*reduce
// comparision k lie use karte he aur ya hamen koi minimum ya mzimum no nikalna ho array me se to use krsktey han

//Example:
// let arr = [1,2,3,4,5]
// let result = arr.reduce(function(a,b){
//     return a > b ? a : b;
// })

// console.log(result)

//*some
// `agar koi value true he to true return karta he matlab k data me kisi ke number me (one zero) ho to true dega`

//Example:
// 

//*every
// agar sabhi value true he to true return karta he
//Example:
// 


//*findIndex
// pure array me value ka index find karne k lie
//Example:
// 


//#endregion