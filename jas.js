
function myFunction (){
    /* write a program that will add two numbers together and alert the result*/
var x = 20;
var y = 10;

var xy = x + y;

console.log(xy +" " + "is the right figure");
}
 myFunction;
 
 /* write a program that take in an iput and give a result that determine whether an individual is a millenial or Gen Z */
 function myAge(){
    age = prompt("Enter Age");
if (age <27){
      alert("You are a millenial");
  } else if (age > 40) {
      alert ("You are a Gen X");
  } else {
      alert ("You are a Gen Z");
  }
};
myAge;

/* write a program that output even nums */
function myLoops(){
    let x = 0;
    while(x<6){ 
    console.log(x);
    x++
    }
}

myLoops;

function myParam(a,b) {
    var x = a*b;
    return x;
}

myParam(5,6);

//objects//

function person (n,a,c){
    this.name = n;
    this.age = a; 
    this.color = c; 

    this.changeName = function(n){
        this.name = n;
    }
}

var j  = new person ("John", 25);
var ja = new person ("James", 21);

j.changeName("Jay");


var person = {
    a: "H",
    b: 2,
}
console.log(person.a); 

let objA ={ a:1, b:2};
Object.assign(objA, {c:1, b:3});

console.log(objA);



/*while (f >=5){
    console.log ("Good")
}; */

// write a program to loop out nums

//let count = prompt("Enter Num");

function loopp (){
    let cNum = parseInt(prompt("Enter No"));
    while (cNum <= 20){
        alert("Good") 
        break;
    }
}
loopp;

//object constructor//
function book (title, author){
    this.title = title, 
    this.author = author
}
var myBook = new book ("Perl", "Mosh")
console.log("The books attributes are:" +" "+ myBook.title +" "+ "and the author is"+" "+ myBook.author);
/*
function contact(name, number){
this.name = name;
this.number = number;

this.changeContact = function (name, number){
    this.name = name;
    this.number = number;
    this.print = print
}

function print(){
    console.log(this.name + ":" + this.number)
} 
}

var a = new contact ("Alake", 1234);
var b = new contact ("Jay", 123456);

a.print();
b.print();
*/

function contact (name, num){
    this.name = name;
    this.num = num;
    this.print = print;

    function print(){
        console.log (name +": "+num)
    }

}
var a = new contact ( "Ade", 1234);
var b = new contact ( "John", 08564894);

a.print();
b.print();

//a program to take users age as input and output old or young based on users response
function adult(){
var age = prompt ("Enter Age");
    var isAdult = (age>18)? "Old enough" : "Young";
    console.log(isAdult);
}

adult;

/* write out a program that request for input and then output the user iput
based on some certain conditions */


function customer(){
    let pName = prompt("What is your name");
    if (pName == ""){
        alert ("Enter Name")
    } else {
        alert ("Welcome" +" "+ pName)
    }
}

customer;

function forr(){
    let sum = 0;
for (i=4;i<8;i++){
    if(i==6){
        continue;
    }
    sum += i;
}
}

console.log(sum)
forr;
//create a button that when clicked, will increase the num
function swittch (){
let day = parseInt(prompt("Enter day no"));

switch (day){
    case 1: 
    console.log("Monday");
    break;
    case 2: 
    console.log("Tuesday");
    break;
    case 3: 
    console.log("Wednesday");
    break;
    case 4: 
    console.log("Thursday");
    break;
    default: 
    console.log("Another day");
}
}
swittch;

function snMove(){
    let depth = parseInt(readLine(), 10)
let sna = 0;

while (sna < 31){
    console.log(sna);
break;
}
}


function main(){
    
  let amount = parseFloat(readLine(),10);
  let rate = parseFloat(readLine(),10);

  function convert (amount,rate){
  return amount * rate;

}
console.log(convert(110,1.1));
}
main; 

function obj (){
    let d = new Date();
    let date = d.getDay();
    let time = d.getTime();

    console.log ("Today is :"+date + " "+ "The current time is :" + time)
}

setInterval(obj,3000);

