let h3 = document.querySelector('h3');
let color1 = document.querySelector('.color1');
let color2 = document.querySelector('.color2');
let body  = document.getElementById('gradient')
let randomButton = document.getElementById('random')

const rgbToHex = rgb => '#' + (rgb.match(/[0-9|.]+/g).map((x, i) => i === 3 ? parseInt(255 * parseFloat(x)).toString(16) : parseInt(x).toString(16)).join('')).padStart(2, '0').toUpperCase();


color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

randomButton.addEventListener('click', setRandomGradient);

function setGradient(){
    body.style.background ='linear-gradient(to right, ' + color1.value + ', ' + color2.value + ')'; 
    
    h3.innerText = body.style.background + ";"

}

function setRandomGradient(){
    console.log('finding random color....')
    let col1 = "rgb" + "(" + (Math.floor(Math.random() * 255) +
    ", " +
    Math.floor(Math.random() * 255) +
    ", " +
    Math.floor(Math.random() * 255) +
    ")" + ";");

    let col2 = "rgb" + "(" + (Math.floor(Math.random() * 255) +
    ", " +
    Math.floor(Math.random() * 255) +
    ", " +
    Math.floor(Math.random() * 255) +
    ")" + ";");

    color1.value=rgbToHex(col1)
    color2.value=rgbToHex(col2)

    setGradient();
}