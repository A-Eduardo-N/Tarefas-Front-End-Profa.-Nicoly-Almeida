//Questão 1
alert('Olá, esta é uma mensagem de alerta!');
console.log('Mensagem exibida no console!');

//Questão 2
console.log('Largura da janela:', window.innerWidth);
console.log('Altura da janela:', window.innerHeight);

//Questão 3
localStorage.setItem('meuValor', 'Olá, Local Storage!');
console.log('Valor no Local Storage:', localStorage.getItem('meuValor'));

//Questão 4
var div = document.createElement('div');
div.id = 'meuDiv';
document.body.appendChild(div);

//Questão 5
div.textContent = 'Este é o conteúdo do meu div!';
div.style.color = 'white';
div.style.backgroundColor = 'blue';
div.style.padding = '10px';
div.style.fontSize = '20px';

//Questão 6
var p = document.getElementById('paragrafo');
p.textContent = 'Texto alterado!';
p.style.backgroundColor = 'yellow';

//Questão 7
var img = document.getElementById('minhaImagem');
img.setAttribute('title', 'Imagem dinâmica');

//Questão 8
var botao = document.createElement('button');
botao.textContent = 'Alterar conteúdo do div';
document.body.appendChild(botao);

botao.addEventListener('click', function() {
  div.textContent = 'O conteúdo do div foi alterado!';
  div.style.backgroundColor = 'green';
});

//Questão 9
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      console.log('A tecla Enter foi pressionada!');
    }
  });
  
//Questão 10
var ul = document.createElement('ul');
document.body.appendChild(ul);

function adicionarItem() {
  var li = document.createElement('li');
  li.textContent = 'Novo item';
  
  var botaoRemover = document.createElement('button');
  botaoRemover.textContent = 'Remover';
  
  botaoRemover.addEventListener('click', function() {
    ul.removeChild(li);
  });
  
  li.appendChild(botaoRemover);
  ul.appendChild(li);
}

// Adiciona um item à lista ao clicar no botão
var adicionarBotao = document.createElement('button');
adicionarBotao.textContent = 'Adicionar item';
document.body.appendChild(adicionarBotao);

adicionarBotao.addEventListener('click', adicionarItem);
