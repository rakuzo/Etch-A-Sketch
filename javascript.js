const container = document.querySelector('#container');

function createBoxes () {
    let startNum = 256;
    for (let i = 0; i < startNum; i++) {
        const div = document.createElement('div');
        div.setAttribute('id','box');
        div.classList.add('inactive');
        container.appendChild(div);
    }
    detectAllBox();
}

let rootCSS = document.querySelector(':root');

function modifyBoxes () {
    let boxNumber = prompt('Input Number (1-100):');
    let a = parseInt(boxNumber);
    if (Number.isNaN(a) || a > 100 || a < 1) {
        alert('Please input only number between 1-100');
    } else {
        clearContainer();
        let double = boxNumber * boxNumber;
        let newWidth = (600 / boxNumber);
        rootCSS.style.setProperty('--width', newWidth + 'px')
        for (let i = 0; i < double; i++) {
            const div = document.createElement('div');
            div.setAttribute('id','box');
            div.classList.add('inactive');
            container.appendChild(div);
        }
        detectAllBox();
    }
}

function draw (element, enter) {
    element.addEventListener('mouseenter', enter);
}

function detectAllBox () {
    const boxes = document.querySelectorAll('#box');
    for (let box of boxes) {
        draw(box, (e) => {
            e.target.classList.remove('inactive');
            e.target.classList.add('active');
            });
    }
}

function resetAllBox () {
    const squares = document.querySelectorAll('#box');
    for (let square of squares) {
        square.removeAttribute('class');
        square.classList.add('inactive');
    }
}

function createSolidColor () {
    const pixel = document.querySelectorAll('#box');
    for (let pix of pixel) {
        draw(pix, (e) => {
            pix.removeAttribute('class');
            pix.classList.add('active');
        });
    }
}

function createRainbow () {
    const nodes = document.querySelectorAll('#box');
    const color = ['red','green','blue','orange','yellow','indigo','violet'];
    for (let node of nodes) {
        let random = Math.floor(Math.random() * color.length);
        draw(node, (e) => {
            e.target.removeAttribute('class');
            e.target.classList.add(color[random]);
        });
    }
}

function createFlicker () {
    const dots =  document.querySelectorAll('#box');
    for (let dot of dots) {
        let randRed = Math.floor(Math.random() * 256);
        let randGreen = Math.floor(Math.random() * 256);
        let randBlue = Math.floor(Math.random() * 256);
        draw(dot, (e) => {
            rootCSS.style.setProperty('--random', `rgb(${randRed}, ${randGreen}, ${randBlue})`);
            e.target.removeAttribute('class');
            e.target.classList.add('color');
        })

    }
}

function clearContainer () {
    container.innerHTML = '';
}

const resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', resetAllBox);

const btn = document.querySelector('#btn');
btn.addEventListener('click', modifyBoxes);

const rainbow = document.querySelector('#rainbow')
rainbow.addEventListener('click', createRainbow);

const solid = document.querySelector('#solid')
solid.addEventListener('click', createSolidColor);

const flicker = document.querySelector('#flicker');
flicker.addEventListener('click', createFlicker)

createBoxes();