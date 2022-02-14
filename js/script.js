setTimeout(apresentarModal, 5000)

var modal = document.querySelector('.modal')

if (modal != null) {
    function apresentarModal() {

        document.querySelector('.modal').style.display = 'block'

        document.querySelector('.modal a').addEventListener('click', function () {
            document.querySelector('.modal').style.display = 'none'
        })

    }
}


alert(document.forms['modal_form'] == undefined);
