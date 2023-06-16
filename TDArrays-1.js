let createBtn = document.getElementById("createBtn");
let matrixContainer = document.getElementById("matrix");

createBtn.addEventListener("click", function() {
    let rows = document.getElementById("rows").value;
    let columns = document.getElementById("columns").value;

    if (rows && columns) {
        let matrix = "<table>";
        for (let i = 0; i < columns; i++) {
            matrix += "<tr>";
            for (let j = 0; j < rows; j++) {
                let identifier = `matrix-${i}-${j}`
                matrix += `<td><input type='text' name='${identifier}' id='${identifier}' style="width: 60px"></td>`;
            }
            matrix += "</tr>";
        }
        matrix += "</table>";
        matrixContainer.innerHTML = matrix;
    }
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

    console.log("made array")
    console.log(array)

    if (rows === "1") {
        console.log("row 1")
        render(array)
        return
    }

    if (rows === "2") {
        console.log("row 2")
        let newArray = []

        newArray.push(array[1])
        newArray.push(array[0])

        render(newArray)
        return
    }

    console.log("row 3+")

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
    console.log("render")
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

    console.log("render done")
}