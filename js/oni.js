const form = document.querySelector(".login-form");

const input = document.querySelector(".login__input");

const button = document.querySelector(".login__button");


//Função para acionar o botão jogar

const validateInput = ({target}) => {
   if (target.value.length > 2) {
    button.removeAttribute("disabled");
    return;
   }

   button.setAttribute("disabled", "");
};

//Função para guardar o nome 
const handleSubmit = 
(event) => {

    event.preventDefault();

    //Salva a chave player no localStorage.
    localStorage.setItem("player", input.value) //Salva a chave player no localStorage.

    // Direciona para a nova página do game
    window.location = "pages/game.html"; // 
};

input.addEventListener("input", validateInput);
form.addEventListener("submit", handleSubmit);


