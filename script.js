/* script.js
   Responsável por:
   - Renderizar produtos por categoria nas páginas (com base em data-category)
   - Adicionar/Remover itens do carrinho (front-end, localStorage)
   - Redirecionar para link do Discord ao clicar "Comprar no Discord"
   - Controlar exibição do carrinho e contador
*/

/* CONFIGURÁVEL: coloque seu link do Discord aqui */
const DISCORD_LINK = "https://discord.gg/yourserver"; // <- substitua pelo link real

/* Dados de exemplo de produtos — edite conforme necessário.
   Cada produto tem: id, name, price (string), category (vip, carros, corps, facs, extras), emoji (opcional)
*/
const products = [
  { id: 'vip-1', name: 'VIP Bronze', price: 'R$5,00', category: 'vip', emoji: '👤' },
  { id: 'vip-2', name: 'VIP Prata',  price: 'R$10,00', category: 'vip', emoji: '👑' },
  { id: 'car-1', name: 'Carro Falcon', price: 'R$25,00', category: 'carros', emoji: '🚗' },
  { id: 'car-2', name: 'Carro Racer',  price: 'R$30,00', category: 'carros', emoji: '🏎️' },
  { id: 'corp-1', name: 'Corp Starter', price: 'R$50,00', category: 'corps', emoji: '🏢' },
  { id: 'facs-1', name: 'Facção Alpha', price: 'R$40,00', category: 'facs', emoji: '🛡️' },
  { id: 'extra-1', name: 'Spawn Point Extra', price: 'R$15,00', category: 'extras', emoji: '✨' },
  { id: 'extra-2', name: 'Rank Custom', price: 'R$20,00', category: 'extras', emoji: '⭐' }
];

/* --- Carrinho (armazenado em localStorage para persistência simples) --- */
const CART_KEY = 'bcl_cart_v1';

function loadCart() {
  try {
    const raw = localStorage.getItem(CART_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error('Erro ao carregar carrinho', e);
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartCount();
}

function addToCart(productId) {
  const prod = products.find(p => p.id === productId);
  if (!prod) return;
  const cart = loadCart();
  cart.push({ id: prod.id, name: prod.name, price: prod.price });
  saveCart(cart);
  showToast(`${prod.name} adicionado ao carr*
