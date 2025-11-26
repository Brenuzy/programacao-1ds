/**
 * Programa em JavaScript para enviar mensagens de agradecimento 
 * aos clientes usando o iterador 'for...of'.
 */

// REQUISITO 1: Crie um array chamado clientes com pelo menos 5 nomes fictícios.
const clientes = [
    "Ana Silva", 
    "Bruno Mendes", 
    "Carla Ribeiro", 
    "Daniel Ferreira", 
    "Eduarda Costa"
];

// REQUISITO 2: Use um loop for...of para percorrer o array.
// O 'for...of' utiliza o protocolo de iteração, acessando cada elemento sequencialmente.
for (const nome of clientes) {
    // REQUISITO 3: Para cada nome, exiba no console a mensagem personalizada.
    console.log(`Enviando e-mail de agradecimento para ${nome}.`);
}


/**
 * Programa JavaScript para filtrar e exibir clientes que compraram 
 * nos últimos 30 dias usando o método forEach().
 */

// 1. DEFINE A DATA DE REFERÊNCIA (30 DIAS ATRÁS)
// Cria um objeto Date para o momento atual.
const hoje = new Date(); 
// Cria uma cópia e subtrai 30 dias em milissegundos (1000ms * 60s * 60min * 24h * 30d).
const trintaDiasAtras = new Date(hoje.getTime() - (1000 * 60 * 60 * 24 * 30));

// Função auxiliar para criar objetos Date a partir de strings 'YYYY-MM-DD'
const criarData = (dataString) => {
    // Adiciona "T00:00:00" para garantir que a hora não afete a comparação no fuso horário local.
    return new Date(dataString + 'T00:00:00'); 
};

// 2. CRIA A LISTA DE REGISTROS (MÍNIMO 10)
const compras = [
    { cliente: "Alice", data: criarData("2025-10-25"), valor: 150.00 }, // Últimos 30 dias (Ex: Hoje é 25/11/2025)
    { cliente: "Bob", data: criarData("2025-09-01"), valor: 50.00 }, // Antiga
    { cliente: "Charlie", data: criarData("2025-11-24"), valor: 300.50 }, // Últimos 30 dias (Ontem)
    { cliente: "David", data: criarData("2025-11-05"), valor: 25.00 }, // Últimos 30 dias
    { cliente: "Eve", data: criarData("2025-08-10"), valor: 450.00 }, // Antiga
    { cliente: "Frank", data: criarData("2025-10-01"), valor: 90.00 }, // Antiga (Mais de 30 dias)
    { cliente: "Grace", data: criarData("2025-11-25"), valor: 1200.00 }, // Últimos 30 dias (Hoje)
    { cliente: "Henry", data: criarData("2025-11-20"), valor: 10.00 }, // Últimos 30 dias
    { cliente: "Ivy", data: criarData("2025-09-15"), valor: 75.00 }, // Antiga
    { cliente: "Jack", data: criarData("2025-10-30"), valor: 500.00 } // Últimos 30 dias
];

// Array para armazenar apenas os nomes dos clientes recentes (para exibição final)
const clientesRecentes = [];

console.log("--- Filtro de Compras Recentes ---");
console.log(`Data de Referência (30 dias atrás): ${trintaDiasAtras.toLocaleDateString('pt-BR')}`);
console.log("----------------------------------");

// 3. USA forEach PARA PERCORRER E FILTRAR A LISTA
// O forEach itera sobre cada item do array 'compras'.
compras.forEach(compra => {
    // Compara a data da compra (em milissegundos) com a data de 30 dias atrás (em milissegundos).
    // Uma data é recente se for MAIOR ou IGUAL à data de 30 dias atrás.
    if (compra.data.getTime() >= trintaDiasAtras.getTime()) {
        clientesRecentes.push(compra.cliente);
    }
});

// 4. EXIBE A SAÍDA COM OS CLIENTES COMPRADORES NOS ÚLTIMOS 30 DIAS
if (clientesRecentes.length > 0) {
    // Usa Set para remover duplicatas de clientes, caso um cliente tenha mais de uma compra recente
    const nomesUnicos = [...new Set(clientesRecentes)];
    
    console.log(`Clientes que compraram nos últimos 30 dias (${nomesUnicos.length} clientes únicos):`);
    
    nomesUnicos.forEach(nome => {
        console.log(`✅ ${nome}`);
    });
} else {
    console.log("Nenhum cliente comprou nos últimos 30 dias.");
}


/**
 * Programa JavaScript para remover duplicados usando Set e iterar
 * sobre os nomes únicos usando for...of.
 */

// 1. CRIA A LISTA COM NOMES REPETIDOS (Mínimo 10 nomes, Mínimo 3 repetidos)
const listaComDuplicados = [
    "Alice", 
    "Bob", 
    "Alice",        // Repetido 1
    "Charlie", 
    "David", 
    "Eva", 
    "Frank", 
    "Grace", 
    "Henry", 
    "Bob",          // Repetido 2
    "Ivy",
    "Frank"         // Repetido 3
];

console.log("--- Lista Original com Duplicados ---");
console.log(listaComDuplicados);
console.log("-------------------------------------");

// 2. REMOVE DUPLICADOS USANDO O OBJETO SET
// O Set armazena apenas valores únicos. Passamos o array para o construtor do Set.
const nomesUnicosSet = new Set(listaComDuplicados); 

console.log(`Nomes Únicos encontrados (${nomesUnicosSet.size} no total):`);
console.log("-------------------------------------");

// 3. USA UM ITERADOR (for...of) PARA PERCORRER E EXIBIR OS NOMES ÚNICOS
// O objeto Set é um objeto iterável, e o for...of é o iterador utilizado.
for (const nome of nomesUnicosSet) {
    // Exibe a saída com os nomes únicos da lista.
    console.log(`✔️ ${nome}`);
}
