const submit = document.querySelector('#submit');
const input = document.querySelectorAll('.input')
const form = document.querySelector('.form');

submit.addEventListener('click', () => {

    let cheio = 0;
    input.forEach((e, i) => {

        if (!e.children[1].value) {
            e.children[0].style = 'opacity: 1';
            e.children[2].style = 'opacity: 1';
            form.style = 'gap:60px';
        } else {
            cheio += 1;
        }

        if (cheio == 4) {
            alert('Cadastro concluido com sucesso!');
            e.children[0].style = 'opacity: 0';
            e.children[2].style = 'opacity: 0';
            form.style = 'gap:30px';
        }

    })
})




