let createButton3 = document.getElementById("createBtn3");
let matrixContainer3 = document.getElementById("matrix3");

// Отрисовка матрицы //
createButton3.addEventListener("click", function () {
    createInputs(3, matrixContainer3)
});

let positiveCount = 0;


let checkResultButton = document.getElementById("checkThis");
checkResultButton.addEventListener("click", function () {
    let resultContainer = document.getElementById("textResult");
    let rows = document.getElementById("rows3").value;
    let columns = document.getElementById("columns3").value;
    let array = collectValues(columns, rows, 3)
    render(array, 3)
    positiveCount = 0;

    // Перебор элементов на главной диагонали и подсчет количества положительных элементов //
    for (let i = 0; i < rows; i++) {
        let identifier = `cell3-${i}-${i}`;
        let element = document.getElementById(identifier);
        if (element && Number(element.textContent) > 0) {
            positiveCount++;
            element.classList.add("positive");
        } else if (element) {
            element.classList.remove("positive");
        }
    }

    resultContainer.textContent = `Количество положительных элементов на главной диагонали: ${positiveCount}`;
});


