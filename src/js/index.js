const modal = document.querySelector('.modal')
const botaoFechar = document.querySelector('.fechar-modal')
const botaoTrailer = document.querySelector('.botao-trailer')
const video = document.getElementById('video')
const linkdovideo = video.src

botaoTrailer.addEventListener('click', () => {
    modal.classList.add('aberto')
    video.setAttribute("src", linkdovideo)
})

botaoFechar.addEventListener('click', () => {
    modal.classList.remove('aberto')
    video.setAttribute("src", "")
})