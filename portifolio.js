//MUDANDO TEMA
const btnTema = document.getElementById('tema')

btnTema.addEventListener('click', function() {
        document.body.classList.toggle('tema-escuro');
        if (document.body.classList.contains('tema-escuro')) {
            btnTema.textContent='Modo Escuro';
        }
        else {
            btnTema.textContent='Modo Claro';
        }
});

//MENU HAMBURGUER
const btnHamb = document.getElementById('menu-hamburguer');
const menuLista = document.getElementById('menu-lista');

btnHamb.addEventListener('click', function() {
    menuLista.classList.toggle('menu-aberto');
    const aberto = menuLista.classList.contains('menu-aberto');

    btnHamb.setAttribute('aria-expanded', aberto);
});

menuLista.addEventListener('click', function(evento) {
    if (evento.target.tagName === 'A') {
        menuLista.classList.remove('menu-aberto');
        btnHamb.setAttribute('aria-expanded','false');
    }
})

//CONTATO
const formContato = document.getElementById('form-contato');
const campoNome = document.getElementById('nome');
const campoEmail = document.getElementById('email');
const campoMensagem = document.getElementById('mensagem')
const confirmEnvio = document.getElementById('confirm-envio');

function mostrarErro(campo, elementoErro, mensagem) {
    campo.closest('.campo').classList.add('campo-invalido');
    elementoErro.textContent = mensagem;
}

function limparErro(campo, elementoErro) {
    campo.closest('.campo').classList.remove('campo-invalido');
    elementoErro.textContent = '';
}

function emailValido(email) {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(email);
}

formContato.addEventListener('submit', function(evento) {
    evento.preventDefault();
    let formValido = true;
    const erroNome = document.getElementById('erro-nome');
    const erroEmail = document.getElementById('erro-email');
    const erroMensagem = document.getElementById('erro-mensagem');

    //VALIDAÇÃO NOME
    if (campoNome.value.trim() === '') {
        mostrarErro(campoNome, erroNome, 'Por favor, preencha seu nome.')
        formValido = false;
    }
    else {
        limparErro(campoNome, erroNome);
    }
    //VALIDAÇÃO EMAIL
    if (campoEmail.value.trim() === '') {
        mostrarErro(campoEmail, erroEmail,'Por favor, preencha seu e-mail.');
        formValido = false;
    }
    else if (!emailValido(campoEmail.value.trim())) {
        mostrarErro(campoEmail, erroEmail, 'Digite um e-mail válido (ex: usuario@dominio.com)');
        formValido = false;
    }
    else {
        limparErro(campoEmail, erroEmail);
    }
    //VALIDAÇÃO MENSAGEM
    if (campoMensagem.value.trim() === '') {
        mostrarErro(campoMensagem, erroMensagem, 'Por favor, escreva sua mensagem.');
        formValido = false;
    }
    else {
        limparErro(campoMensagem, erroMensagem);
    }

    if (!formValido) {
        confirmEnvio.textContent = '';
        return;
    }

    //ENVIO
    formContato.reset();
    confirmEnvio.textContent = 'Mensagem enviada com sucesso!';

    setTimeout(function() {
        confirmEnvio.textContent = '';
    }, 5000)
});