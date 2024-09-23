// 1. Criação de um Objeto JSON
const aluno = {
    nome: "João",
    idade: 21,
    curso: "Engenharia",
    notas: [7.5, 8.0, 9.0]
};

// 2. Acesso a Propriedades
console.log("Nome do aluno:", aluno.nome); // Exibe o nome do aluno
console.log("Nota da primeira disciplina:", aluno.notas[0]); // Exibe a primeira nota

// 3. Modificação de Propriedades
aluno.idade = 22; // Atualiza a idade
aluno.notas.push(8.5); // Adiciona uma nova nota
console.log("Aluno após atualização:", aluno);

// 4. Conversão para String
const alunoString = JSON.stringify(aluno);
console.log("Aluno como string JSON:", alunoString);

// 5. Conversão para Objeto
const alunoObjeto = JSON.parse(alunoString);
console.log("Aluno convertido de volta para objeto:", alunoObjeto);

// 6. Iteração sobre Propriedades
console.log("Propriedades do aluno:");
for (const prop in aluno) {
    console.log(`${prop}: ${aluno[prop]}`);
}

// 7. Cálculo da Média das Notas
const mediaNotas = aluno.notas.reduce((acc, curr) => acc + curr, 0) / aluno.notas.length;
console.log("Média das notas do aluno:", mediaNotas);

// 8. Criação de um Objeto JSON Aninhado
aluno.endereco = {
    rua: "Av. Brasil",
    cidade: "São Paulo",
    estado: "SP"
};

// 9. Acesso a Dados Aninhados
console.log("Cidade do aluno:", aluno.endereco.cidade);
console.log("Estado do aluno:", aluno.endereco.estado);

// 10. Lista de Alunos
const alunos = [
    {
        nome: "Maria",
        idade: 20,
        curso: "Matemática",
        notas: [9.0, 8.5, 10.0],
        endereco: { rua: "Rua 1", cidade: "Rio de Janeiro", estado: "RJ" }
    },
    {
        nome: "Pedro",
        idade: 23,
        curso: "Física",
        notas: [6.0, 7.0, 8.0],
        endereco: { rua: "Rua 2", cidade: "Belo Horizonte", estado: "MG" }
    },
    aluno // Incluindo o aluno criado anteriormente
];

// 11. Filtragem de Alunos
const alunosComMediaAlta = alunos.filter(aluno => {
    const media = aluno.notas.reduce((acc, curr) => acc + curr, 0) / aluno.notas.length;
    return media > 8;
});

console.log("Alunos com média superior a 8:", alunosComMediaAlta);
