function generateArray() {
    let t = parseInt(document.getElementById("t").value);
    let size = parseInt(document.getElementById("size").value);
    let array = [];
    let evenProduct = 1;
    for (let i = 0; i < size; i++) {
        array.push(Math.floor(Math.random() * 104) - 56);
        if (i % 2 == 0 && array[i] > t) {
            evenProduct *= array[i];
        }
    }
    document.getElementById("arrayThird").innerHTML = array.join(", ");
    document.getElementById("resultArray").innerHTML = "Произведение элементов с четными номерами, которые превосходят число " + t + ": " + evenProduct;
}