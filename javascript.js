const container = document.querySelector('#container');


for (let i = 0; i < 256; i++) {
    const div = document.createElement('div');
    div.setAttribute('id','box');
    div.classList.add('inactive');
    container.appendChild(div);
}

function hover(element, enter) {
    element.addEventListener('mouseenter', enter);
}

const boxes = document.querySelectorAll('#box');

for (let box of boxes) {
    hover(box, (e) => {
        e.target.classList.remove('inactive');
        e.target.classList.add('active');
        });
}