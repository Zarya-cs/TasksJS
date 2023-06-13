document.getElementById("buttonNOD").addEventListener("click", function(event) {
    event.preventDefault();
    let number1 = parseInt(document.getElementById("number1").value);
    let number2 = parseInt(document.getElementById("number2").value);
    let nod = 1;
    for (let i = 1; i <= number1 && i <= number2; i++) {
        if (number1 % i == 0 && number2 % i == 0) {
            nod = i;
        }
    }
    document.getElementById("resultNOD").innerHTML = "Наибольший общий делитель: " + nod;
});