let createBtnn = document.getElementById("createBtn2");
let matrContainer = document.getElementById("matrix2");

createBtnn.addEventListener("click", function() {
    let rows = document.getElementById("row").value;
    let columns = document.getElementById("column").value;

    if (rows && columns) {
        let matrix2 = "<table>";
        for (let i = 0; i < columns; i++) {
            matrix2 += "<tr>";
            for (let j = 0; j < rows; j++) {
                let identifier = `matrix-${i}-${j}`
                matrix2 += `<td><input type='text' name='${identifier}' id='${identifier}' style="width: 60px"></td>`;
            }
            matrix2 += "</tr>";
        }
        matrix2 += "</table>";
        matrContainer.innerHTML = matrix2;
    }
});

let findBtn = document.getElementById("findBtn");
let resultContainer = document.getElementById("resultTD");

findBtn.addEventListener("click", function() {
    let rows = document.getElementById("row").value;
    let columns = document.getElementById("column").value;
    let maxElement = 0;
    let maxRowIndex = 0;
    let maxColumnIndex = 0;

    for (let i = 0; i < columns; i++) {
        for (let j = 0; j < rows; j++) {
            let identifier = `matrix-${i}-${j}`;
            let element = document.getElementById(identifier).value;
            if (Math.abs(element) > Math.abs(maxElement)) {
                maxElement = element;
                maxRowIndex = i;
                maxColumnIndex = j;
            }
        }
    }

    resultContainer.innerHTML = `Максимальный по модулю элемент: ${maxElement}, его индексы: (${maxRowIndex},${maxColumnIndex})`;
});
