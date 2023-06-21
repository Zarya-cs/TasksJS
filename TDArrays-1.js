let createBtn = document.getElementById("createBtn");
let matrixContainer = document.getElementById("matrix1");

createBtn.addEventListener("click", function() {
    createInputs(1, matrixContainer)
});

let swapBtn = document.getElementById("swapBtn");
swapBtn.addEventListener("click", function() {
    let rows = document.getElementById("rows1").value;
    let columns = document.getElementById("columns1").value;

    let array =  collectValues(columns, rows, 1);


    if (columns === "1") {
        render(array, 1)
        return
    }

    if (columns === "2") {
        let newArray = []

        newArray.push(array[1])
        newArray.push(array[0])

        render(newArray, 1)
        return
    }

    let row1 = Math.floor(Math.random() * rows)
    let row2
    while (true) {
        row2 = Math.floor(Math.random() * rows)
        if (row1 !== row2) {
            break
        }
    }

    let temp = array[row1];
    array[row1] = array[row2];
    array[row2] = temp;

    render(array, 1)
});