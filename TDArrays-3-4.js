let generateButton34 = document.getElementById("generate34");
let rowsInput34 = document.getElementById("rows34");
let columnsInput34 = document.getElementById("columns34");
let matrixTable34 = document.getElementById("arrayTD34");
let matrixTable344 = document.getElementById("arrayTD344");
let result34 = document.getElementById("result34")
let sort34 = document.getElementById("sort34")
generateButton34.addEventListener("click", function() {
    let rows = parseInt(rowsInput34.value);
    let columns = parseInt(columnsInput34.value);

    let array = [];
    for (let i = 0; i < rows; i++) {
        array[i] = [];
        for (let j = 0; j < columns; j++) {
            array[i][j] = Math.floor(Math.random() * 100);
        }
    }

    matrixTable34.innerHTML = "";
    for (let i = 0; i < rows; i++) {
        let row = document.createElement("tr");
        for (let j = 0; j < columns; j++) {
            let cell = document.createElement("td");
            cell.textContent = array[i][j];
            row.appendChild(cell);
        }
        matrixTable34.appendChild(row);
    }
})

sort34.addEventListener("click", function() {
    let rows = parseInt(rowsInput34.value);
    let columns = parseInt(columnsInput34.value);

    let array = [];
    for (let i = 0; i < rows; i++) {
        array[i] = [];
        for (let j = 0; j < columns; j++) {
            array[i][j] = parseInt(matrixTable34.rows[i].cells[j].textContent);
        }
    }

    // Сортировка массива по значению в первой строке
    array = array.sort(function(a, b) {
        return b[0] - a[0];
    });

    matrixTable344.innerHTML = "";
    for (let i = 0; i < rows; i++) {
        let row = document.createElement("tr");
        for (let j = 0; j < columns; j++) {
            let cell = document.createElement("td");
            cell.textContent = array[i][j];
            row.appendChild(cell);
        }
        matrixTable344.appendChild(row);
    }
});

