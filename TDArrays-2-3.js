let generateButton3 = document.getElementById("generate2.3");
let sizeInput3 = document.getElementById("size2.3");
let resultDiv3 = document.getElementById("result2.3");
let matrixTable3 = document.getElementById("matrix2.3");
generateButton3.addEventListener("click", function () {

    let size3 = parseInt(sizeInput3.value);

    if (size3 < 1) {
        document.getElementById('result2.3').textContent = 'Введите целое положительное число'
        return;
    }

    // генерация матрицы
    let matrix3 = [];
    for (let i = 0; i < size3; i++) {
        matrix3[i] = [];
        for (let j = 0; j < size3; j++) {
            matrix3[i][j] = Math.floor(Math.random() * 10);
        }
    }
    // Вывод матрицы на страницу
    matrixTable3.innerHTML = "";
    for (let i = 0; i < size3; i++) {
        let row = document.createElement("tr");
        for (let j = 0; j < size3; j++) {
            let cell = document.createElement("td");
            cell.textContent = matrix3[i][j];
            row.appendChild(cell);
        }
        matrixTable3.appendChild(row);
    }

    // поиск элементов
    let suitableElements = [];
    for (let i = 0; i < size3; i++) {
        for (let j = 0; j < size3; j++) {
            let isSuitable = true;
            // Является ли элемент минимальным в своей строке
            for (let k = 0; k < size3; k++) {
                if (matrix3[i][j] > matrix3[i][k]) {
                    isSuitable = false;
                    break;
                }
            }
            if (!isSuitable) continue;
            // Является ли элемент минимальным в своем столбце
            for (let k = 0; k < size3; k++) {
                if (matrix3[i][j] > matrix3[k][j]) {
                    isSuitable = false;
                    break;
                }
            }
            if (isSuitable) {
                suitableElements.push([i, j]);
            }
        }
    }
    let resultString = "";
    for (let i = 0; i < suitableElements.length; i++) {
        resultString += `${matrix3[suitableElements[i][0]][suitableElements[i][1]]} (${suitableElements[i][0]}, ${suitableElements[i][1]})\n`;
    }
    resultDiv3.textContent = resultString;
})