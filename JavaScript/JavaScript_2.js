function validateForm() {
    var x = document.forms["myForm"]["firstname"]["lastname"]["Email"].value;
    if (x == "") {
        alert("Please fill every section");
        return false;
    }
}