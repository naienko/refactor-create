const personName = document.querySelector("nameArea");
console.log(personName);

const pressPlay = () => {
    //This checks for a name in the field
    if (genForm.nameArea.value == "") {
        alert("You must enter a character name.")
        genForm.nameArea.focus()
        return false
    }
}