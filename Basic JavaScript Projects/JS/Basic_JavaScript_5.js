document.write(typeof 6);

function my_Function() {
    document.write(3E320);
    document.getElementById("test").innerHTML = 0/0;
}

function true_Boo() {
    document.write(10 < 2);
    document.getElementById("true").innerHTML = "true"
}

console.log(4 + 6);

function type_Coe() {
    document.write("190" + 4);
    document.getElementById("tack").innerHTML = ""
}

function double_E() {
    document.write(10 == 0);
    document.getElementById("equal").innerHTML = ""
}

function triple_E() {
    X = 20;
    Y = 20;
    document.write(X === Y);
    document.getElementById("equal").innerHTML = ""
}

function triple_E2() {
    X = 2;
    Y = 20;
    document.write(X === Y);
    document.getElementById("equal").innerHTML = ""
}

function triple_E3() {
    X = "20";
    Y = 20;
    document.write(X === Y);
    document.getElementById("equal").innerHTML = ""
}

function triple_E4() {
    Y = 32;
    Y = 20;
    document.write(Y === Y);
    document.getElementById("equal").innerHTML = ""
}

function And() {
    document.write(5 > 2 && 10 > 4);
    document.getElementById("and").innerHTML = ""
}

function And_F() {
    document.write(5 > 10 && 10 > 4);
    document.getElementById("and_f").innerHTML = ""
}

function Or_T() {
    document.write(5 > 2 && 10 > 4);
    document.getElementById("or_t").innerHTML = ""
}

function Or_F() {
    document.write(5 > 10 && 10 > 20);
    document.getElementById("or_f").innerHTML = ""
}

function not_Function() {
    document.getElementById("not").innerHTML = !(5 > 10);
}

function not_Function1() {
    document.getElementById("not").innerHTML = !(20 > 10);
}