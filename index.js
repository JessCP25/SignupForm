const button = document.getElementById('submit');
const input = document.getElementById('email');
const error = document.getElementById('error');

const validateEmail = () => {
    const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if(emailRegex.test(input.value)){
        return true;
    }else{
        error.style.display = 'inline';
        input.style.border = '1px solid var(--tomato)';
        input.style.background = 'hsla(4, 100%, 67%,0.2)';
        input.style.color = 'var(--tomato)';
    }
}

const saveEmail = () => {
    if(validateEmail()){
        const email = input.value;
        localStorage.setItem('email', email);
        input.value = ""
        window.location.href = "./updated.html"
    }
}

button.addEventListener('click', saveEmail);