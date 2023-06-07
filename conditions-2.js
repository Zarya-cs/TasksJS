/* 2 задача */
checkButtonTwo = document.getElementById('checkButtonTwo');
checkButtonTwo.addEventListener('click', function() {
    let number = document.getElementById('numberInputTwo').value;
    if (number.length !== 4) {
        document.getElementById('resultTwo').textContent = 'Введите четырехзначное число';
        return;
    }
    let digits = number.split('');
    if (digits[0] === digits[3] && digits[1] === digits[2]) {
        document.getElementById('resultTwo').textContent = 'Число является палиндромом';
    } else {
        document.getElementById('resultTwo').textContent = 'Число не является палиндромом';
    }
});