// 1. Criação de Arrays
const notas = [7.5, 8.0, 6.0, 9.5, 5.5];

// 2. Acesso aos Elementos
console.log("Primeira nota:", notas[0]); // Exibe a primeira nota
console.log("Última nota:", notas[notas.length - 1]); // Exibe a última nota

// 3. Adicione uma nova nota ao final do array usando push()
notas.push(8.5);
console.log("Notas após adicionar 8.5:", notas);

// 4. Remova a primeira nota do array usando shift()
notas.shift();
console.log("Notas após remover a primeira:", notas);

// 5. Iteração com forEach
console.log("Notas de cada aluno:");
notas.forEach(nota => console.log(nota));

// 6. Cálculo da Média
const media = notas.reduce((acc, curr) => acc + curr, 0) / notas.length;
console.log("Média das notas:", media);

// 7. Filtro de Notas
const notasMaioresQueSete = notas.filter(nota => nota > 7);
console.log("Notas maiores que 7:", notasMaioresQueSete);

// 8. Ordenação
notas.sort((a, b) => a - b);
console.log("Notas em ordem crescente:", notas);

// 9. Busca de Elementos
const temNotaSeisPontoCinco = notas.includes(6.5);
console.log("A nota 6.5 está presente?", temNotaSeisPontoCinco);

// 10. Encontre o Índice
const indiceNotaOito = notas.indexOf(8.0);
console.log("Índice da nota 8.0:", indiceNotaOito);

// 11. Mapeamento
const notasAoQuadrado = notas.map(nota => nota ** 2);
console.log("Notas ao quadrado:", notasAoQuadrado);
