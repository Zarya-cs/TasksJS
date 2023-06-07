/* 4 задача */
function isBinaryPalindrome(num) {
    let binary = num.toString(2);
    let len = binary.length;
    for (let i = 0; i < len / 2; i++) {
        if (binary[i] !== binary[len - 1 - i]) {
            return false;
        }
    }
    return true;
}
document.getElementById('checkButtonFourth').addEventListener('click', function() {
    let num = parseInt(document.getElementById('numberInputFourth').value);
    const result = document.getElementById('resultFourth');
    if (isBinaryPalindrome(num)) {
        result.innerText = 'Данное число является палиндромом в двоичном представлении';
    } else {
        result.innerText = 'Данное число не является палиндромом в двоичном представлении';
    }
});