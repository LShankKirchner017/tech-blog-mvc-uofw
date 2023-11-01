const form = document.querySelector("form")
const usernameInput = document.querySelector("#usernameLogin")
const passwordInput = document.querySelector("#passwordLogin")

console.log(form, usernameInput, passwordInput)

const login = event => {
    event.preventDefault()

    const userData = {
        username: username.value.trim(),
        password: username.value.trim(),
    }

    fetch("/api/user/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userData)
    })
    .then(response => {
        if (response.status === 202) {
            window.location.assign('/')
        } else {
            alert("Login Error")
        }
    })
    .catch(err => console.error(err))
}

form.addEventListener("submit", login)