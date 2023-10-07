const form = document.getElementById("form-registro");

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    const inputNomeContato = document.getElementById("nome-contato");
    const inputNumeroContato = document.getElementById("numero-contato");
        
    let linha = '<tr>';
    linha += `<td><img src="./imagens/usuario.png"></td>`;
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td><img src="./imagens/telefone.png">${inputNumeroContato.value}</td>`;
    linha += '</tr>';
    linhas += linha;
    
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas
    
    inputNomeContato.value = '';
    inputNumeroContato.value = '';
});