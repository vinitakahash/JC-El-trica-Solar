var radio = document.querySelector('.manual-btn')
var cont = 1

var checked = document.getElementById('radio1').checked = true

setInterval(() => {
    proximaImg()
}, 6000)

function proximaImg(){
    cont++
    if(cont > 4  && checked == false ){
        cont = 1
    }

    document.getElementById('radio'+cont).checked = true;
}

/* -------------------------------*/

function changeIndex(index) {
    // Define o zIndex alvo para cada imagem com base no índice fornecido
    var zIndexes = [4,3,2,1];

    // Ajusta os z-indexes das imagens de acordo com o índice fornecido
    var images = document.querySelectorAll('#servicos .img-servicos > img');
    images.forEach(function(image, i) {
        image.style.zIndex = zIndexes[(i + index - 1) % 4];
    });
}

function A() {
    document.querySelector('.titulo-conteudo').innerText = 'A';
    document.querySelector('.texto-conteudo').innerText = ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Est doloribus laboriosam ducimus! Quis in placeat eligendi maiores dolores officia tenetur dignissimos. Molestiae quam assumenda cumque optio sunt alias excepturi ratione.';
}
function B() {
    document.querySelector('.titulo-conteudo').innerText = 'B';
    document.querySelector('.texto-conteudo').innerText = ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Est doloribus laboriosam ducimus! Quis in placeat eligendi maiores dolores officia tenetur dignissimos. Molestiae quam assumenda cumque optio sunt alias excepturi ratione.';
}
function C() {
    document.querySelector('.titulo-conteudo').innerText = 'C';
    document.querySelector('.texto-conteudo').innerText = ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Est doloribus laboriosam ducimus! Quis in placeat eligendi maiores dolores officia tenetur dignissimos. Molestiae quam assumenda cumque optio sunt alias excepturi ratione.';
    
}
function D() {
    document.querySelector('.titulo-conteudo').innerText = 'D';
    document.querySelector('.texto-conteudo').innerText = ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Est doloribus laboriosam ducimus! Quis in placeat eligendi maiores dolores officia tenetur dignissimos. Molestiae quam assumenda cumque optio sunt alias excepturi ratione.    ';
}