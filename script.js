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
    { nome: "Gestão de Ativo Fixo", tipo: "sap", existe:true },
    { nome: "Contas a Pagar", tipo: "sap", existe:true },
    { nome: "Contas a Receber", tipo: "sap", existe:true },
    { nome: "Controladoria", tipo: "sap", existe:true },
    { nome: "Fundo Fixo", tipo: "sap", existe:true },
    { nome: "Finanças", tipo: "sap", existe:true },
    { nome: "Fiscal", tipo: "sap", existe:true },
    { nome: "Contabilidade", tipo: "sap", existe:true },
    { nome: "Vendas e Distribuição", tipo: "sap", existe:true },
    { nome: "Tesouraria", tipo: "sap", existe:true },
    { nome: "Gestão da Dívida", tipo: "sap", existe:true },
    { nome: "Viagens", tipo: "sap", existe:true },
    { nome: "Fundo Fixo", tipo: "sap", existe:true },

    { nome: "Ambiente Acadêmico", tipo: "proprio", existe:true },
    { nome: "Contracheque", tipo: "proprio", existe:true },
    { nome: "Cotação", tipo: "proprio", existe:true }, 
    { nome: "EmbasaCAD", tipo: "terceiro", existe:true },
    { nome: "Ives - E-Social", tipo: "terceiro", existe:true },
    { nome: "Evolua", tipo: "proprio", existe:true },
    { nome: "Genius", tipo: "proprio", existe:true },
    { nome: "Mastersaf - DFE", tipo: "terceiro", existe:true },
    { nome: "Mastersaf - DW", tipo: "terceiro", existe:true },
    { nome: "Mastersaf - OneSource ECF", tipo: "terceiro", existe:true },
    { nome: "Portal EAD - UCE", tipo: "proprio", existe:true },
    { nome: "Portal UCE", tipo: "proprio", existe:true },

    { nome: "Processa", tipo: "proprio", existe:true },
    { nome: "Provida", tipo: "proprio", existe:true },
    { nome: "Recad", tipo: "proprio", existe:true },
	
];

const produtosFuturos002 = [
    { nome: "Gestão de Ativo Fixo", tipo: "sap", existe:true },
    { nome: "Contas a Pagar", tipo: "sap", existe:true },
    { nome: "Contas a Receber", tipo: "sap", existe:true },
    { nome: "Controladoria", tipo: "sap", existe:true },
    { nome: "Fundo Fixo", tipo: "sap", existe:true },
    { nome: "Finanças", tipo: "sap", existe:true },
    { nome: "Fiscal", tipo: "sap", existe:true },
    { nome: "Contabilidade", tipo: "sap", existe:true },
    { nome: "Vendas e Distribuição", tipo: "sap", existe:true },
    { nome: "Tesouraria", tipo: "sap", existe:true },
    { nome: "Gestão da Dívida", tipo: "sap", existe:true },
    { nome: "Viagens", tipo: "sap", existe:true },
    { nome: "Fundo Fixo", tipo: "sap", existe:true },

    { nome: "Ambiente Acadêmico", tipo: "proprio", existe:false },
    { nome: "Contracheque", tipo: "proprio", existe:false}, 
    { nome: "SuccessFactors -Learning", tipo: "sap", existe:true },
    { nome: "Strategic Sourcing", tipo: "sap", existe:true },
    { nome: "EmbasaCAD", tipo: "terceiro", existe:false },
    { nome: "Ariba", tipo: "sap", existe:false },
    { nome: "Ives - E-Social", tipo: "terceiro", existe:false },
    { nome: "Payroll Cloud", tipo: "sap", existe:true },
    { nome: "Evolua", tipo: "proprio", existe:false },
    { nome: "SuccessFactors - Performance and Goals", tipo: "sap", existe:true },
    { nome: "Genius", tipo: "proprio", existe:false },
    { nome: "SuccessFactors - Recruiting", tipo: "sap", existe:true },
    { nome: "Mastersaf - DFE", tipo: "terceiro", existe:false },
    { nome: "Mastersaf - DW", tipo: "terceiro", existe:false },
    { nome: "Mastersaf - OneSource ECF", tipo: "terceiro", existe:false },
    { nome: "Document and Reporting Compliance Inbound", tipo: "sap", existe:true },
    { nome: "Tax Intelligence", tipo: "sap", existe:true },
    { nome: "Portal EAD - UCE", tipo: "proprio", existe:false },
    { nome: "Portal UCE", tipo: "proprio", existe:false },
    { nome: "Processa", tipo: "proprio", existe:false },
    { nome: "Provida", tipo: "proprio", existe:false },
    { nome: "Recad", tipo: "proprio", existe:false },
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
