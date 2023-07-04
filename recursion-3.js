document.getElementById("deem").addEventListener("click", function() {
    let m = parseInt(document.getElementById("m").value);
    let n = parseInt(document.getElementById("n").value);
    let result53 = document.getElementById("result53");

    let result = akkerman(m, n);

    result53.innerHTML = ("A(" + m + ", " + n + ") = " + result);
});

function akkerman(m, n) {
    if (m === 0) {
        return n + 1;
    } else if (n === 0) {
        return akkerman(m - 1, 1);
    } else {
        return akkerman(m - 1, akkerman(m, n - 1));
    }
}