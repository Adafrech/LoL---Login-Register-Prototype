const inputs = document.querySelectorAll('.input');
const button = document.querySelector('.Register__button')




const handleChange = () => {
    const name = document.getElementById("nameform");
    const password = document.getElementById("passwordform");

    if (name.value.length >= 6 && password.value.length >= 1) {
        button.removeAttribute('disabled');
    }
    else {
        button.setAttribute('disabled', '   ');
    }
}



const handleFocus = ({ target }) => {
  const span = target.previousElementSibling;
  span.classList.add("span-active");
};

const handleFocusOut = ({ target }) => {
  if (target.value === "") {
    const span = target.previousElementSibling;
    span.classList.remove("span-active");
  }
};

inputs.forEach((input) => input.addEventListener("focus", handleFocus));

inputs.forEach((input) => input.addEventListener("focusout", handleFocusOut));

inputs.forEach((input) => input.addEventListener('input', handleChange));