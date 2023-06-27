let generateButtonS = document.getElementById("generate2.2");
let sizeInputS = document.getElementById("size1.2");
let resultDivS = document.getElementById("result1.2");
let matrixTableS = document.getElementById("matrix1.2");
generateButtonS.addEventListener("click", function () {

    let size2 = parseInt(sizeInputS.value);

    if (size2 < 1) {
        document.getElementById('result1.2').textContent = 'Введите целое положительное число'
        return;
    }

    // генерация матрицы
    let matri = [];
    for (let i = 0; i < size2; i++) {
        matri[i] = [];
        for (let j = 0; j < size2; j++) {
            matri[i][j] = Math.floor(Math.random() * 15 - 5);
        }
    }

    // Вывод матрицы на страницу
    matrixTableS.innerHTML = "";
    for (let i = 0; i < size2; i++) {
        let row = document.createElement("tr");
        for (let j = 0; j < size2; j++) {
            let cell = document.createElement("td");
            cell.textContent = matri[i][j];
            row.appendChild(cell);
        }
        matrixTableS.appendChild(row);
    }
    // Проверка отрицательных чисел
    let negativeCount = 0;
    for (let i = 1; i < size2; i++) {
        for (let j = 0; j < i; j++) {
            if (matri[i][j] < 0) {
                negativeCount++;
            }
        }
    }

    resultDivS.textContent = `Количество отрицательных элементов под главной диагональю: ${negativeCount}`;

})