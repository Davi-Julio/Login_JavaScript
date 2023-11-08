// Efeito Link

var links = document.querySelectorAll(".nav ol li a")

links[3].style.color = 'red'

// Efeito tela
var main = document.querySelector(".main");

setTimeout(() => {
    main.classList.add("main2")
}, 2000)


// Efeito navBar

var nav = document.querySelector(".nav")

setTimeout(() => {
    nav.classList.add("navEfeito")
}, 2000)


// Efeito Form 

var form = document.querySelector(".form")

setTimeout(() => {
    form.classList.add("formBoxShadow")
}, 2000)


// Validação Form

var btnLogin = document.getElementById("btnLogin");
var nome = document.getElementById("name");
var email = document.getElementById("email")
var password = document.getElementById("password")
var ConfirmPassword = document.getElementById("ConfirmPassword")
var messenge = document.getElementById("messenge");

btnLogin.addEventListener("click", (e) => {

    function validação() {
        const nomeValue = nome.value;
        const emailValue = email.value;
        const passwordValue = password.value;
        const ConfirmPasswordValue = ConfirmPassword.value;


        if (nomeValue === "" || emailValue === "" || passwordValue === '' || ConfirmPasswordValue === "") {
            messenge.innerHTML = "Preencha todos os campos!"
            messenge.style.color = 'red'

            setTimeout(() => {
                messenge.innerHTML = "";
            }, 2000)

            nome.value = ''
            email.value = ''
            password.value = ''
            ConfirmPassword.value = ''

        } else if (passwordValue === ConfirmPasswordValue) {
            messenge.innerHTML = "Login Feito com sucesso";
            messenge.style.color = 'green';

            setTimeout(() => {
                messenge.innerHTML = "";
            }, 2000)

            nome.value = ''
            email.value = ''
            password.value = ''
            ConfirmPassword.value = ''
        } else if (passwordValue != ConfirmPasswordValue) {
            messenge.innerHTML = "Senhas diferentes";
            messenge.style.color = 'red';

            setTimeout(() => {
                messenge.innerHTML = '';
            }, 2000)

            nome.value = ''
            email.value = ''
            password.value = ''
            ConfirmPassword.value = ''
        }
    }

    validação();

})


