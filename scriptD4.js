//....Task Day_4
//...............Objects...............
//..........Task_1
var car = {brand:"Daewoo", model:"Nubira" ,year:2005 , color:"white" };
console.log(car);

//..........Task_2
console.log(car.brand);
console.log(car["year"]);

//..........Task_3
car.color="black";
car.price=220000;
console.log(car);

//..........Task_4
delete car.year;
console.log(car);
console.log(car.year);// undefined = > Because it no longer exists.

//..........Task_5
var student ={student_name:"sara" , age:"20"}
console.log(student["student_name"]);

//..........Task_6
var book = {title:"My Book" , author : {firstName:"ahmed muharam",lastName:"moamed kamal"}};
console.log(book.author.lastName);

//..........Task_7
var names = { name: "Ali", age: 25, city: "Cairo" }
console.log(Object.keys(names));
console.log(Object.values(names));
console.log(names.hasOwnProperty("job"));

//..........Task_8
var settigns = {theme:"dark", lang:"en"}
Object.freeze(settigns); //..objهتمنع اي تعديل يحصل علي ال 
settigns.theme = "light";//مش هتتغير
settigns.fontSize = 16;//مش هتتضاف 
console.log(settigns);//{theme: 'dark', lang: 'en'}

//...............Arrays Basics...............
//..........Task_9
var city = ["paris","madrid","barcelona","london","alex"];
console.log(city);
console.log(city.length);

//..........Task_10
console.log(city[0]);
console.log(city[1]);
console.log(city[city.length-1]);

//..........Task_11
city.push("cairo");
console.log(city);
city.unshift("giza");
console.log(city);

//..........Task_12
city.pop();
console.log(city);
city.shift();
console.log(city);

//..........Task_13
var frontEnd = ["HTML", "CSS", "Js", "React"];
console.log(frontEnd.indexOf("Js"));

//..........Task_14
var items = ["pen", "book", "bag"];
items.forEach((item , index) => {
    console.log(index , item);
});

//..........Task_15
var colors = ["red", "green", "blue", "yellow"];
for (var color1 of colors){
    if(color1 === "blue"){
        continue;
    }
    console.log(color1);
    
}

//..........Task_16
var arr2 = ["A", "B", "C"];
arr2.push("D");
arr2.push("E");
console.log(arr2);
console.log(arr2.length);

//...............Array Methods...............
//..........Task_17
var fruits = ["apple", "banana", "cherry"];
var uppercase = fruits.map((fruit) => {
    return fruit.toUpperCase();
});
console.log(uppercase);

//..........Task_18
var nums = [10, 55, 30, 80, 45, 90];
var greaterThan50 = nums.filter((num) => num > 50);
console.log(greaterThan50);

//..........Task_19
var cities = ["Cairo", "Giza", "Alex", "Aswan"];
var firstCityWithA = cities.find((city5) => city5.startsWith("A"));
var cityIndex = cities.findIndex((city5) => city5.startsWith("A"));
console.log(firstCityWithA); 
console.log(cityIndex);

//..........Task_20
var letters = ["a", "b", "c", "d", "e"];
var copiedLetters = letters.slice(1, 4);
console.log(copiedLetters); 
console.log(letters);

//..........Task_21
var words = ["one", "two", "three", "four", "five"];
var removedItems = words.splice(1, 2);
console.log(removedItems); 
console.log(words); 

//..........Task_22
var numbersToSort = [40, 100, 1, 5, 25];
numbersToSort.sort((a, b) => a - b);
console.log(numbersToSort); 

//..........Task_23
var ages = [16, 21, 17, 19];
var hasAdult = ages.some((age) => age >= 18);
var allAdults = ages.every((age) => age >= 18);
console.log(hasAdult);
console.log(allAdults);

//..........Task_24
var values = [5, 10, 15, 20];
var total = values.reduce((sum, value) => sum + value, 0);
console.log(total);

//...............Mix (Objects + Arrays)...............
//..........Task_25
var students = [
  { name: "Omar", grade: 80 },
  { name: "Mona", grade: 90 },
  { name: "Ali", grade: 70 }
];
students.forEach((student) => {
  console.log(student.name, student.grade);
});

//..........Task_26
var successfulStudents = students
  .filter((student) => student.grade >= 80)
  .map((student) => student.name);
console.log(successfulStudents); 

//..........Task_27
var products = [
  { name: "Pen", price: 10 },
  { name: "Book", price: 50 },
  { name: "Bag", price: 25 }
];
var totalPrice = products.reduce((total, product) => {
  return total + product.price;
}, 0);
console.log(totalPrice); 

//..........Task_28
var skills = ["js", "html", "css", "js", "react", "js"];
var jsCount = skills.filter((skill) => skill === "js").length;
console.log(jsCount);

//..........Task_29
var classroom = {
  teacher: "Ahmed",
  students: ["Omar", "Mona", "Ali", "Sara"]
};
console.log(classroom.teacher); 
console.log(classroom.students.length);
console.log(classroom.students[classroom.students.length - 1]);

//..........Task_30
