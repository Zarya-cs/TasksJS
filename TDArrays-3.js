let createButton3 = document.getElementById("createBtn3");
let matrixContainer3 = document.getElementById("matrix3");

// Отрисовка матрицы //
createButton3.addEventListener("click", function() {
    let rows = document.getElementById("row-3").value;
    let columns = document.getElementById("column-3").value;

    if (rows && columns) {
        let matrix3 = "<table>";
        for (let i = 0; i < columns; i++) {
            matrix3 += "<tr>";
            for (let j = 0; j < rows; j++) {
                let identifier = `matrix-${i}-${j}`
                matrix3 += `<td><input type='text' name='${identifier}' id='${identifier}' style="width: 60px"></td>`;
            }
            matrix3 += "</tr>";
        }
        matrix3 += "</table>";
        matrixContainer3.innerHTML = matrix3;
    }
});

let positiveCount = 0;


let checkResultButton = document.getElementById("checkThis");
checkResultButton.addEventListener("click", function() {
    let resultContainer = document.getElementById("render-3");
    let rows = document.getElementById("row-3").value;
    positiveCount = 0;

    // Перебор элементов на главной диагонали и подсчет количества положительных элементов //
    for (let i = 0; i < rows; i++) {
        let identifier = `matrix-${i}-${i}`;
        let element = document.getElementById(identifier);
        if (element && Number(element.value) > 0) {
            positiveCount++;
            element.classList.add("positive");
        } else if (element) {
            element.classList.remove("positive");
        }
    }

    resultContainer.textContent = `Количество положительных элементов на главной диагонали: ${positiveCount}`;
    render(array)
});



// Рендер матрицы //
//  function render(matrix3) {
//     let matrixTableT = "<table class='matrix'>"
//
//     for (let i in matrix3) {
//         matrixTableT += "<tr>"
//
//         for (let j in matrix3[i]) {
//              matrixTableT += `<td>${matrix3[i][j]}</td>`;
//         }
//
//         matrixTableT += "</tr>"
//     }
//
//      matrixTableT += "</table>";
//
//      document.getElementById("render3").innerHTML = matrixTableT;
//  }

