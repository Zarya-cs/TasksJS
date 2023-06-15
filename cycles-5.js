document.getElementById("checkS").addEventListener("click", function() {
    let expression = document.getElementById("expression").value;
    let stack = [];

    for (let i = 0; i < expression.length; i++) {
        if (expression[i] == "(") {
            stack.push("(");
        } else if (expression[i] == ")") {
            if (stack.length == 0) {
                document.getElementById("resultS").innerHTML = "Неправильная расстановка скобок";
                return;
            } else {
                stack.pop();
            }
        }
    }

    if (stack.length == 0) {
        document.getElementById("resultS").innerHTML = "Правильная расстановка скобок";
    } else {
        document.getElementById("resultS").innerHTML = "Неправильная расстановка скобок";
    }
});