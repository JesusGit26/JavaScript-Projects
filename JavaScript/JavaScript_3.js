function displayType(character) {
    var characterType = character.getAttribute("data-character-type");
    alert(characterType + " is part of the " + character.innerHTML + " Sports line up!");
}