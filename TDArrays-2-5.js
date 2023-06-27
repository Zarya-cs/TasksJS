let generateButton5 = document.getElementById("generate2.5");
let sizeInput5 = document.getElementById("size2.5");
let resultDiv5 = document.getElementById("result2.5");
let matrixTable5 = document.getElementById("matrix2.5");
generateButton5.addEventListener("click", function () {

    let size5 = parseInt(sizeInput5.value);

    if (size5 < 1) {
        document.getElementById('result2.5').textContent = 'Введите целое положительное число'
        return;
    }

    // генерация матрицы
    let matrix5 = [];
    let alphabet = "ABCDEFGHIKLMNOPQRSTUVWXYZ";
    let charCount = {};
    for (let i = 0; i < size5; i++) {
        matrix5[i] = [];
        for (let j = 0; j < size5; j++) {
            let randomIndex = Math.floor(Math.random() * alphabet.length);
            let randomChar = alphabet.charAt(randomIndex);
            matrix5[i][j] = randomChar;
            if (charCount[randomChar]) {
                charCount[randomChar]++;
            } else {
                charCount[randomChar] = 1;
            }
        }
    }

    // Вывод матрицы на страницу
    matrixTable5.innerHTML = "";
    for (let i = 0; i < size5; i++) {
        let row = document.createElement("tr");
        for (let j = 0; j < size5; j++) {
            let cell = document.createElement("td");
            cell.textContent = matrix5[i][j];
            row.appendChild(cell);
        }
        matrixTable5.appendChild(row);
    }

    // Вывод количества вхождений каждого символа
    let resultString = "";
    for (let char in charCount) {
        resultString += ` ${char}:${charCount[char]}`;
    }
    resultDiv5.textContent = resultString;
})