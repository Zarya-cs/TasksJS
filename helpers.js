let forms = document.querySelectorAll('form')
for (let form of forms) {
    form.addEventListener("submit", (event) => {
        event.preventDefault()
    })
}