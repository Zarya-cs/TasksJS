let forms = document.querySelectorAll('form')
for (let form of forms) {
    form.addEventListener("submit", (event) => {
        event.preventDefault()
    })
}

function render(matrix, number) {
    let matrixTable = "<table class='matrix'>"

    for (let i in matrix) {
        matrixTable += "<tr>"

        for (let j in matrix[i]) {
            let cell = `cell${number}-${i}-${j}`;
            matrixTable += `<td id='${cell}'>${matrix[i][j]}</td>`;
        }
        matrixTable += "</tr>"
    }
    matrixTable += "</table>";

    document.getElementById("render" + number).innerHTML = matrixTable;
}

// Берет значения из инпутов
let collectValues = function (columns, rows, number) {
    let array = []
    for (let i = 0; i < columns; i++) {
        let miniArray = [];

        for (let j = 0; j < rows; j++) {
            let identifier = `matrix${number}-${i}-${j}`
            let inputValue = document.getElementById(identifier).value
            miniArray.push(inputValue)
        }

        array.push(miniArray)
    }
    return array
}

function createInputs(number, container) {
    let rows = document.getElementById("rows" + number).value;
    let columns = document.getElementById("columns" + number).value;

    if (rows && columns) {
        let matrix = "<table>";

        for (let i = 0; i < columns; i++) {
            matrix += "<tr>"

            for (let j = 0; j < rows; j++) {
                let identifier = `matrix${number}-${i}-${j}`
                matrix += `<td><input type='text' name='${identifier}' id='${identifier}' style="width: 60px"></td>`;

            }
            matrix += "</tr>"
        }
        matrix += "</table>";
        container.innerHTML = matrix;
    }
}