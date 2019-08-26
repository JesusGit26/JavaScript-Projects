var X = 15;
function Add_1() {
    document.write(23 + X + "<br>");
}
function Add_2() {
    document.write(X + 40 + "<br>");
}
Add_1();
Add_2();



function Add_3() {
    var X = 21;
    document.write(45 + 2 + X +  "<br>");
}
Add_3();

function Add_4() {
    var X = 1;
    console.log(1 + X);
}
Add_4();

function get_Date() {
    if (new Date().getDate() > 16) {
        document.getElementById("Greetings").innerHTML = "Yes";
    }
}

function over_5() {
    X = document.getElementById("test").Value;
    if (X = 555) {
        Pass = "Weclome";
    }
    else {
        Pass = "Denied";
    }
    document.getElementById("test1").innerHTML = Pass;
}

function Time_function() {
    var Time = new Date().getHours();
    var Replay;
    if (Time < 12 == Time > 0) {
        Replay = "It is morning time!";
    }
    else if (Time > 12 == Time < 18) {
        Replay = "It is the afternoon.";
    }
    else {
        Replay = "It is evening time.";
    }
    document.getElementById("Time_of_Day").innerHTML = Replay;
}