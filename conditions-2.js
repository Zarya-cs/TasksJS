/* 2 задача */
function checkPalindrome() {
    let number = document.getElementById("number-2").value;
    if (number.length != 4) {
        document.getElementById("result-2").innerHTML = "Число должно быть четырехзначным";
        return;
    }
    if (number[0] == number[3] && number[1] == number[2]) {
        document.getElementById("result-2").innerHTML = "Число является палиндромом";
    } else {
        document.getElementById("result-2").innerHTML = "Число не является палиндромом";
    }
}