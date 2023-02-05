/* 
Proyecto Color Game

    Paso A Paso (Parte 1)
    Paso 1: Archivos HTML y CSS
    Para que practiques JavaScript a fondo te ayudaremos con los pasos de HTML y CSS:

    Creá los archivos index.html y style.css.
    Luego ingresá a este link -> https://github.com/katpachecob/colorGame.
    Copiá el código que se encuentra dentro de cada uno de los archivos y pegalos en los que creaste en el VSC, según corresponda.
    ⚠️Importante : más allá de que te demos resuelta esta parte, tenés la libertad de hacer las modificaciones que quieras en tus archivos.

    Paso 2 : Dar Color A Las Tarjetas
    Creá un archivo JavaScript para darle a cada cuadrado un color distinto:
    Creá un Arreglo llamado colors y escribí 6 colores en formato RGB.
    ⚠️ Importante: Escribí los colores respetando esta sintaxis (con los espacios) "rgb(240, 14, 128)".

    show hint
    Asignale a cada cuadrado un color:
    Seleccioná todos los cuadrados usando querySelectorAll().
    Recorrelos usando un for Loop. En cada vuelta del Loop, asignale un color del Arreglo colors.
    show hint
    📛 Asegurate de que los 6 cuadrados tengan los colores del Arreglo colors.

    👩🏻‍💻👨‍💻Acerca De Los Selectores

    Cada vez que selecciones un elemento utilizá una Variable para guardarlo. Por ejemplo, escribir la Variable square, es más rápido que document.querySelectorAll(".square")

    Avanzá a la siguiente sección para continuar con tu proyecto.

*/

console.group("Color Game");

let colors;
let pickedColor;
let numberOfSquares = 6;
let $squares = document.querySelectorAll('.square');
let $colorDisplay = document.querySelector('#colorDisplay');
let $message = document.querySelector('#message');
let $h1 = document.querySelector('h1');
let $reset = document.querySelector('#reset');
let $buttons = document.querySelectorAll('.btn');

function changeColors(color) {
    $squares.forEach( (square, i) => {
        square.style.backgroundColor = color;
    });
}

function pickColor(colores) {
    let indexRandom = Math.round(Math.random() * (colores.length - 1));
    return colores[indexRandom];
}

function randomColor() {
    let redRandom = Math.round(Math.random() * 255);
    let greenRandom = Math.round(Math.random() * 255);
    let blueRandom = Math.round(Math.random() * 255);
    return `rgb(${redRandom}, ${greenRandom}, ${blueRandom})`;
}

function generateRandomColors(num) {
    let arregloColors = [];
    for (let i = 0; i < num; i++) {
        arregloColors[i] = randomColor();
    }
    return arregloColors;
}

$reset.addEventListener('click', () => {
    reset();
})

function reset() {
    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor(colors);
    $colorDisplay.textContent = pickedColor;
    $squares.forEach( (square, i) => {
        if (colors[i]) {
            square.style.backgroundColor = colors[i];
            square.style.display = 'block';
        }else{
            square.style.display = 'none';
        }
    })
    $reset.textContent = 'Nuevos Colores';
    $message.textContent = '';
    $h1.style.backgroundColor = '#00172E';
}

function squaresHandleClick() {
    $squares.forEach( (square, i) => {
        square.addEventListener('click', () => {
            let clickedColor = '';
            clickedColor = square.style.backgroundColor;
    
            if (clickedColor === pickedColor) {
                $message.textContent = 'Correcto!';
                $h1.style.backgroundColor = pickedColor;
                changeColors(pickedColor);
                $reset.textContent = 'Play Again';
            }else{
                $message.textContent = 'Intentalo nuevamente';
                square.style.backgroundColor = 'transparent';
            }
        })
    })
}

function buttonsHandleClick() {
    $buttons.forEach( button => {
        button.addEventListener('click', (e) => {
            document.querySelector('.selected').classList.remove('selected');
            e.target.classList.add('selected');
    
            if(e.target.textContent === 'Easy'){
                numberOfSquares = 3;
                reset();
            }
    
            if(e.target.textContent === 'Hard'){
                numberOfSquares = 6;
                reset();
            }
        })
    })
}

function init() {

    reset();

    squaresHandleClick();

    buttonsHandleClick();
}

init();

console.groupEnd();


