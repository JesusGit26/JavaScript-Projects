function addition_Function() {
    var addition = 2 + 2;
    document.getElementById("Math").innerHTML = "2 + 2 = " + addition;
}

function sub_Function() {
    var Subtraction = 5 - 2;
    document.getElementById("Sub").innerHTML = "5 - 2 = " + Subtraction;
}

function multiplication() {
    var simple_Math = 6 * 8;
    document.getElementById("mul").innerHTML = "6 x 8 = " + simple_Math;
}

function muliti() {
    var simple_Math = (7 + 4) * 13 / 2 -8;
    document.getElementById("all").innerHTML = "7 + 4, multiplied by 13, divided in half and then subtracted by 5 equals " + simple_Math;
}

function modulus_Op() {
    var simple_Math = 25 % 6;
    document.getElementById("per").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_Math;
}

function neg_Op() {
    var x = 10;
    document.getElementById("neg").innerHTML = -x;
}

function incer() {
    var x = 7;
    x++;
    document.getElementById("inc").innerHTML = x;
}

function decr() {
    var x = 16.5
    x--;
    document.getElementById("dec").innerHTML = x;

}


    
window.alert(Math.random() * 100);

function round_N() {
    var round = Math.round(45.5);
    document.getElementById("round").innerHTML = "Number after rounding : " + round;
}