let number1 = document.getElementById("number1");
let recursion1 = document.getElementById("recursion1");
let result1 = document.getElementById("result1");

recursion1.addEventListener("click",() => {
    let recursionLimit = number1.value

    if (isNaN(recursionLimit) ||
        isNaN(parseFloat(recursionLimit))) {
        result1.textContent = "Строка не является числом!"
        return
    }

    recursionLimit = Number(recursionLimit)

    if (recursionLimit < 1) {
        result1.textContent = "Число должно быть натуральным!"
        return;
    }

    result1.textContent = recursionF(recursionLimit, "")
})

function recursionF (counter) {
    if (counter !== 1) {
        return recursionF(counter -1) + ", " + counter
    }

    return  counter + ""
}