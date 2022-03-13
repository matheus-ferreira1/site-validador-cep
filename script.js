

function isNumber (numero) {
    return !isNaN(numero);
}

function cepValido (cep) {
    return cep.length == 8 && isNumber(cep)
}

function fillForm(endereco) {
    document.getElementById('endereco').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('cidade').value = endereco.localidade;
    document.getElementById('estado').value = endereco.uf;
    document.getElementById('ddd').value = endereco.ddd;
}

async function pegaCep() {
    let cep = document.getElementById('cep').value;
    const url = `https://viacep.com.br/ws/${cep}/json/`

    if (cepValido(cep)) {
        const dados = await fetch(url);
        const endereco = await dados.json();
        if (endereco.hasOwnProperty('erro')) {
            alert('O CEP não foi encontrado')
        } else {
            //console.log(endereco)
            fillForm(endereco)
        }
    } else {
        alert('O CEP está incorreto')
    }
}

function clearAll() {
    document.getElementById('cep').value = '';
    document.getElementById('endereco').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('estado').value = '';
    document.getElementById('ddd').value = '';
}

