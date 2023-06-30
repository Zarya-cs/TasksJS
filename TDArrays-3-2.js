let generateButton3 = document.getElementById("generate3.2");
let sizeInput3 = document.getElementById("size3.2");
let resultDiv3 = document.getElementById("result3.2");
let matrixTable3 = document.getElementById("matrix3.2");
generateButton3.addEventListener("click", function () {

    let size32 = parseInt(sizeInput3.value);

    if (size32 < 1) {
        document.getElementById('result3.2').textContent = 'Введите целое положительное число'
        return;
    }

    // генерация матрицы
    let matrix32 = [];
    for (let i = 0; i < size32; i++) {
        matrix32[i] = [];
        for (let j = 0; j < size32; j++) {
            matrix32[i][j] = Math.floor(Math.random() * 10);
        }
    }
    // Вывод матрицы на страницу
    matrixTable3.innerHTML = "";
    for (let i = 0; i < size32; i++) {
        let row = document.createElement("tr");
        for (let j = 0; j < size32; j++) {
            let cell = document.createElement("td");
            cell.textContent = matrix32[i][j];
            row.appendChild(cell);
        }
        matrixTable3.appendChild(row);
    }
    let product = 1;
    for (let i = 0; i < size32; i++) {
        if (matrix32[i][i] !== 0) {
            product *= matrix32[i][i];
        }
    }
    resultDiv3.textContent = `Произведение ненулевых диагональных элементов: ${product}`;
})