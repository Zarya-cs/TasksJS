document.getElementById("calculateA").addEventListener("click", function(event){
    event.preventDefault();
    let array = document.getElementById("arrayA").value.split(",");
    let newArray = [];
    for (let i = 0; i < array.length; i++) {

        if (parseInt(array[i]) % 2 == 0) {
            newArray.push(parseInt(array[i]));
        }
    }
    document.getElementById("resultA").innerHTML = "Новый массив из четных элементов: [" + newArray + "]";
});