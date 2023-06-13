document.getElementById("check").addEventListener("click", function(event){
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let sum1 = 0, sum2 = 0;
    for (let i = 1; i < num1; i++) {
        if (num1 % i == 0) {
            sum1 += i;
        }
    }
    for (let j = 1; j < num2; j++) {
        if (num2 % j == 0) {
            sum2 += j;
        }
        }
    if (sum1 == num2 && sum2 == num1) {
        document.getElementById("resultC1").innerHTML = "Числа " + num1 + " и " + num2 + " являются дружественными";
    } else {
        document.getElementById("resultC1").innerHTML = "Числа " + num1 + " и " + num2 + " не являются дружественными";
    }
});