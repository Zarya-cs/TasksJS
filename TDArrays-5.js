
document.getElementById("generate5").addEventListener("click", function() {
    let rows = parseInt(document.getElementById("rows5").value);
    let columns = parseInt(document.getElementById("columns5").value);

    let array = [];
    for (let i = 0; i < rows; i++) {
        array[i] = [];
        for (let j = 0; j < columns; j++) {
            array[i][j] = Math.floor(Math.random() * 100);
        }
    }
    let table = document.getElementById("arrayTD5");
    table.innerHTML = "";
    for (let i = 0; i < rows; i++) {
        let row = table.insertRow(i);
        for (let j = 0; j < columns; j++) {
            let column = row.insertCell(j);
            column.innerHTML = array[i][j];
        }
    }
});

document.getElementById("checkArrayBtn").addEventListener("click", function() {
    let number = parseInt(document.getElementById("xNum").value);
    let table = document.getElementById("arrayTD5");
    let count = 0;
    for (let i = 0; i < table.rows.length; i++) {
        for (let j = 0; j < table.rows[i].cells.length; j++) {
            if (parseInt(table.rows[i].cells[j].innerHTML) === number) {
                table.rows[i].cells[j].classList.add('checked')
                count++;
            } else {
                table.rows[i].cells[j].classList.remove('checked')
            }
        }
    }
    resultTD5.textContent = ("Число " + number + " встречается в массиве " + count + " раз.");
});