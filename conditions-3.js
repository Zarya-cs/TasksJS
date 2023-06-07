/* 3 задача */

let numberInput = document.getElementById('numberInput');
let checkButtonThree = document.getElementById('checkButton-3');
let resultThree = document.getElementById('resultThree');

checkButtonThree.addEventListener('click', function() {
    let number = numberInput.value;

    if (number.length !== 4 || isNaN(number)) {
        resultThree.textContent = 'Введите четырехзначное число!';
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
            resultThree.textContent = 'Это счастливый билет, поздравляю!';
        } else {
            resultThree.textContent = 'Это не счастливый билет, потому что ты - лох :(';
        }
    }
})