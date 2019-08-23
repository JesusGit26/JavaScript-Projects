function my_Dict() {
    var Car = {
        Body: "Pick-up",
        Color: "Matte FrostWhite",
        Make: "Ford",
        Model: "Raptor",
        Wheels: 4,
    };
    delete Car.Model;
    document.getElementById("Dictionary").innerHTML = Car.Model;
}