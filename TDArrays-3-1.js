let generateButton31 = document.getElementById("generate31");
let rowsInput31 = document.getElementById("rows31");
let columnsInput31 = document.getElementById("columns31");
let matrixTable31 = document.getElementById("arrayTD31");
let result31 = document.getElementById("result31")

generateButton31.addEventListener("click", function() {
    let rows = parseInt(rowsInput31.value);
    let columns = parseInt(columnsInput31.value);

    let array = [];
    for (let i = 0; i < rows; i++) {
        array[i] = [];
        for (let j = 0; j < columns; j++) {
            array[i][j] = Math.abs(i - j) + 1;
        }
    }

    matrixTable31.innerHTML = "";
    for (let i = 0; i < rows; i++) {
        let row = document.createElement("tr");
        for (let j = 0; j < columns; j++) {
            let cell = document.createElement("td");
            cell.textContent = array[i][j];
            row.appendChild(cell);
        }
        matrixTable31.appendChild(row);
    }
})