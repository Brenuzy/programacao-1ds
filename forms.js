/**
 * Desafio Prático: Gerenciador de Dados de Usuários
 * Utiliza Array (Lista), Set (Conjunto) e Map (Mapa)
 */

// --- 1. Estruturas de Dados ---

// Array (Lista): Permite duplicatas.
const nomesClientes = []; 

// Set (Conjunto): Não permite duplicatas.
const emailsUnicos = new Set();

// Map (Mapa): Armazena pares chave-valor (ID -> Telefone).
const telefonesPorId = new Map();

// --- 2. Função para Obter Entrada do Usuário com Validação ---
function obterEntrada(mensagem) {
    let entrada = prompt(mensagem);
    // Remove espaços em branco extras e garante que não está vazio
    while (!entrada || entrada.trim() === "") {
        alert("A entrada não pode ser vazia. Por favor, tente novamente.");
        entrada = prompt(mensagem);
    }
    return entrada.trim();
}

// --- 3. Cadastro de 10 Elementos para cada Estrutura ---

// 3.1. Cadastro de 10 Nomes (Array)
alert("--- Cadastro de Nomes (Lista) ---");
for (let i = 1; i <= 10; i++) {
    const nome = obterEntrada(`[${i}/10] Digite o nome do cliente:`);
    nomesClientes.push(nome);
}

// 3.2. Cadastro de 10 E-mails (Set)
alert("--- Cadastro de E-mails (Conjunto Único) ---");
console.log("Atenção: O Set automaticamente ignorará e-mails duplicados.");
for (let i = 1; i <= 10; i++) {
    const email = obterEntrada(`[${i}/10] Digite o e-mail do cliente:`);
    // O Set.add() adiciona o elemento, mas só se for único
    emailsUnicos.add(email);
}

// 3.3. Cadastro de 10 Pares ID e Telefone (Map)
alert("--- Cadastro de ID e Telefone (Mapa) ---");
for (let i = 1; i <= 10; i++) {
    // Para simplificar, o ID será um número sequencial, mas solicitamos o Telefone
    const id = i; 
    const telefone = obterEntrada(`[${i}/10] Digite o telefone para o ID ${id}:`);
    
    // O Map.set() associa o ID (chave) ao Telefone (valor)
    telefonesPorId.set(id, telefone);
}

// --- 4. Exibição dos Dados Organizados ---
console.log("\n" + "=".repeat(50));
console.log("     RELATÓRIO DE DADOS CADASTRAOS     ");
console.log("=".repeat(50) + "\n");


// 4.1. Exibindo a Lista de Nomes (Array)
console.log(">>> Lista de Nomes Cadastrados: <<<");
if (nomesClientes.length > 0) {
    // Iterando o Array e exibindo cada nome
    nomesClientes.forEach((nome, index) => {
        console.log(`[${index + 1}] ${nome}`);
    });
} else {
    console.log("Nenhuma nome foi cadastrado.");
}
console.log("-" + "\n");


// 4.2. Exibindo o Conjunto de E-mails Únicos (Set)
console.log(">>> Conjunto de E-mails Únicos: <<<");
if (emailsUnicos.size > 0) {
    let contador = 1;
    // Iterando o Set e exibindo cada e-mail
    emailsUnicos.forEach(email => {
        console.log(`[${contador}] ${email}`);
        contador++;
    });
    console.log(`(Total de e-mails únicos: ${emailsUnicos.size})`);
} else {
    console.log("Nenhum e-mail foi cadastrado.");
}
console.log("-" + "\n");


// 4.3. Exibindo o Mapa de Telefones por ID (Map)
console.log(">>> Mapa de Telefones por ID: <<<");
if (telefonesPorId.size > 0) {
    // Iterando o Map (chave=id, valor=telefone) e exibindo cada par
    telefonesPorId.forEach((telefone, id) => {
        console.log(`ID ${id} -> Telefone: ${telefone}`);
    });
} else {
    console.log("Nenhum par ID/Telefone foi cadastrado.");
}
console.log("-" + "\n");
