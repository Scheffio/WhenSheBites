const burgerbtn = document.querySelector(".burger")
const burgerMenu = document.querySelector('.burger__menu')
const burgerOverlay = document.querySelector('.burger__overlay')
const body = document.querySelector('body')

// Добавляю булеву переменную для того, чтобы отслеживать состояние меню
let isShowed = false

burgerbtn.addEventListener("click", function () {

  if (!isShowed) {
    // Если меню закрыто - открываем
    burgerbtn.classList.toggle('open-menu')
    burgerMenu.classList.toggle('open-menu')
    burgerOverlay.classList.toggle('open-menu')
    body.classList.toggle('open-menu')
    isShowed = true
  } else {
    // Иначе закрываем
    burgerbtn.classList.toggle('open-menu')
    burgerMenu.classList.toggle('hide-menu')
    burgerOverlay.classList.toggle('hide-menu')

    // Удаляем классы, после того, как пройдет анимация
    setTimeout(() => {
      burgerMenu.classList.remove('hide-menu')
      burgerOverlay.classList.remove('hide-menu')
      burgerMenu.classList.remove('open-menu')
      burgerOverlay.classList.remove('open-menu')
      body.classList.toggle('open-menu')
    }, 500)
    isShowed = false
  }
})