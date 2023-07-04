let generateButton23 = document.getElementById("generate23");
let rowsInput23 = document.getElementById("rows23");
let columnsInput23 = document.getElementById("columns23");
let matrixTable23 = document.getElementById("arrayTD23");
let result23 = document.getElementById("result23")
generateButton23.addEventListener("click", function() {
    let rows = parseInt(rowsInput23.value);
    let columns = parseInt(columnsInput23.value);

    let array = [];
    for (let i = 0; i < rows; i++) {
        array[i] = [];
        for (let j = 0; j < columns; j++) {
            array[i][j] = Math.floor(Math.random() * 100);
        }
    }

    matrixTable23.innerHTML = "";
    for (let i = 0; i < rows; i++) {
        let row = document.createElement("tr");
        for (let j = 0; j < columns; j++) {
            let cell = document.createElement("td");
            cell.textContent = array[i][j];
            row.appendChild(cell);
        }
        matrixTable23.appendChild(row);
    }
    let minInRows = [];
    let minInColumns = [];
    for (let i = 0; i < rows; i++) {
        let minRow = array[i][0];
        for (let j = 1; j < columns; j++) {
            if (array[i][j] < minRow) {
                minRow = array[i][j];
            }
        }
        minInRows.push(minRow);
    }

    for (let j = 0; j < columns; j++) {
        let minColumn = array[0][j];
        for (let i = 1; i < rows; i++) {
            if (array[i][j] < minColumn) {
                minColumn = array[i][j];
            }
        }
        minInColumns.push(minColumn);
    }

// Находим элементы, которые являются минимальными в строке и столбце одновременно
    let minElements = [];
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            if (array[i][j] === minInRows[i] && array[i][j] === minInColumns[j]) {
                minElements.push({
                    value: array[i][j],
                    row: i,
                    column: j
                });
            }
        }
    }

// Выводим значения и координаты минимальных элементов
    result23.innerHTML = "";
    for (let i = 0; i < minElements.length; i++) {
        let p = document.createElement("p");
        p.textContent = `Значение: ${minElements[i].value}, Координаты: (${minElements[i].row}, ${minElements[i].column})`;
        result23.appendChild(p);
    }

// Выделяем минимальные элементы в таблице
    for (let i = 0; i < minElements.length; i++) {
        let cell = matrixTable23.rows[minElements[i].row].cells[minElements[i].column];
        cell.classList.add("positive");
    }
})