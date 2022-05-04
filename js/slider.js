/* Код для слайдера фотографий в верхней части слайдера */
const sliderImages = document.querySelectorAll('.slider-images > img')
const sliderImage = document.querySelector('.slider-item>img')

const nextBtn = document.querySelector('.btn-next')
const prevBtn = document.querySelector('.btn-prev')

let imgs = [
  '/img/products/pancake1.jpg',
  '/img/products/pancake2.jpg',
  '/img/products/pancake3.jpg'
]

// Делаю объект
const slider = {
  // Задаю изначальное значение 0
  counter: 0,
  // Функция, которая рисует рамочку выбранной картинке
  renderImageBorder() {
    sliderImages.forEach((element) => {
      element.classList.toggle('clicked', element.dataset.id == slider.counter)
    })
  },
  // Функция рендера картинок и отключения\включения кнопок
  render() {
    sliderImage.setAttribute('src', imgs[slider.counter])
    sliderImage.setAttribute('data-id', slider.counter)
    slider.renderImageBorder()
    slider.buttons()
  },
  // Включить или выключить кнопку
  buttons() {
    nextBtn.classList.toggle('hide', slider.counter == imgs.length - 1)
    prevBtn.classList.toggle('hide', slider.counter == 0)
  },
  // Следующая картинка
  nextSliderButton() {
    slider.counter++
    slider.render()
  },
  // Предыдущая картинка
  prevSliderButton() {
    slider.counter--
    slider.render()
  }
}
// Смена картинки при нажатии на миниатуру 
sliderImages.forEach((element) => {
  element.addEventListener('click', () => {
    slider.counter = Number(element.dataset.id)
    slider.render()
  })
})

// Рендер при старте, обработчики клика на кнопки
slider.render()
nextBtn.addEventListener('click', slider.nextSliderButton)
prevBtn.addEventListener('click', slider.prevSliderButton)

/* ======================================================= */

/* Код для слайдера карточек в нижней части сайта */

const similarNextBtn = document.querySelector('.similar-btn-next')
const similarPrevBtn = document.querySelector('.similar-btn-prev')
const track = document.querySelector('.similar-slider-track')

// 0 1 2
// 2 0 1 
// Меняем элемента массива местами
function shift_right(array) {
  return [array[array.length - 1]].concat(array.splice(0, array.length - 1))
}

// 0 1 2
// 1 2 0
// Здесь тоже меняем, только в другую сторону
function shift_left(array) {
  return array.splice(1, array.length - 1).concat([array[0]])
}

const elements = document.querySelectorAll('.similar-slider-item')

const infinity_slider = {
  array: [0, 1, 2],
  // Рисуем элементы в новом порядке
  display() {
    elements.forEach((_, index) => {
      track.appendChild(elements[infinity_slider.array[index]])
    })
  },
  // Сдвиг в право
  next() {
    infinity_slider.array = shift_right(infinity_slider.array)
    infinity_slider.display()
  },
  // Сдвиг в лево
  prev() {
    infinity_slider.array = shift_left(infinity_slider.array)
    infinity_slider.display()
  }
}

// Отрисовываем слайдер, вешаем события на кнопки
infinity_slider.display()
similarNextBtn.addEventListener('click', infinity_slider.next)
similarPrevBtn.addEventListener('click', infinity_slider.prev)


// Старая версия, которая у меня не работает, и я не знаю почему, но я старался
// let position = 0

// const slidesToShow = 3
// const slidesToScroll = 1

// const container = document.querySelector('.similar-slider-container')
// const track = document.querySelector('.similar-slider-track')

// const item = document.querySelectorAll('.similar-slider-item')


// const itemsCount = item.length

// const itemWidth = container.clientWidth / slidesToShow
// const movePosition = slidesToScroll * itemWidth

// item.forEach((element) => {
//   element.style.maxWidth = `${itemWidth}px`
// })

// similarNextBtn.addEventListener('click', () => {
//   const ItemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth

//   position -= ItemsLeft >= slidesToScroll ? movePosition : ItemsLeft * itemWidth

//   setPosition()
//   checkBtns()
// })

// similarPrevBtn.addEventListener('click', () => {
//   const ItemsLeft = Math.abs(position) / itemWidth

//   position += ItemsLeft >= slidesToScroll ? movePosition : ItemsLeft * itemWidth

//   setPosition()
//   checkBtns()
// })

// const setPosition = () => {
//   track.style.transform = `translateX(${position}px)`
// }

// const checkBtns = () => {
//   similarPrevBtn.disabled = position === 0
//   similarNextBtn.disabled = position <= -(itemsCount -slidesToShow) * itemWidth
// }

// checkBtns()


/* ======================================================= */