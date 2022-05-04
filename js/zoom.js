const zoomWindow = document.querySelector('.zoom')
const zoomImage = document.querySelector('.img-container > img')

const closeZoom = document.querySelector('.close-zoom')

function zoom(e) {
  // Меняем картинку в зум-модалке опираясь на айдишник текущей картинки в слайдере
  zoomWindow.classList.toggle('opened')
  zoomImage.setAttribute('src', imgs[Number(e.dataset.id)])
  body.classList.toggle('open-menu')
}

// Закрываем при нажатии на кнопку
closeZoom.addEventListener('click', () => {
  zoomWindow.classList.toggle('opened')
  body.classList.toggle('open-menu')
})