let carrinho = JSON.parse(localStorage.getItem('carrinho')) || []

function addCarrinho(nome, preco) {
  carrinho.push({ nome, preco })
  localStorage.setItem('carrinho', JSON.stringify(carrinho))
  alert('adicionado ao carrinho')
}

function carregarCarrinho() {
  const itens = document.getElementById('itens')
  const total = document.getElementById('total')

  if (!itens) return

  itens.innerHTML = ''
  let soma = 0

  carrinho.forEach(item => {
    itens.innerHTML += `<p>${item.nome} - R$ ${item.preco}</p>`
    soma += item.preco
  })

  total.innerText = 'total: R$ ' + soma
}

carregarCarrinho()
