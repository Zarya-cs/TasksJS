document.getElementById("buttonM").addEventListener("click", function() {
    let n = document.getElementById("numberM").value;
    let octal = n.toString(8);
    let isMonotonic = true;
    for (let i = 0; i < octal.length - 1; i++) {
        if (octal[i] < octal[i+1]) {
            isMonotonic = false;
            break;
        }
    }
    if (isMonotonic) {
        document.getElementById("resultM").innerHTML = "Восьмеричное представление числа " + n + " имеет строго монотонную последовательность цифр.";
    } else {
        document.getElementById("resultM").innerHTML = "Восьмеричное представление числа " + n + " не имеет строго монотонной последовательности цифр.";
    }
});