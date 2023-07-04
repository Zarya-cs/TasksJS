let generateButton24 = document.getElementById("generate24");
let rowsInput24 = document.getElementById("rows24");
let columnsInput24 = document.getElementById("columns24");
let matrixTable24 = document.getElementById("arrayTD24");
let result24 = document.getElementById("result24")
generateButton24.addEventListener("click", function() {
    let rows = parseInt(rowsInput24.value);
    let columns = parseInt(columnsInput24.value);

    let array = [];
    for (let i = 0; i < rows; i++) {
        array[i] = [];
        for (let j = 0; j < columns; j++) {
            array[i][j] = Math.floor(Math.random() * 100);
        }
    }

    // Переменные для хранения количества четных и нечетных чисел
    let evenCount = 0;
    let oddCount = 0;

// Вывод с сортировкой чисел
    matrixTable24.innerHTML = "";
    for (let i = 0; i < rows; i++) {
        let row = document.createElement("tr");
        for (let j = 0; j < columns; j++) {
            let cell = document.createElement("td");
            cell.textContent = array[i][j];
            row.appendChild(cell);

            // Проверяем, является ли число четным или нечетным
            if (array[i][j] % 2 === 0) {
                evenCount++;
            } else {
                oddCount++;
            }
        }
        matrixTable24.appendChild(row);
    }
    result24.innerHTML = `Количество четных чисел: ${evenCount}, Количество нечетных чисел: ${oddCount}`;
})