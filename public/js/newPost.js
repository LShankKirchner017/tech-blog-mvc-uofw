const newPostTitleInput = document.getElementById("newPostTitleInput")
const newPostTextInput = document.getElementById("newPostTextInput")
const newPostSubmitButton = document.getElementById("newPostSubmit")

const createPost = async (event) => {
    event.preventDefault()

    const title = newPostTitleInput.value.trim()
    const content = newPostTextInput.value.trim()

    if (title && content) {
        await fetch("api/postRoutes/create", {
            method: "POST",
            header: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title,
                content,
            })
        })
        .then(response => {
            console.log(response)
            if (response.status === 200){
                window.location.assign('/')
            }
        })
        .catch(err => console.error(err))
    }
}

newPostSubmitButton.addEventListener("click", createPost)