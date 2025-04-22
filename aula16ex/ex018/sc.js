let num = document.getElementById('cont')
let tab = document.getElementById('tabel')
let res = document.getElementById('res')
let valor = [] // array

function isNum(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {  // verifica se o numero digitado é valido
        return true
    } else {
        return false
    }
}

function inTab(n, t) {
    if (t.indexOf(Number(n)) != -1) {  // verifica se o numero esta na tabela
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNum(num.value) && !inTab(num.value, valor)) {
        valor.push(Number(num.value)) // adiciona elemento ao array
        let item = document.createElement('option') // adiciona valores na tabela
        item.text = `Valor ${num.value} adicionado.` // adiciona valores na tabela
        tab.appendChild(item) // adiciona valores na tabela
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido.')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valor.length == 0) {
        window.alert('Adicione valores primeiro.')
    } else {
        let tot = valor.length
        let maior = valor[0]
        let menor = valor[0]
        let soma = 0
        let media = 0
        for (let pos in valor) {  // serve para percorrer o array inteiro (percurso)
            soma += valor[pos]
            if (valor[pos] > maior)
                maior = valor[pos]
            if (valor[pos] < menor)
                menor = valor[pos]
        }

        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
    }
}