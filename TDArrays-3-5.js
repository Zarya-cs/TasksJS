let generateButton35 = document.getElementById("generate3.5");
let sizeInput35 = document.getElementById("size3.5");
let matrixTable35 = document.getElementById("matrix3.5");
let swapBtn35 = document.getElementById("swapBtn3.5")
generateButton35.addEventListener("click", function () {
    let size35 = parseInt(sizeInput35.value);

    if (size35 < 1) {
        document.getElementById('result3.5').textContent = 'Введите целое положительное число'
        return;
    }

    // генерация матрицы
    let matrix35 = [];
    for (let i = 0; i < size35; i++) {
        matrix35[i] = [];
        for (let j = 0; j < size35; j++) {
            matrix35[i][j] = Math.floor(Math.random() * 30);
        }
    }

    // Вывод матрицы
    matrixTable35.innerHTML = "";
    for (let i = 0; i < size35; i++) {
        let row = document.createElement("tr");
        for (let j = 0; j < size35; j++) {
            let cell = document.createElement("td");
            cell.textContent = matrix35[i][j];
            row.appendChild(cell);
        }
        matrixTable35.appendChild(row);
    }
});

swapBtn35.addEventListener("click", function () {
    let rows = matrixTable35.getElementsByTagName("tr");
    let matrix = [];

    // Извлечение значений из таблицы и сохранение в матрице
    for (let i = 0; i < rows.length; i++) {
        let cells = rows[i].getElementsByTagName("td");
        let row = [];
        for (let j = 0; j < cells.length; j++) {
            row.push(parseInt(cells[j].textContent));
        }
        matrix.push(row);
    }

    // Переворачивание диагонали
    let size = matrix.length;
    for (let i = 0; i < size; i++) {
        let temp = matrix[i][i];
        matrix[i][i] = matrix[i][size - i - 1];
        matrix[i][size - i - 1] = temp;
    }

    // Обновление таблицы
    for (let i = 0; i < size; i++) {
        let cells = rows[i].getElementsByTagName("td");
        for (let j = 0; j < cells.length; j++) {
            cells[j].textContent = matrix[i][j];
        }
    }
});