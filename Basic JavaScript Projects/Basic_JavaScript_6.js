function Ride_Function() {
    var Height, Can_Ride;
    Height = document.getElementById("Height").value;
    Can_Ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_Ride + " to ride.";
}

function Vote_Function() {
    var Age, Can_Vote;
    Age = document.getElementById("Age").value;
    Can_Vote = (Age < 21) ? "You are too young":"You are old enough";
    document.getElementById("Vote").innerHTML = Can_Vote + " to vote.";
}

function Vechicle(Make, Model, Year, Color) {
    this.Vechicle_Make = Make;
    this.Vechicle_Model = Model;
    this.Vechicle_Year = Year;
    this.Vechicle_Color = Color;
}
var Jack = new Vechicle("Dodge","Viper", 2020 ,"Red");
var Emily = new Vechicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vechicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Key_Cons").innerHTML =
    "Erik drives a " + Erik.Vechicle_Color + " colored " + Erik.Vechicle_Model + " manufactured in " + Erik.Vechicle_Year; 
}

function Weight(Pounds, Ounces) {
    this.Weight_Pounds = Pounds;
    this.Weight_Ounces = Ounces;
}
var Ball = new Weight(0, "16oz");
var Hammer = new Weight(1, "12oz");
function myFunction1() {
    document.getElementById("New_and_This").innerHTML =
    "A hammer weight is " + Hammer.Weight_Pounds + " pounds and " + Hammer.Weight_Ounces + " give or take on the hammer.";
}

function myFunction2() {
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var Starting_point = 44;
        function Plus_one() {Starting_point += 2;}
        Plus_one();
        return Starting_point;
    }
}