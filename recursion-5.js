document.getElementById("checkNumberN").addEventListener("click", function() {
    let number = parseInt(document.getElementById("NN").value);
    let resultElement = document.getElementById("result55");

    let sum = calculateSum(number);
    resultElement.textContent = "Сумма цифр числа: " + sum;
});

function calculateSum(number) {
    let sum = 0;

    while (number > 0) {
        sum += number % 10;
        number = Math.floor(number / 10);
    }

    return sum;
}