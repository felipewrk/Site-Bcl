const whatsapp = "5599999999999";

const produtos = {
    vips: [
        {
            nome: "VIP Bronze",
            desc: "Benefícios básicos no servidor",
            preco: "R$ 10,00"
        },
        {
            nome: "VIP Ouro",
            desc: "Benefícios avançados no servidor",
            preco: "R$ 25,00"
        }
    ],

    veiculos: [
        {
            nome: "Carro VIP X",
            desc: "Veículo exclusivo VIP",
            preco: "R$ 40,00"
        }
    ],

    corps: [
        {
            nome: "Corp Exclusiva",
            desc: "Criação de corporação",
            preco: "R$ 100,00"
        }
    ],

    facs: [
        {
            nome: "Facção Premium",
            desc: "Criação de facção",
            preco: "R$ 120,00"
        }
    ],

    extras: [
        {
            nome: "Skin Extra",
            desc: "Skin exclusiva para corp ou fac",
            preco: "R$ 15,00"
        }
    ]
};

function abrirCategoria(cat) {
    const area = document.getElementById("produtos");
    area.innerHTML = "";

    produtos[cat].forEach(p => {
        area.innerHTML += `
            <div class="produto">
                <h3>${p.nome}</h3>
                <p>${p.desc}</p>
                <p>${p.preco}</p>
                <a class="comprar" target="_blank"
                href="https://wa.me/${whatsapp}?text=Quero comprar ${p.nome}">
                Comprar no WhatsApp
                </a>
            </div>
        `;
    });
}
