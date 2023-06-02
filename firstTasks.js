
function getDayName(dayNumber) {
    let days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота','Воскресенье'];
    if (dayNumber < 1 || dayNumber > 7) {
        return ('Некорректное значение')
    }
    return days[dayNumber-1];

}

    function showDayName() {
    let dayNumber = document.getElementById('dayNumber').value;
    let dayName = getDayName(dayNumber);
    document.getElementById('result').innerHTML = dayName;}
