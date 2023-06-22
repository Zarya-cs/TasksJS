
document.getElementById("generate").addEventListener("click", function() {
    let rows = parseInt(document.getElementById("rows4").value);
    let columns = parseInt(document.getElementById("columns4").value);
    if (isNaN(rows) || isNaN(columns)) {
        return;
    }
    let array = [];
    for (let i = 0; i < rows; i++) {
        array[i] = [];
        for (let j = 0; j < columns; j++) {
            array[i][j] = Math.floor(Math.random() * 200);
        }
    }
    let table = document.getElementById("arrayTD");
    table.innerHTML = "";
    for (let i = 0; i < rows; i++) {
        let row = table.insertRow(i);
        for (let j = 0; j < columns; j++) {
            let column = row.insertCell(j);
            column.innerHTML = array[i][j];
        }
    }
    let count = 0;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            if (array[i][j] >= 10 && array[i][j] <= 99 && (array[i][j] % 10 + Math.floor(array[i][j] / 10)) % 2 === 0) {
                count++;
            }
        }
    }
    document.getElementById("result").innerHTML = count;
});

