// Dados dos produtos
const produtosAtuais001 = [
    { nome: "Agência Virtual", tipo: "terceiro", existe:true },
    { nome: "Geoweb", tipo: "proprio", existe:true },
    { nome: "Atendimento e Serviços", tipo: "proprio", existe:true },
    { nome: "Serviços Campo", tipo: "terceiro", existe:true }
];

const produtosFuturos001 = [
    { nome: "Agência Virtual", tipo: "terceiro", existe:true },
    { nome: "Geoweb", tipo: "proprio", existe:true },
    { nome: "Atendimento e Serviços", tipo: "proprio", existe:false },
    { nome: "Serviços Campo", tipo: "terceiro", existe:true },
    { nome: "Service Cloud", tipo: "sap", existe:true },
];

const produtosAtuais002 = [
    { nome: "Finanças", tipo: "sap", existe:true },
    { nome: "Controladoria", tipo: "sap", existe:true },
    { nome: "Ativo Fixo", tipo: "sap", existe:true },
    { nome: "Mastersaf Fiscal", tipo: "terceiro", existe:true },
    { nome: "Calculadora de Tributos", tipo: "terceiro", existe:true },
    { nome: "Ives E-Social", tipo: "terceiro", existe:true }
];

const produtosFuturos002 = [
    { nome: "Finanças", tipo: "sap", existe:true },
    { nome: "Controladoria", tipo: "sap", existe:true },
    { nome: "Ativo Fixo", tipo: "sap", existe:true },
    { nome: "Mastersaf Fiscal", tipo: "terceiro", existe:false },
    { nome: "Calculadora de Tributos", tipo: "terceiro", existe:false },
    { nome: "Ives E-Social", tipo: "terceiro", existe:false }
];

// Referências aos elementos do DOM
const productContainer001 = document.getElementById('product-container001');
const productContainer002 = document.getElementById('product-container002');


const toggleSituation = document.getElementById('toggleSituation');

// Função para renderizar produtos
function renderProdutos(produtos, container, isFuturo = false) {
    container.innerHTML = ''; // Limpa os produtos atuais

    produtos.forEach(produto => {
        const bloco = document.createElement('div');
        bloco.classList.add('product-block', produto.tipo);
        if(!produto.existe){
        	
        	bloco.classList.add('excluido');
        }
        if (isFuturo) {
            bloco.classList.add('futuro');
        }
        bloco.textContent = produto.nome;
        container.appendChild(bloco);
    });
}

// Evento para alternar a situação
toggleSituation.addEventListener('change', () => {
	
    if (toggleSituation.checked) {
        renderProdutos(produtosFuturos001, productContainer001, true);
        renderProdutos(produtosFuturos002, productContainer002, true);
        
        document.getElementById('tipoLista').innerText = 'Produtos - To Be'; 
        
    } else {
        renderProdutos(produtosAtuais001, productContainer001,toggleSituation.checked);
        renderProdutos(produtosAtuais002, productContainer002,toggleSituation.checked);
    
    	document.getElementById('tipoLista').innerText = 'Produtos - As Is'; 
    }
    
    

});

// Renderiza os produtos atuais ao carregar a página
window.onload = () => {
    renderProdutos(produtosAtuais001,productContainer001);
    renderProdutos(produtosAtuais002,productContainer002);
};

setInterval(() => {
  const checkbox = document.getElementById('toggleSituation');
  if (checkbox) {
    checkbox.click();
  }
}, 5000);
