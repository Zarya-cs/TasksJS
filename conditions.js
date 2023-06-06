
document.getElementById("checkButton").addEventListener("click", function() {
    let number = document.getElementById("number-1").value;
    if (number < 1 || number > 7) {
        document.getElementById("result-1").innerHTML = "Некорректное значение";
    }else {
    let days = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота","Воскресенье"];
    document.getElementById("result-1").innerHTML = "День недели: " + days[number - 1];}
});

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
/* 3 задача */
let numberInput = document.getElementById('number-3');
let checkButton = document.getElementById('checkButton-3');
let result = document.getElementById('result-3');

checkButton.addEventListener('click', function() {
    let number = numberInput.value;

    if (number.length !== 4 || isNaN(number)) {
        result.textContent = 'Введите четырехзначное число!';
    } else {
        let leftHalf = number.slice(0, 2);
        let rightHalf = number.slice(2);

        let leftSum = 0;
        let rightSum = 0;

        for (let i = 0; i < leftHalf.length; i++) {
            leftSum += parseInt(leftHalf[i]);
            rightSum += parseInt(rightHalf[i]);
        }

        if (leftSum === rightSum) {
            result.textContent = 'Это счастливый билет, поздравляю!';
        } else {
            result.textContent = 'Это не счастливый билет, потому что ты - лох :(';
        }
    }
})