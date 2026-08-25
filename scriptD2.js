// Task_2
// Name : Ahmed Muharam Mohamed Kamal

//...Task_1
for (var i=1;i<=10;i++){
    console.log(i);
}

//...Task_2
for(var j=1;j<=20;j+2){
    console.log(j);
}

//...Task_3
var Total_sales = 0;
for(var n=1;n<=15;n++ ){
    Total_sales +=n;
}
console.log(`Total sales = ${Total_sales}`);

//...Task_4
var ticket = 1;
while (ticket <= 7) {
  console.log(ticket);
  ticket++;
}

//...Task_5
var countdown = 8;
while (countdown >= 1) {
  console.log(countdown);
  countdown--;
}

//...Task_6
var number = 1;
do {
  console.log(number);
  number++;
} while (number <= 5);

//...Task_7
var itemsInCart = 10;
do {
  console.log("ابدأ التسوق");
} while (itemsInCart < 10);

//...Task_8
var userName = "Ali";
console.log(userName);
console.log(typeof userName);
var userAge = 22;
console.log(userAge);
console.log(typeof userAge);
var isStudent = true;
console.log(isStudent);
console.log(typeof isStudent);

//...Task_9
var dbPrice = 10;
var inputPrice = "10";
console.log(dbPrice == inputPrice); //هنا بيقارن الارقام بغض النظر عن النوع
console.log(dbPrice === inputPrice); // هنا بيقارن النوع والرقم

//...Task_10
var userName = prompt("enter your name");
alert(`Welcome, ${userName}`);
console.log(`Welcome, ${userName}`);

//...Task_11
var value = prompt("enter the quantity number ..");

var quantity1 = Number(value);
console.log(quantity1, typeof quantity1);
var quantity2 = parseInt(value);
console.log(quantity2, typeof quantity2);
var quantity3 = +value;
console.log(quantity3, typeof quantity3);

//...Task_12
var num1 = 10;
var num2 = 3;
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 ** num2);
console.log(num1 % num2);

//...Task_13
var age = Number(prompt("Enter your age"));
if (age >= 18) {
  console.log("you can enter");
} else {
  console.log("Sorry, underage");
}

//...Task_14
var grade = Number(prompt("Enter your grade"));
if(grade >= 90){
console.log("your grade A")
}
else if(grade >= 80){
console.log("your grade B")
}
else if(grade >= 70){
console.log("your grade C")
}
else{
console.log("your grade F")
}

//...Task_15
var age = Number(prompt("Enter your age"));
var result = age >= 18 ? "Adult" : "Minor";
console.log(result);

//...Task_16
var day = prompt("enter a day of week")
switch(day){
    case("Sunday"):
    console.log("start the week");
    break;
    case("Monday"):
    console.log("Second day of the week");
    break;
    case("Tuesday"):
    console.log("third the week");
    break;
    case("Wednesday"):
    console.log("fourth the week");
    break;
    case("Thursday"):
    console.log("six the week");
    break;
    default:
    console.log("weekend");
    break;
}

//...Task_17
var price = Number(prompt("Enter price"));
for (var h = 1; h <= 10; h++) {
  var result = h * price;
  console.log(`${h} x ${price} = ${result}`);
}

//...Task_18
var fileSize = Number(prompt("Enter file size"));
if (fileSize > 0 && fileSize % 2 !== 0) {
  for (var i = 1; i <= fileSize; i++) {
    console.log(i);
  }
} else {
  console.log("Invalid file size");
}

//...Task_19

//...Task_20

//...Task_21
var total = 0;
for (var day = 1; day <= 5; day++) {
  var expense = Number(prompt("enter the expense day" + day));
  total = total + expense;
}
var average = total / 5;
console.log("total :  " + total);
console.log("average : " + average);

//...Task_22
var correctPin = "1234";
var attempts = 0;
var pin = "";

while (attempts < 3 && pin !== correctPin) {
  pin = prompt("enter the passward ");
  attempts++;
}

if (pin === correctPin) {
  console.log("logged in successfully");
} else {
  console.log("login failed");
}

//...Task_23
var hasAccount = true;
var isVerified = false;

if (hasAccount && isVerified) {
  console.log("Welcome back");
} else if (hasAccount && !isVerified) {
  console.log("Please verify your account");
} else {
  console.log("Please sign up");
}

//...Task_24
var a = 40;
var b = 50;
var c = 60;
var d = 30;
var e = 30;
var total55 = a + b + c + d + e ;
console.log(total55);
if (total55 >= 20) {
  for (var l = 1; l <= 10; l++) {
    console.log(total55);
  }
} else {
  console.log("Too big to print line");
}

//...Task_25