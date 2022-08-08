const container = document.querySelector('#container');

function createBoxes () {
    updateContainer();
    let boxNumber = prompt('Input Number:');
    let double = boxNumber * boxNumber;
    for (let i = 0; i < double; i++) {
        const div = document.createElement('div');
        div.setAttribute('id','box');
        div.classList.add('inactive');
        container.appendChild(div);
    }
    const boxes = document.querySelectorAll('#box');
    for (let box of boxes) {
        draw(box, (e) => {
            e.target.classList.remove('inactive');
            e.target.classList.add('active');
            });
    }
}

function draw(element, enter) {
    element.addEventListener('mouseenter', enter);
}

function updateContainer () {
    container.innerHTML = '';
}

const resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', updateContainer);

const btn = document.querySelector('#btn');
btn.addEventListener('click', createBoxes);

