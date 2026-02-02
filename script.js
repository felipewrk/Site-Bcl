const produtos = [
  { nome: "VIP Alpha", preco: 6,99 },
  { nome: "VIP Epsylon", preco: 9,99 },
  { nome: "VIP Sigma", preco: 19,99 },
  { nome: "VIP Omega", preco: 24,99 },
  { nome: "Base Privada", preco: 49,99 }
]

let carrinho = []

const area = document.getElementById("produtos")
const qtd = document.getElementById("qtd")
const cartBox = document.getElementById("cart")
const cartItems = document.getElementById("cart-items")

if (area) {
  produtos.forEach(p => {
    area.innerHTML += `
      <div class="produto">
        <h3>${p.nome}</h3>
        <p>R$ ${p.preco}</p>
        <button class="btn" onclick="add('${p.nome}')">adicionar</button>
      </div>
    `
  })
}

function add(nome) {
  carrinho.push(nome)
  qtd.innerText = carrinho.length
  renderCart()
}

function toggleCart() {
  cartBox.classList.toggle("open")
}

function renderCart() {
  cartItems.innerHTML = ""
  carrinho.forEach(i => {
    cartItems.innerHTML += `<li>${i}</li>`
  })
}

