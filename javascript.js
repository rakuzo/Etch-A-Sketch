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

function modifyBoxes () {
    let boxNumber = prompt('Input Number (1-100):');
    let a = parseInt(boxNumber);
    if (Number.isNaN(a) || a > 100 || a < 1) {
        alert('Please input only number between 1-100');
    } else {
        clearContainer();
        let double = boxNumber * boxNumber;
        let newWidth = (600 / boxNumber);
        r.style.setProperty('--width', newWidth + 'px')
        for (let i = 0; i < double; i++) {
            const div = document.createElement('div');
            div.setAttribute('id','box');
            div.classList.add('inactive');
            container.appendChild(div);
        }
        detectAllBox();
    }
}

let r = document.querySelector(':root');

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
        // box.className = '';
        square.removeAttribute('class');
        square.classList.add('inactive');
    }
}

function clearContainer () {
    container.innerHTML = '';
}

const resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', resetAllBox);

const btn = document.querySelector('#btn');
btn.addEventListener('click', modifyBoxes);

createBoxes();