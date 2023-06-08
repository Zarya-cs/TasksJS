/* 5 задача */
function quadraticEquation(a, b, c) {
    let discriminant = b * b - 4 * a * c;
    if (discriminant < 0) {
        return null;
    } else if (discriminant === 0) {
        return -b / (2 * a);
    } else {
        let x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        let x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        return [x1, x2];
    }
}

document.getElementById('resolve').addEventListener('click', function(event) {
    event.preventDefault()
    let a = parseFloat(document.getElementById('a').value);
    let b = parseFloat(document.getElementById('b').value);
    let c = parseFloat(document.getElementById('c').value);
    let result = document.getElementById('resultFive');

    let solutions = quadraticEquation(a, b, c);

    if (solutions === null) {
        result.innerText = 'Действительных решений нет';
    } else if (Array.isArray(solutions)) {
        result.innerText = 'x1 = ' + solutions[0].toPrecision(3) + ', x2 = ' + solutions[1].toPrecision(3)  ;
    } else {
        result.innerText = 'x = ' + solutions;
    }
});