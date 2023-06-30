let generateButton33 = document.getElementById("generate3.3");
let sizeInput33 = document.getElementById("size3.3");
let resultDiv33 = document.getElementById("result3.3");
let matrixTable33 = document.getElementById("matrix3.3");
generateButton33.addEventListener("click", function () {
    let size33 = parseInt(sizeInput33.value);

    if (size33 < 1) {
        document.getElementById('result3.3').textContent = 'Введите целое положительное число'
        return;
    }

    // генерация матрицы
    let matrix33 = [];
    for (let i = 0; i < size33; i++) {
        matrix33[i] = [];
        for (let j = 0; j < size33; j++) {
            matrix33[i][j] = Math.floor(Math.random() * 10);
        }
    }

    // Вывод матрицы
    matrixTable33.innerHTML = "";
    for (let i = 0; i < size33; i++) {
        let row = document.createElement("tr");
        for (let j = 0; j < size33; j++) {
            let cell = document.createElement("td");
            cell.textContent = matrix33[i][j];
            row.appendChild(cell);
        }
        matrixTable33.appendChild(row);
    }

    // Нахождение минимального элемента ниже побочной диагонали
    let minElement = Infinity;
    for (let i = 0; i < size33; i++) {
        for (let j = 0; j < size33; j++) {
            if (j > size33 - i - 1 && matrix33[i][j] < minElement) {
                minElement = matrix33[i][j];
            }
        }
    }

    document.getElementById('result3.3').textContent = 'Минимальный элемент ниже побочной диагонали: ' + minElement;

    // Создание нижней части матрицы
    let lowerMatrix33 = [];
    for (let i = 0; i < size33; i++) {
        lowerMatrix33[i] = [];
        for (let j = 0; j < size33; j++) {
            if (j >= size33 - i - 1) {
                lowerMatrix33[i][j] = matrix33[i][j];
            } else {
                lowerMatrix33[i][j] = "";
            }
        }
    }

    // Вывод нижней части матрицы
    for (let i = 0; i < size33; i++) {
        let row = document.createElement("tr");
        for (let j = 0; j < size33; j++) {
            let cell = document.createElement("td");
            cell.textContent = lowerMatrix33[i][j];
            row.appendChild(cell);
        }
        matrixTable33.appendChild(row);
    }
});