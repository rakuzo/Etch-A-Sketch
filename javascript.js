const container = document.querySelector('#container');


for (let i = 0; i < 256; i++) {
    const div = document.createElement('div');
    div.classList.add('inactive');
    container.appendChild(div);
}

function hover(element, enter) {
    element.addEventListener('mouseenter', enter);
}

hover(document.querySelector('#container > div'), (e) => {
        e.target.classList.remove('inactive');
        e.target.classList.add('active');
    });