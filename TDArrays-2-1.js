let generateButton = document.getElementById("generate2.1");
let sizeInput = document.getElementById("size1.1");
let matrixTable = document.getElementById("matrix1.1");
let resultDiv = document.getElementById("result1.1");

generateButton.addEventListener("click", function() {

    let size = parseInt(sizeInput.value);

    if (size < 1) {
        document.getElementById('result1.1').textContent = 'Введите целое положительное число'
        return;
    }

    // генерация матрицы
    let matrix = [];
    for (let i = 0; i < size; i++) {
        matrix[i] = [];
        for (let j = 0; j < size; j++) {
            matrix[i][j] = Math.floor(Math.random() * 10);
        }
    }

    // вывод матрицы на страницу
    matrixTable.innerHTML = "";
    for (let i = 0; i < size; i++) {
        let row = document.createElement("tr");
        for (let j = 0; j < size; j++) {
            let cell = document.createElement("td");
            cell.textContent = matrix[i][j];
            row.appendChild(cell);
        }
        matrixTable.appendChild(row);
    }

    // максимальный элемент на главной диагонали
    let maxMain = matrix[0][0];
    let maxMainCoords = [0, 0];
    for (let i = 0; i < size; i++) {
        if (matrix[i][i] > maxMain) {
            maxMain = matrix[i][i];
            maxMainCoords = [i, i];
        }
    }
    // подсветка ячеек на главной диагонали
    for (let i = 0; i < size; i++) {
        if (matrix[i][i] === maxMain) {
            matrixTable.rows[i].cells[i].classList.add("positive");
        }
    }

    // максимальный элемент на побочной диагонали
    let maxSide = matrix[0][size - 1];
    let maxSideCoords = [0, size - 1];
    for (let i = 0; i < size; i++) {
        if (matrix[i][size - 1 - i] > maxSide) {
            maxSide = matrix[i][size - 1 - i];
            maxSideCoords = [i, size - 1 - i];
        }
    }
    for (let i = 0; i < size; i++) {
        if (matrix[i][size - 1 - i] === maxSide) {
            matrixTable.rows[i].cells[size - 1 - i].classList.add("positive1");
        }
    }
    resultDiv.innerHTML = "Максимальный элемент на главной диагонали: " + maxMain + " (координаты: [" + maxMainCoords[0] + ", " + maxMainCoords[1] + "])<br>";
    resultDiv.innerHTML += "Максимальный элемент на побочной диагонали: " + maxSide + " (координаты: [" + maxSideCoords[0] + ", " + maxSideCoords[1] + "])";
});
