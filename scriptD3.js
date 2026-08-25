//...........String.............
//....Task_1
var str = "Ahmed Ali";
console.log(str.length);

//....Task_2
var str2 = "I am learning JavaScript" ;
console.log(str.toLowerCase());
console.log(str.toUpperCase());

//....Task_3
var email = " student@nti.com";
console.log(email.indexOf("@"));

//....Task_4
var str3 = "JavaScript";
console.log(str3[0]);
console.log(str3[str3.length-1]);

//....Task_5
var str4 = "This is a bad day";
var replacestr4 = str4.replace("bad","good");
console.log(replacestr4);

//....Task_6
var str5 = "I love coding" ;
var words = str5.split(" ");
var result = words.join("-");
console.log(result);

//....Task_7
var text = " nti egypt training " ;
var removeSpace = text.trim()
console.log(removeSpace);
var upperText = removeSpace.toUpperCase()
console.log(upperText);
var replaceText = upperText.replace("EGYPT","CAIRO");
console.log(replaceText)

//.......... Numbers & Math............
//....Task_8
var str6 = "45.8";
var Str6ToNum = Number(str6);
console.log(Str6ToNum);
console.log(typeof Str6ToNum);

//....Task_9
var num5 = 7.6;
console.log(Math.round(num5));
console.log(Math.floor(num5));
console.log(Math.ceil(num5));

//....Task_10
console.log(Math.max(12, 5, 28, 9 ));
console.log(Math.min(12, 5, 28, 9 ));

//....Task_11
console.log(Math.random());

//....Task_12
var num66 =19.4567 ;
console.log(num66.toFixed(2));

//....Task_13
var numbers = [];
for (var i = 0; i < 5; i++) {
  numbers.push(Math.floor(Math.random() * 50) + 1);
}
var largest = Math.max(...numbers);
var smallest = Math.min(...numbers);
var sum = 0;
for (var number of numbers) {
  sum += number;
}
var average = (sum / numbers.length).toFixed(2);

console.log("Numbers:", numbers);
console.log("Largest:", largest);
console.log("Smallest:", smallest);
console.log("Average:", average);

//.......... Loops............
//....Task_14
for(var j=1 ;j<=20;j++){
    console.log(j)
}

//....Task_15
for(var k=1 ; k<=15 ;k++){
    if(k%2){
        console.log(k);
    }
}

//....Task_16
var num77 = 10;
while (num77 >= 1) {
  console.log(num77);
  num77--;
}

//....Task_17
var arr= ["Sara", "Omar", "Mona", "Youssef"] ;
for(var name of arr){
    console.log(name);
}

//....Task_18
for(var n=1 ; n<=10 ; n++){
    if(n==7){
        break;
    }
    console.log(n);
}

//....Task_19
for(var h=1 ;h<=3;h++){
    for(var y=1;y<=3;y++){
        console.log (h + " * "+ y +" = "+(h*y));
    }
}

//....Task_20
for(var s=1 ; s<=30 ; s++){
    if(s%3==0){
        continue;
    }
    if(s==25){
        break;
    }
    console.log(s);
}

//...........Mix (Strings + Numbers + Loops)............
//....Task_21
var word = "HELLO";

for (var letter of word) {
  console.log(letter);
}

//....Task_22
total=0;
var arr2 = [10, 20, 30, 40] ;
for(number11 of arr2){
    total+=number11;
}
console.log(total); 

//........task_23
var sentence = "JavaScript is amazing and awesome";
var count = 0;
for (var letter of sentence) {
  if (letter === "a" || letter === "A") {
    count++;
  }
}
console.log(count); 

//........task_24
var grades = [70, 85, 92, 60, 77, 88];
for (var grade of grades) {
  if (grade % 2 === 0) {
    console.log(grade);
  }
}

//.......task_25
for (var q = 1; q <= 4; q++) {
  var line = "";

  for (var v = 1; v <= q; v++) {
    line += "* ";
  }

  console.log(line);
}
