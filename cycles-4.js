let sequenceInput = document.getElementById('sequenceC4');
let checkB = document.getElementById('checkС4');
let result = document.getElementById('resultС4');

checkB.addEventListener('click', () => {
    let sequence = sequenceInput.value.trim().split(' ').map(Number);

    if (isSawtoothSequence(sequence)) {
        result.textContent = 'Последовательность является пилообразной';
    } else {
        result.textContent = 'Последовательность не является пилообразной';
    }
});

function isSawtoothSequence(sequence) {
    if (sequence.length < 3) {
        return false;
    }

    let isIncreasing = sequence[0] < sequence[1];

    for (let i = 1; i < sequence.length; i++) {
        if (i+1 >= sequence.length) {
            break
        }

        if (sequence[i] === sequence[i+1]) {
            return false;
        }

        if (isIncreasing !== sequence[i] < sequence[i+1]) {
            isIncreasing = !isIncreasing
        }else {
            return false;
        }
    }

    return true;
}