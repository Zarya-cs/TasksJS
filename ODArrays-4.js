document.getElementById("calculate").addEventListener("click", function(event){
    event.preventDefault();
    let numberC = parseInt(document.getElementById("numberC").value);
    let array = document.getElementById("arrayFourth").value.split(",");
    let sum = 0;
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (parseInt(array[i]) > numberC) {
            sum += parseInt(array[i]);
            count++;
        }
    }
    let average = sum / count;
    document.getElementById("resultArrays").innerHTML = "Среднее арифметическое элементов массива, которые превышают число " + numberC + ": " + average;
});