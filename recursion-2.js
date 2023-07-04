let number2A = document.getElementById("number2A");
let number2B = document.getElementById("number2B");
let recursion2 = document.getElementById("recursion2");
let result2 = document.getElementById("result2");

recursion2.addEventListener("click",() => {
    let lowerLimit = number2A.value
    let higherLimit = number2B.value

    if (isNaN(lowerLimit) ||
        isNaN(parseFloat(lowerLimit))) {
        result2.textContent = "Строка не является числом!"
        return
    }

    lowerLimit = Number(lowerLimit)

    if (isNaN(higherLimit) ||
        isNaN(parseFloat(higherLimit))) {
        result2.textContent = "Строка не является числом!"
        return
    }

    higherLimit = Number(higherLimit)

    if (higherLimit < lowerLimit) {
        result2.textContent = "Число A больше B"
        return;
    }

    result2.textContent = recursionF2(higherLimit,lowerLimit, "")
})

function recursionF2 (counter,lowerLimit, result) {
    if (result === "") {
        result = counter + result;
    } else {
        result = counter + ", " + result;
    }

    if (counter === lowerLimit) {
        return  result
    }
    return recursionF2(counter -1,lowerLimit, result)

}