/* Apresentação Modal */
setTimeout(apresentarModal, 5000)
function apresentarModal() {

    var modal = document.querySelector(".modal")

    if (modal != null) {

        document.querySelector('.modal').style.display = 'block'

        document.querySelector('.modal a').addEventListener('click', function () {
            document.querySelector('.modal').style.display = 'none'
        })


    }
}

/* Validação Modal(Página Inicial) */
if (document.forms["modal_form"] != undefined) {
    //validação

    var form = (document.forms["modal_form"])

    form.addEventListener("submit", validarFormModal);
    form.email.addEventListener("keyup", function () {
        form.email.className = "";
        document.querySelector('span.nao_valido').style.display = 'none';
    })
}

function validarFormModal(evt) {

    var form = (document.forms["modal_form"])

    var inputEmail = form.email;
    var valorEmail = form.email.value;

    var posicaoArroba = valorEmail.indexOf("@")

    if (
        valorEmail != "" && valorEmail.indexOf("@") > 3
        && valorEmail.lastIndexOf(".") > posicaoArroba
    ) {

    } else {
        alert("E-mail Inválido.")

        inputEmail.className = "nao_valido"

        var val = document.querySelector('span.nao_valido').style.display = 'block'

        evt.preventDefault();
    }
}

/* Validação Fale Conosco */
if (document.forms["form_contato"] != undefined) {
    var form = document.forms["form_contato"];

    form.addEventListener("submit", function (evt) {
        var formValido = true

        if (!naoVazio(form.nome_Completo.value)) {
            form.nome_Completo.className = "nao_valido"
            formValido = false
        }
        if (!naoVazio(form.telefone.value)) {
            form.telefone.className = "nao_valido"
            formValido = false
        }
        if (!naoVazio(form.mensagem.value)) {
            form.mensagem.className = "nao_valido"
            formValido = false
        }
        if (!validarEmail(form.email.value)) {
            form.email.className = "nao_valido"
            formValido = false
        }
        if (!formValido == true) {
            evt.preventDefault();
        }
    });

    var inputs = document.querySelectorAll("form[name = form_contato] input[type=text]")

    for (var i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener(
            "keypress", function () {
                this.className = ""
            }
        )
    }

    var textarea = document.querySelector("form[name = form_contato] textarea")
    textarea.addEventListener(
        "keyup", function () {
            this.className = "";
            document.querySelector(".texto").innerHTML = "Caractere(s)" + this.value.length
        }

    )

}

/* Funções */
function validarEmail(valorEmail) {
    if (
        valorEmail != "" &&
        valorEmail.indexOf("@") > 3 &&
        valorEmail.lastIndexOf(".") > posicaoArroba) {
        return true
    } else {
        return false
    }
}

function naoVazio(texto) {
    if (texto.trim().length > 0) {
        return true
    } else {
        return false
    }
}
