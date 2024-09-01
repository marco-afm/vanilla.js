const ligar = document.getElementById('ligar');
const desligar = document.getElementById('desligar');
const imagemLampada = document.getElementById('imagem');

ligar.addEventListener('click', function() {
    imagemLampada.src = './assets/ligada.jpg';
});

desligar.addEventListener('click', function() {
    imagemLampada.src = './assets/desligada.jpg';
});

imagemLampada.addEventListener('dblclick', function() {
    imagemLampada.src = './assets/quebrada.jpg';
});