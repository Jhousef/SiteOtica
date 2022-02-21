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
}

/* Funções */
function validarEmail(email) {
    if (
        valorEmail != "" &&
        valorEmail.indexOf("@") > 3 &&
        valorEmail.lastIndexOf(".") > posicaoArroba) {
        return true
    } else {
        return false
    }

}
