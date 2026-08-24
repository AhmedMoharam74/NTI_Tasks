//Task day_1
//Name:Ahmed Moharam Mohamed Kamal

//......Task_1
console.log("JS is running successfully");

//......Task_2
alert("Ready to practice!");

//......Task_3
var productName = "Laptop";
console.log(productName)
console.log(typeof productName);
var price = 15000;
console.log(price)
console.log(typeof price);
var isAvailable = true;
console.log(isAvailable)
console.log(typeof isAvailable);

//......Task_4
document.getElementById("mainTitle").innerText="PracticeTime";

//......Task_5
var city = "Cairo";
var country = "Egypt";
var fullName = city+","+"Egypt";
console.log(fullName);

//......Task_6
console.log(`Location: ${city} - ${country}`);

//......Task_7

//......Task_8
var color = window.prompt("Enter Your Favorite Color");
alert(`your favorite color is : ${color}`);
//console.log(`your favorite color is : ${color}`);//if you want me to display it on the console

//......Task_9

//......Task_10
var quantity = window.prompt("Enter the quantity you want..");
console.log(quantity);
console.log(typeof quantity); //string
// => convert strint to number..
console.log(typeof parseInt(quantity)); //the first method
console.log(typeof Number(quantity)); //the second method
console.log(typeof +quantity); //the third method

//......Task_11
var fruits =["apple", "banana", "mango" ];
console.log(fruits[1]);//.1
fruits[1]="orange";//.2
fruits.push("grape");//.3
console.log(fruits);//.4

//......Task_12
var course = {title:"javaScript", hours:120 , level:"beginner"};
course.title = "NodeJS";
console.log(course.hours);
console.log(course);

//......Task_13

//......Task_14

//......Task_15
var hotel= window.prompt("Enter the hotel name.");
var nights=window.prompt("Enter the number of nights.");
var Confirmed=window.prompt("Is the reservation confirmed?");
alert(`Hotel: ${hotel}, Nights: ${nights}, Confirmed: ${Confirmed}`);
console.log(`Hotel: ${hotel}, Nights: ${nights}, Confirmed: ${Confirmed}`);

//......Task_16
console.log(2 + 8 + "0"); //100
console.log("2" + 8 + 0); //280
console.log(2 + "8" + 0); //280

//......Task_17
var city1 = "Alex";
var city2 = city1;
city2 = "Giza";
//في الاول قبل تغيير سيتي2 الي جيزة كانت سيتي 1تساوي سيتي2 ف لو كنا طبعناها كده من غير منعدل عليها كانت هتبقي اليكس اليكس ف احنا غيرنا سيتي 2 بقيت جيزة ف لما هنطبع بعد التعديل هيظهر الاوتبوت اللي ظهر ده 
console.log(city1, city2); //Alex Giza 

//......Task_18
var car1 = { brand: "Toyota" };
var car2 = car1;
car2.brand = "Honda";
console.log(car1, car2);

//......Task_19
var mixedBag = ["ahmed",2005,true,null,{age:21},undefined,[1,2,3]];
console.log(typeof mixedBag[0] );
console.log(typeof mixedBag[1] );
console.log(typeof mixedBag[2] );
console.log(typeof mixedBag[3] );
console.log(typeof mixedBag[4] );
console.log(typeof mixedBag[5] );
console.log(typeof mixedBag[6] );
//`null` returns `object` due to an old, historic bug in JavaScript.

//......Task_20
var number_1 = Number(prompt("please enter number_1 .."));
var number_2 = Number(prompt("please enter number_2 .."));

console.log(number_1 + " + " + number_2 + " = " + (number_1 + number_2));
console.log(number_1 + " - " + number_2 + " = " + (number_1 - number_2));
console.log(number_1 + " * " + number_2 + " = " + (number_1 * number_2));
console.log(number_1 + " / " + number_2 + " = " + (number_1 / number_2));
console.log(number_1 + " % " + number_2 + " = " + (number_1 % number_2));
console.log(number_1 + " ** " + number_2 + " = " + (number_1 ** number_2));

//......Task_21
var a = 40;
var b = 50;
var c = "60";
var d = 30;
var e = 30;
console.log(a + b + c + d + e); //output => 90603030
console.log(a + b + Number(c) + d + e); //output after edit => 210
// اللي حصل في الاوتبوت الاول لان ال c is a string ق اللي هييجي بعدها هيتضاف عليها مش هيتجمع

//......Task_25
var productName = prompt("enter the productName ..");
var brand = prompt("enter the brand ..");
var price = Number(prompt("enter the price ..")); //string => number
var category = prompt("enter the category ..");
var confirm = prompt("Is this product in stock?");
var productInfo = {productName:"Iphone 13 pro max" ,brand:"Apple" ,price:35000 ,category:"Electronics"};
var message = `Name : ${productInfo.productName},
               brand: ${productInfo.brand}, 
               price: ${productInfo.price}, 
               category: ${productInfo.category},
               confirm: ${productInfo.confirm}`;
console.log(message);
console.log(productInfo);
console.log(productName[0]);
