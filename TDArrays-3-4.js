let generateButton34 = document.getElementById("generate3.4");
let sizeInput34 = document.getElementById("size3.4");
let matrixTable34 = document.getElementById("matrix3.4");
let swapBtn34 = document.getElementById("swapBtn3.4")
generateButton34.addEventListener("click", function () {
    let size34 = parseInt(sizeInput34.value);

    if (size34 < 1) {
        document.getElementById('result3.4').textContent = 'Введите целое положительное число'
        return;
    }

    // генерация матрицы
    let matrix34 = [];
    for (let i = 0; i < size34; i++) {
        matrix34[i] = [];
        for (let j = 0; j < size34; j++) {
            matrix34[i][j] = Math.floor(Math.random() * 10);
        }
    }

    // Вывод матрицы
    matrixTable34.innerHTML = "";
    for (let i = 0; i < size34; i++) {
        let row = document.createElement("tr");
        for (let j = 0; j < size34; j++) {
            let cell = document.createElement("td");
            cell.textContent = matrix34[i][j];
            row.appendChild(cell);
        }
        matrixTable34.appendChild(row);
    }
});
swapBtn34.addEventListener("click", function () {
    // Получение значения первой строки
    let firstRowElements = [];
    let firstRowCells = matrixTable34.rows[0].cells;
    for (let j = 0; j < firstRowCells.length; j++) {
        firstRowElements.push(parseInt(firstRowCells[j].textContent));
    }

    // Сортировка у столбцов по убыванию значений первой строки
    let columnsCount = matrixTable34.rows[0].cells.length;
    let size34 = matrixTable34.rows.length;
    for (let j = 0; j < columnsCount; j++) {
        let columnElements = [];
        for (let i = 0; i < size34; i++) {
            columnElements.push(parseInt(matrixTable34.rows[i].cells[j].textContent));
        }

        columnElements.sort(function (a, b) {
            return b - a;
        });

        // Перезапись значений элементов столбца в матрицу
        for (let i = 0; i < size34; i++) {
            matrixTable34.rows[i].cells[j].textContent = columnElements[i];
        }
    }
});
