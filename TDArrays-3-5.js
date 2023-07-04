let generateButton35 = document.getElementById("generate35");
let rowsInput35 = document.getElementById("rows35");
let columnsInput35 = document.getElementById("columns35");
let matrixTable35 = document.getElementById("arrayTD35");
let swapBtn35 = document.getElementById("swapBtn35")
generateButton35.addEventListener("click", function() {
    let rows = parseInt(rowsInput35.value);
    let columns = parseInt(columnsInput35.value);

    let array = [];
    for (let i = 0; i < rows; i++) {
        array[i] = [];
        for (let j = 0; j < columns; j++) {
            array[i][j] = Math.floor(Math.random() * 100);
        }
    }

    matrixTable35.innerHTML = "";
    for (let i = 0; i < rows; i++) {
        let row = document.createElement("tr");
        for (let j = 0; j < columns; j++) {
            let cell = document.createElement("td");
            cell.textContent = array[i][j];
            row.appendChild(cell);
        }
        matrixTable35.appendChild(row);
    }
})

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
    matrix = swapMatrix(matrix)

    // Обновление таблицы
    for (let i = 0; i < matrix.length; i++) {
        let cells = rows[i].getElementsByTagName("td");
        for (let j = 0; j < cells.length; j++) {
            cells[j].textContent = matrix[i][j];
        }
    }
});

function swapMatrix(matrix) {
    let mainDiagonal = []
    let subDiagonal = []

    let rows = matrix.length
    let columns = matrix[0].length

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            if (i === j && matrix[i][j]) {
                mainDiagonal.push(matrix[i][j])
            }
        }
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            if (i === j && matrix[i][j]) {
                matrix[i][j] = mainDiagonal.pop()
            }
        }
    }


    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            if (i + j === columns - 1 && matrix[i][j]) {
                subDiagonal.push(matrix[i][j])
            }
        }
    }


    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            if (i + j === columns - 1 && matrix[i][j]) {
                matrix[i][j] = subDiagonal.pop()
            }
        }
    }

    return matrix
}