const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const {
    elements: { email, password }
    } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        alert("Пожалуйста, заполните все поля!");
        event.currentTarget.reset();
        return;
    }

    const dataForm = {
        email: email.value,
        password: password.value
    }
    
    console.log(dataForm);
    event.currentTarget.reset();
};