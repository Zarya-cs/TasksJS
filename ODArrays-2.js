let sumBtn = document.getElementById('sumButton');
let result = document.getElementById('result-7');

sumBtn.addEventListener('click', () => {
    let arrayInput = document.getElementById('array').value;
    let array = arrayInput.split(',').map(Number);
    let sum = array.reduce((acc, curr) => acc + curr, 0);
    result.textContent = `Сумма элементов массива: ${sum}`;
});