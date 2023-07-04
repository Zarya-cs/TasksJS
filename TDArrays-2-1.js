let generateButton = document.getElementById("generate21");
let rowsInput = document.getElementById("rows21");
let columnsInput = document.getElementById("columns21");
let matrixTable = document.getElementById("arrayTD21");
let result21 = document.getElementById("result21")
let result211 = document.getElementById("result211")


generateButton.addEventListener("click", function() {
    let rows = parseInt(rowsInput.value);
    let columns = parseInt(columnsInput.value);

    let array = [];
    for (let i = 0; i < rows; i++) {
        array[i] = [];
        for (let j = 0; j < columns; j++) {
            array[i][j] = Math.floor(Math.random() * 100);
        }
    }

    matrixTable.innerHTML = "";
    for (let i = 0; i < rows; i++) {
        let row = document.createElement("tr");
        for (let j = 0; j < columns; j++) {
            let cell = document.createElement("td");
            cell.textContent = array[i][j];
            row.appendChild(cell);
        }
        matrixTable.appendChild(row);
    }

    let maxDiagonalElement = array[0][0];
    let maxDiagonalRow = 0;
    let maxDiagonalColumn = 0;

    let maxSecondaryDiagonalElement = array[0][columns - 1];
    let maxSecondaryDiagonalRow = 0;
    let maxSecondaryDiagonalColumn = columns - 1;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            if (i === j && array[i][j] > maxDiagonalElement) {
                maxDiagonalElement = array[i][j];
                maxDiagonalRow = i;
                maxDiagonalColumn = j;
            }
            if (i + j === columns - 1 && array[i][j] > maxSecondaryDiagonalElement) {
                maxSecondaryDiagonalElement = array[i][j];
                maxSecondaryDiagonalRow = i;
                maxSecondaryDiagonalColumn = j;
            }
        }
    }
    result21.textContent = `Максимальный элемент на главной диагонали : ${maxDiagonalElement} его координаты (${maxDiagonalColumn},${maxDiagonalRow})`
    result211.textContent = `Максимальный элемент на побочной диагонали : ${maxSecondaryDiagonalElement} его координаты (${maxSecondaryDiagonalColumn},${maxSecondaryDiagonalRow})`

    let diagonalCell = matrixTable.rows[maxDiagonalRow].cells[maxDiagonalColumn];
    diagonalCell.classList.add("positive");

    let secondaryDiagonalCell = matrixTable.rows[maxSecondaryDiagonalRow].cells[maxSecondaryDiagonalColumn];
    secondaryDiagonalCell.classList.add("positive");
});