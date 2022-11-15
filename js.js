const sinal = document.getElementById('sinal');
const buttons = document.getElementById('buttons')
let colorIndex = 0;
let intervalID = null;

const trafficLight = ( Event ) => {
    paraOauto();
    turnOn[Event.target.id]();
   
}

const nextIndex = () => {
   colorIndex = colorIndex < 2 ? ++colorIndex : 0;
}

const changeColor = () => {
    const colors = ['vermelho','amarelo','verde']
    const color = colors[ colorIndex ];
    turnOn[color]();
    nextIndex();
}

const paraOauto = () => {
    clearInterval ( intervalID );
}

const turnOn = {
    'vermelho':     () => sinal.src = './img/chrono.jpg',
    'amarelo':      () => sinal.src = './img/inuyasha.jpg',
    'verde':        () => sinal.src = './img/ippo.png',
    'auto':         () => intervalID = setInterval( changeColor, 2000)    
}

buttons.addEventListener('click', trafficLight);