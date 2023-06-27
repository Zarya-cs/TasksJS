let generateButton4 = document.getElementById("generate2.4");
let sizeInput4 = document.getElementById("size2.4");
let resultDiv4 = document.getElementById("result2.4");
let matrixTable4 = document.getElementById("matrix2.4");
generateButton4.addEventListener("click", function () {

    let size4 = parseInt(sizeInput4.value);

    if (size4 < 1) {
        document.getElementById('result2.4').textContent = 'Введите целое положительное число'
        return;
    }

    // генерация матрицы
    let matrix4 = [];
    for (let i = 0; i < size4; i++) {
        matrix4[i] = [];
        for (let j = 0; j < size4; j++) {
            matrix4[i][j] = Math.floor(Math.random() * 10);
        }
    }

    // Вывод матрицы на страницу и подсчет четных и нечетных чисел
    matrixTable4.innerHTML = "";
    let oddNumbers = [];
    let evenNumbers = [];
    for (let i = 0; i < size4; i++) {
        for (let j = 0; j < size4; j++) {
            let cell = document.createElement("td");
            cell.textContent = matrix4[i][j];
            if (matrix4[i][j] % 2 === 0) {
                evenNumbers.push(matrix4[i][j]);
            } else {
                oddNumbers.push(matrix4[i][j]);
            }
        }
    }
    // Изменение порядка чисел
    let newMatrix = [...oddNumbers, ...evenNumbers];
    for (let i = 0; i < size4; i++) {
        let row = document.createElement("tr");
        for (let j = 0; j < size4; j++) {
            let index = i * size4 + j;
            let cell = document.createElement("td");
            cell.textContent = newMatrix[index];
            row.appendChild(cell);
        }
        matrixTable4.appendChild(row);
    }
    resultDiv4.textContent = `Количество нечетных чисел: ${oddNumbers.length}. Количество четных чисел: ${evenNumbers.length}.`;
})