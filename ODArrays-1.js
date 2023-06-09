function generateRandomSequence(n) {
    let sequence = [];
    for (let i = 0; i < n; i++) {
        sequence.push(Math.floor(Math.random() * 57) - 23);
    }
    return sequence;
}

document.getElementById('generate').addEventListener('click', function(event) {
    event.preventDefault()
    let n = parseInt(document.getElementById('n').value);
    let result = document.getElementById('result-gen');

    if (isNaN(n) || n <= 0) {
        result.innerText = 'Введите корректное количество элементов';
        return;
    }

    let sequence = generateRandomSequence(n);
    result.innerText = 'Последовательность: ' + sequence.join(', ');
})