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
    clearContainer();
    let boxNumber = prompt('Input Number (1-100):');
    let double = boxNumber * boxNumber;
    for (let i = 0; i < double; i++) {
        const div = document.createElement('div');
        div.setAttribute('id','box');
        div.classList.add('inactive');
        container.appendChild(div);
    }
    detectAllBox();
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

function clearContainer () {
    container.innerHTML = '';
}

const resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', clearContainer);

const btn = document.querySelector('#btn');
btn.addEventListener('click', modifyBoxes);

createBoxes();