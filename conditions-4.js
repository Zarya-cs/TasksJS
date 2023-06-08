/* 4 задача */
function isBinaryPalindrome(num) {
    let binary = (num >>> 0).toString(2);
    let zeros = binary.length % 4

    if (zeros !== 0) {
        for (let i = 0; i < 4 - zeros; i++) {
            binary = "0" + binary
        }
    }

    console.log(binary)

    let len = binary.length;
    for (let i = 0; i < len / 2; i++) {
        if (binary[i] !== binary[len - 1 - i]) {
            return false;
        }
    }
    return true;
}
document.getElementById('checkButtonFourth').addEventListener('click', function(event) {
    event.preventDefault()
    let num = parseInt(document.getElementById('numberInputFourth').value);
    const result = document.getElementById('resultFourth');
    if (isBinaryPalindrome(num)) {
        result.innerText = 'Данное число является палиндромом в двоичном представлении';
    } else {
        result.innerText = 'Данное число не является палиндромом в двоичном представлении';
    }
});