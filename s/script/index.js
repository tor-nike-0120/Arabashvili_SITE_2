const img = document.querySelector('.article-img'); /*Ивент на клик мышки*/

img.addEventListener('click', (event) => {
    img.classList.toggle('active')
})