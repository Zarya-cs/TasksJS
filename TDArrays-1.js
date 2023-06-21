let createBtn = document.getElementById("createBtn");
let matrixContainer = document.getElementById("matrix");

createBtn.addEventListener("click", function() {
    createInputs(1)
});

let swapBtn = document.getElementById("swapBtn");
swapBtn.addEventListener("click", function() {
    let rows = document.getElementById("rows").value;
    let columns = document.getElementById("columns").value;
    console.log(rows, columns)

    let array = [];

    for (let i = 0; i < columns; i++) {
        let miniArray = [];

        for (let j = 0; j < rows; j++) {
            let identifier = `matrix-${i}-${j}`
            let inputValue = document.getElementById(identifier).value
            miniArray.push(inputValue)
        }

        array.push(miniArray)
    }

    if (columns === "1") {
        render(array)
        return
    }

    if (columns === "2") {
        let newArray = []

        newArray.push(array[1])
        newArray.push(array[0])

        render(newArray)
        return
    }

    let row1 = Math.floor(Math.random() * rows)
    let row2
    while (true) {
        row2 = Math.floor(Math.random() * rows)
        if (row1 !== row2) {
            break
        }
    }

    let temp = array[row1];
    array[row1] = array[row2];
    array[row2] = temp;

    render(array)
});

function render(matrix) {
    let matrixTable = "<table class='matrix'>"

    for (let i in matrix) {
        matrixTable += "<tr>"

        for (let j in matrix[i]) {
            matrixTable += `<td>${matrix[i][j]}</td>`;
        }

        matrixTable += "</tr>"
    }

    matrixTable += "</table>";

    document.getElementById("render1").innerHTML = matrixTable;
}