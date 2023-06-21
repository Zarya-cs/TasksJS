let forms = document.querySelectorAll('form')
for (let form of forms) {
    form.addEventListener("submit", (event) => {
        event.preventDefault()
    })
}
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

function createInputs (number) {
    let rows = document.getElementById("rows" + number).value;
    let columns = document.getElementById("columns" + number).value;
    let matrix = document.getElementById("matrix" + number)
    if (rows && columns) {
        let table = document.createElement("table")
        matrix.appendChild(table)
        for (let i = 0; i < columns; i++) {
            let row = document.createElement("tr")
            table.appendChild(row)
            for (let j = 0; j < rows; j++) {
                let cell = document.createElement("td")
                row.appendChild(cell)
                let identifier = `matrix-${i}-${j}`
                cell.innerHTML = `<input type='text' name='${identifier}' id='${identifier}' style="width: 60px>`


            }
        }
    }
}