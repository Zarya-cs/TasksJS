let createMatrix = document.getElementById("createMatrix3-1");
createMatrix.addEventListener("click", function () {
    let n = parseInt(document.getElementById("size3-1").value);
    let arr = new Array(n);

    // Заполнение массива по правилу
    for (let i = 0; i < n; i++) {
        arr[i] = new Array(n);
        for (let j = 0; j < n; j++) {
            arr[i][j] = Math.abs(i - j) + 1;
        }
    }

    // Вывод массива на экран
    let table = document.getElementById("arrayTable");
    table.innerHTML = "";
    for (let i = 0; i < n; i++) {
        let row = table.insertRow(i);
        for (let j = 0; j < n; j++) {
            let cell = row.insertCell(j);
            cell.innerHTML = arr[i][j];
        }
    }
})