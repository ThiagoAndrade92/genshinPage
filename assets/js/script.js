const observador = new IntersectionObserver((e) => {
    e.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    })
})

const elements = document.querySelectorAll('.titulo, .subtexto, #image');

elements.forEach((el) => observador.observe(el));

function hidden () {
    document.querySelectorAll('[id^="char"]').forEach((e) => { e.classList.add('hidden'); })
}

function show (id) {
    document.querySelector('#char' + id).classList.remove('hidden');
}

document.querySelectorAll('[id^="img_"]').forEach((btn) => {
    btn.addEventListener('click', (btn) => {
        hidden();
        show(btn.target.id.substring(4));
    })
})

hidden();
show(1);