//...NTI Task Day_7
//..................Ahmed Muharam.....................

//...........Part_A..............

//........Task_1
function test() {
    x = 10;
}
test();
console.log(x); //هنا هيطبع عادي مفيش مشكله

//........Task_2
function test() {
    "use strict";
    try {
        x = 10;
    } catch (error) {
        console.log(error.message);
    }
}
test();// x is not defined

//........Task_3
function test() {
    "use strict";
    var localVar = "test";
    try {
        //delete localVar;
    } catch (error) {
        console.log(error.message);
    }

    var person = {
        name: "Ahmed"
    };
    delete person.name;
    console.log(person);
}
test();

//...........Part_B..............

//........Task_4
console.log(x); //undefiend
var x = 10;
console.log(x);//10

//........Task_5
//case 1
// sayHi();
// function sayHi() {
// console.log("Hi");  //Hi
// }

// // Case 2
// sayBye();
// var sayBye = function () {
// console.log("Bye");//error
// };

//........Task_6
// console.log(a);
let a = 5; //error

//........Task_7
var n = 1;
function demo() {
    console.log(n); //1 
    var n = 2;
    console.log(n); //2
}
demo();
console.log(n); //1

//...........Part_C..............

//........Task_8
function testVar() {
    if (true) {
        var x = 10;
    }
    console.log(x);
}
testVar();

//........Task_9
function testLetConst() {
    if (true) {
        let x = 10;
        const y = 20;
    }
    console.log(x); 
    //console.log(y);erroe

}
testLetConst();

//........Task_10
var x = 10;
var x = 20;
console.log(x); // 20
let y = 10;
// let y = 20; //error

//........Task_11
const student = {
    name: "Ahmed",
    age: 18,
    city: "Cairo"
};
student.age = 19;
student.grade = "A";
delete student.city;
console.log(student);

try {
    student = {
        name: "Ali",
        age: 20,
        city: "Alexandria"
    };
} catch (error) {
    console.log(error.message);
}

//........Task_12
const nums = [1, 2, 3];
nums.push(4);
console.log(nums);
nums[0] = 10;
console.log(nums); 
try {
    nums = [5, 6, 7]; // not allowed
} catch (error) {
    console.log(error.message);
}

//........Task_13
// var a;  //valid
// let b;  //valid
// const c; // invalid دي لازم تديها قيمه

//........Task_14
var g1 = "var global";
let g2 = "let global";
const g3 = "const global";

console.log(window.g1); //var global
console.log(window.g2); //undefined
console.log(window.g3); //undefined
// propertiesفي global scope مش بيتضافوا كـ let و const   

//........Task_15
//Ezample:
// const handlers = {};
// for (var i = 0; i < 3; i++) {
//   handlers["fn" + i] = function () {
//     return "index: " + i;
//   };
// }
// console.log(handlers.fn0());
// console.log(handlers.fn2());

//solution:
const handlers = {};
for (let i = 0; i < 3; i++) {
    handlers["fn" + i] = function () {
        return "index: " + i;
    };
}
console.log(handlers.fn0());
console.log(handlers.fn2());
//..let ..block-scopedلأن 

//...........Part_D..............

//........Task_16
var welcome = (name) => `Welcome, ${name}!`;
console.log(welcome("Ahmed"));

//........Task_17
var fullInfo = (first, last, age) =>
    `${first} ${last} is ${age} years old`;
console.log(fullInfo("Ali", "Hassan", 25));

//........Task_18
var multiply = (a, b) => a * b;
console.log(multiply(5, 4));

//...........Part_E..............

//........Task_19
//.... Using object destructuring, extract:
const product = {
    title: "Laptop",
    price: 15000,
    inStock: true,
    brand: "Dell"
};
const { title, price, inStock } = product;
console.log(title);
console.log(price);
console.log(inStock);

//........Task_20
var skills = ["HTML", "CSS", "JS", "React"];
var [first, second] = skills;
console.log(first);
console.log(second);

//........Task_21
function greet(name = "Guest", message = "Hello") {
    return `${message}, ${name}!`;
}
console.log(greet("Ahmed", "Welcome"));
console.log(greet("Ahmed"));
console.log(greet());

//........Task_22
function sumAll(...numbers) {
    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    return sum;
}
console.log(sumAll(1, 2, 3));
console.log(sumAll(10, 20, 30, 40));

//........Task_23
//1)..
// var arr1 = [1, 2];
// var arr2 = [3, 4, 5];
// var merged = [...arr1, ...arr2];
// console.log(merged);
// //2)..
// var original = [10, 20, 30];
// var copy = [...original];
// copy.push(40);
// console.log(original);// 10 20 30 
// console.log(copy); // 10 20 30 40

//........Task_24
const user = {
    name: "Sara",
    age: 22
};
const contact = {
    email: "sara@nti.com",
    age: 23
};
const merged = {
    ...user,
    ...contact
};
console.log(merged);
// العمر ظهر  23 لان ال كونتنت جت بعد اليوزر ف احنا بناخد عمر اخر حاجه اتكتبت

//........Task_25
const values = [2, 4, 6, 8];
function total(a, b, c, d) {
    return a + b + c + d;
}
console.log(total(...values));

//...........Part_F..............

//........Task_26
let person1 = { name: "Ali", child: { age: 5 } };
let person2 = person1;
person2.name = "Omar";
console.log(person1.name); //ali

//........Task_27
const original = {
name: "Mona",
details: { city: "Cairo" }
};
const copy = { ...original };
copy.name = "Sara";
copy.details.city = "Alexandria";
console.log(original);
console.log(copy);

//........Task_28
// const deepCopy = structuredClone(original);
// deepCopy.details.city = "Alexandria";
// console.log(original);
// console.log(deepCopy);

//........Task_29
const userData = {
    name: "Ahmed",
    age: 26,
    city: "Alex"
};
localStorage.setItem("userdata", JSON.stringify(userData));
const storedData = localStorage.getItem("userdata");
const parsedData = JSON.parse(storedData);
console.log(typeof parsedData);
console.log(parsedData.name);
console.log(parsedData.age);
console.log(parsedData.city);
localStorage.removeItem("userdata");

//...........Part_G..............

//........Task_30
const APP_CONFIG = {
    name: "My App",
    version: "1.0.0",
    timeout: 5000,
    api: {
        baseUrl: "https://api.example.com",
        features: []
    }
};
APP_CONFIG.api.features.push("dark-mode");
console.log(APP_CONFIG);
try {
    APP_CONFIG = {
        name: "New App"
    };
} catch (error) {
    console.log(error.message);
}

//........Task_31
function createCard(title, price = 0, ...tags) {
    return {
        title: title,
        price: price,
        tags: tags,
        label: `${title} - ${price} EGP`
    };
}
const card1 = createCard("Laptop", 15000, "Electronics", "Dell");
const card2 = createCard("Mouse", 500, "Accessories", "Wireless");
console.log(card1);
console.log(card2);

//........Task_32
const students = [
    { name: "Omar", grade: 80 },
    { name: "Mona", grade: 90 },
    { name: "Ali", grade: 70 }
];
for (const { name, grade } of students) {
    console.log(`${name} scored ${grade}`);
}