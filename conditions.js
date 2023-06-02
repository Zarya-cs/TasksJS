
document.getElementById("checkButton").addEventListener("click", function() {
    let number = document.getElementById("number-1").value;
    if (number < 1 || number > 7) {
        document.getElementById("result-1").innerHTML = "Некорректное значение";
    }else {
    let days = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота","Воскресенье"];
    document.getElementById("result-1").innerHTML = "День недели: " + days[number - 1];}
});

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