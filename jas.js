
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
    for (i=2; i<=10; i+=2) 
    console.log(i);
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


