/* 1 задача */
let dayInput = document.getElementById('dayInput');
let checkButton = document.getElementById('checkButton');
let result = document.getElementById('resultOne');

checkButton.addEventListener('click', (event) => {
    event.preventDefault()
    let dayNumber = parseInt(dayInput.value);

    if (isNaN(dayNumber) || dayNumber < 1 || dayNumber > 7) {
        result.textContent = 'Введите корректное значение!';
    } else {
        let daysOfWeek = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота','Воскресенье'];
        let dayName = daysOfWeek[dayNumber - 1];
        result.textContent = `День недели: ${dayName}`;
    }
});
dayInput.addEventListener('input', function() {
    let dayNumber = parseInt(dayInput.value);

    checkButton.disabled = isNaN(dayNumber) || dayNumber < 1 || dayNumber > 7;
});