function testrun() {
    var p1 = "This is ";
    var p2 = "the concat method!";
    var sentence = p1.concat(p2);
    document.getElementById("test").innerHTML = sentence;
}

function run() {
    var sen = "This is how you slice pizza";
    var sec = sen.slice(16);
    document.getElementById("Slice").innerHTML = sec;
}

function upper_case() {
    var str = "Hello, World!";
    var res = str.toUpperCase();
    document.getElementById("run").innerHTML = res;
}
/** Search() Method */
function search() {
    var str = "Where is my slice of pizza?";
    var x = str.search("pizza");
    document.getElementById("run2").innerHTML = x;
}
/** toString */
function to_String() {
    var X = 200;
    document.getElementById("run3").innerHTML = X.toString();
}
/** toPrecision */
function to_Precision() {
    var X = 1294.6789;
    document.getElementById("run4").innerHTML = X.toPrecision(6);
}
/** toFixed */
function to_Fixed() {
    var X = 123.456789;
    var Y = X.toFixed(4);
    document.getElementById("run5").innerHTML = Y;
}
/** valueOf */
function value_Of() {
    var str = "Hello, World!";
    var res = str.valueOf();
    document.getElementById("run6").innerHTML = res;
}