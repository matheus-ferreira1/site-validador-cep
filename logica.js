document.getElementById('btn-clear').addEventListener('click', limpaForm);

document.getElementById('btn-save').addEventListener('click', cadastraForm);

document.getElementById('cep').addEventListener('focusout', pesquisaCep);

function limpaForm() {
    document.getElementById('nome').value = '';
    document.getElementById('email').value = '';
    document.getElementById('cep').value = '';
    document.getElementById('adress').value = '';
    document.getElementById('numero').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('numero').value = '';
}

async function pesquisaCep() {
    const cep = document.getElementById('cep').value.replace('-', '');

    const url = `viacep.com.br/ws/${cep}/json/`
}