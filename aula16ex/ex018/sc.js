var listNumbers = [];

function adiciona() {
    const valorAddInput = document.getElementById("cont");
    const idDivResposta = document.getElementById("res");
    idDivResposta.innerHTML = '';
    const tabela = document.getElementById("tabel");
    const valorInput = valorAddInput.value;
    valorAddInput.value = '';
    if (valorInput && !listNumbers.includes(valorInput) && valorInput >= 1 && valorInput <= 100) {
        listNumbers.push(valorInput);
        const option = new Option(`Valor ${valorInput} adicionado.`, valorInput);
        option.id = valorInput;
        option.onclick = function eraseOption() {
            const id = this.id;
            const tabela = document.getElementById("tabel");
            const optionToRemove = tabela.querySelector(`option[id="${id}"]`)
            if (optionToRemove) {
                const index = listNumbers.indexOf(this.id);
                listNumbers.splice(index);
                tabela.removeChild(optionToRemove);
                idDivResposta.innerHTML = '';
            }
        }
        
        tabela.add(option);
    }
    else if (valorInput < 1 && valorInput > 100) {
        alert(`Valor precisa estar entre 1 e 100`);
    }
    else if (listNumbers.includes(valorInput)) {
        alert(`Numero ${valorInput} já existe na lista, escolha outro`);
    }
    else {
        alert("Adicione um valor antes de clicar em adicionar")
    }
}

function finalizar() {
    if (!listNumbers.length) {
        alert("Adicione numeros para finalizar")
        return;
    }
    const idDivResposta = document.getElementById("res");
    const quantityNumbers = listNumbers.length;
    const highestNumber = listNumbers.sort()[listNumbers.length - 1];
    const lowestNumber = listNumbers.sort()[0];
    const sumValues = sumAllValues();
    const median = sumValues / quantityNumbers;

    let html = `
        <p>Ao todo, temos ${quantityNumbers} numeros cadastrados.</p>
        <p>O maior valor informado foi ${highestNumber}.</p>
        <p>O menor valor informado foi ${lowestNumber}</p>
        <p>Somando todos os valores, temos ${sumValues}</p>
        <p>A média dos valores digitados é ${median.toFixed(2)}</p>
    `
    idDivResposta.innerHTML = html;
}


function sumAllValues() {
    let valor = 0;
    for (let i = 0; i < listNumbers.length; i++) {
        valor += Number(listNumbers[i]);
    }

    return valor;
}

