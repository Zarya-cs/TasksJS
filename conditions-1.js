
/* 1 задача */
document.getElementById("checkButton").addEventListener("click", function() {
    let number = document.getElementById("number-1").value;
    if (number < 1 || number > 7) {
        document.getElementById("result-1").innerHTML = "Некорректное значение";
    }else {
    let days = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота","Воскресенье"];
    document.getElementById("result-1").innerHTML = "День недели: " + days[number - 1];}
});