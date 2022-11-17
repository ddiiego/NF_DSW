const sinal = document.getElementById('sinal');

const um = document.getElementById('1');
const dois = document.getElementById('2');
const tres = document.getElementById('3');
const quatro = document.getElementById('4');
const cinco = document.getElementById('5');

function mudar1 () {
    sinal.src = './img/foto1.jpg';

}

function mudar2 () {
    sinal.src = './img/foto2.jpg';

}

function mudar3 () {
    sinal.src = './img/foto4.jpg';

}

function mudar4 () {
    sinal.src = './img/foto6.webp';

}

function mudar5 () {
    sinal.src =  './img/foto5.webp';

}
um.addEventListener('click', mudar1);
dois.addEventListener('click', mudar2);
tres.addEventListener('click', mudar3);
quatro.addEventListener('click', mudar4);
cinco.addEventListener('click', mudar5);