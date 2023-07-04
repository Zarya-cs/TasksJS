let generateButton25 = document.getElementById("generate25");
let rowsInput25 = document.getElementById("rows25");
let columnsInput25 = document.getElementById("columns25");
let matrixTable25 = document.getElementById("arrayTD25");
let result25 = document.getElementById("result25")
generateButton25.addEventListener("click", function() {
    let rows = parseInt(rowsInput25.value);
    let columns = parseInt(columnsInput25.value);
    let alphabet = "ABCDEFGHIKLMNOPQRSTUVWXYZ";
    let array = [];
    for (let i = 0; i < rows; i++) {
        array[i] = [];
        for (let j = 0; j < columns; j++) {
            array[i][j] = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        }
    }

    matrixTable25.innerHTML = "";
    for (let i = 0; i < rows; i++) {
        let row = document.createElement("tr");
        for (let j = 0; j < columns; j++) {
            let cell = document.createElement("td");
            cell.textContent = array[i][j];
            row.appendChild(cell);
        }
        matrixTable25.appendChild(row);
    }
    // Создаем объект для хранения количества встречаемости каждого символа
    let charCount = {};

// Выводим матрицу в табличном виде с подсчетом количества символов
    matrixTable25.innerHTML = "";
    for (let i = 0; i < rows; i++) {
        let row = document.createElement("tr");
        for (let j = 0; j < columns; j++) {
            let cell = document.createElement("td");
            let randomChar = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
            cell.textContent = randomChar;
            row.appendChild(cell);

            // Проверяем, есть ли символ в объекте charCount
            if (charCount[randomChar]) {
                charCount[randomChar]++;
            } else {
                charCount[randomChar] = 1;
            }
        }
        matrixTable25.appendChild(row);
    }

// Выводим количество встречаемости каждого символа над таблицей
    result25.innerHTML = `Количество встречаемости каждого символа:<br>`;
    for (let char in charCount) {
        result25.innerHTML += `${char}:${charCount[char]} `;
    }
})