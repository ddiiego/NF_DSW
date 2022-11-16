const sinal = document.getElementById('sinal');

const um = document.getElementById('1');
const dois = document.getElementById('2');
const tres = document.getElementById('3');
const quatro = document.getElementById('4');
const cinco = document.getElementById('5');

function mudar1 () {
    sinal.src = './img/inuyasha.jpg';

}

function mudar2 () {
    sinal.src = './img/ippo.png';

}

function mudar3 () {
    sinal.src = './img/tenchi.jpg';

}

function mudar4 () {
    sinal.src = './img/tenjhotenge.jpg';

}

function mudar5 () {
    sinal.src =  './img/chrono.jpg';

}
um.addEventListener('click', mudar1);
dois.addEventListener('click', mudar2);
tres.addEventListener('click', mudar3);
quatro.addEventListener('click', mudar4);
cinco.addEventListener('click', mudar5);