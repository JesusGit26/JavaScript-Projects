function Call_Loop() {
    var num = "";
    var X = 100;
    while (X < 201) {
        num += "<br>" + X;
        X++
    }
    document.getElementById("Loop").innerHTML = num;
}

function str_len() {
    var str = "Hello, World!";
    var X = str.length;
    document.getElementById("len").innerHTML = X;
}

var Make = ["Ford", "Chevy", "Toyota", "Honda", "Nissan", "Mazda", "Tesla"];
var Content = "";
var X;
function loop_X() {
    for (X = 0; X < Make.length; X++) {
        Content += Make[X] + "<br>";
    }
    document.getElementById("List_of_Make").innerHTML = Content;
}

function array_F() {
    var myself = [];
    myself[0] = "sleep";
    myself[1] = "eat";
    myself[2] = "drink adult beverages";
    myself[3] = "play video games";
    document.getElementById("array").innerHTML = "I like to " + myself[2] + ".";
}

function constant_function() {
    const Car = {Make: "Ford", Model: "Raptor", Color: "Blue"};
    Car.Color = "Black";
    Car.price = "$62,000";
    document.getElementById("Constant").innerHTML = "The cost of the " +
    Car.Model + " is " + Car.price;
}

var X = 90;
document.write(X);
{
    let X = 50;
    document.write("<br>" + X);
}
document.write("<br>" + X);

function this_F() {
let car = {
    make: "Ford ",
    Model: "Raptor ",
    year: "2014 ",
    color: "Black ",
    description : function() {
        return "The car is a " + this.year + this.color + this.make + this.Model;
    }
  };
document.getElementById("this").innerHTML = car.description();
}

function myF() {
var text = "";
var i;
for (x = 0; x < 30; x++) {
    if (x === 26) {break; }
    text += "Today is the " + x + "<br>";
}
document.getElementById("brk").innerHTML = text;
}

function myContinue() {
var text = "";
var i;
for (x = 0; x < 32; x++) {
    if (x === 32) {continue; }
    text += "Today is the " + x + "<br>";
    }
    document.getElementById("con").innerHTML = text;
}

