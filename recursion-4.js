document.getElementById("checkNumber").addEventListener("click", function() {
    let number = parseInt(document.getElementById("NL").value);
    let result = document.getElementById("result54");

    if (isPowerOfTwo(number)) {
        result.textContent = "YES";
    } else {
        result.textContent = "NO";
    }
});

function isPowerOfTwo(number) {
    while (number > 1 && number % 2 === 0) {
        number /= 2;
    }

    return number === 1;
}