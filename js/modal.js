/* Логика открытия и закрытия модального окна*/
const modal = document.querySelector('.modal')
const modalContent = document.querySelector('.modal-content')

const addRecipe = document.querySelectorAll('.header__addRecipeBtn')


//body уже была объявлена ранее в другом файле js. (burger-menu.js)
//Поэтому дважды я не объявляю, я ж не глупый, ну только если 
//чуть-чуть

addRecipe.forEach((elem) => {
  elem.addEventListener('click', () => {
    modal.classList.toggle('open-modal')
    if (!body.classList.contains('open-menu')) {
      body.classList.toggle('open-menu')
    }
  })
})

modal.addEventListener('click', (e) => {
  if (e.target == modal) {
    body.classList.remove('open-menu')
    modal.classList.add('hide-modal')
    modalContent.classList.add('hideModalContent')

    // Скрываем модальное окно сразу после анимаций
    setTimeout(() => {
      modalContent.classList.remove('hideModalContent')
      modal.classList.remove('hide-modal')
      modal.classList.remove('open-modal')
    }, 500)
  }
})

/* ================================================ */

/* Логика добавления новых указаний */

const addDirection = document.querySelector('.add-btn')
const direction = document.querySelector('.add-btn').nextElementSibling
const addableBlock = document.querySelector('.addable-directions')

addDirection.addEventListener('click', () => {
  if (direction.value != '') {
    // Создаю элементы
    let newDirection = document.createElement('input')
    let newFieldBlock = document.createElement('div')
    let deleteField = document.createElement('div')

    // Задаю элементам нужные атрибуты
    newFieldBlock.setAttribute('class', 'new-field-block')
    deleteField.setAttribute('class', 'delete-btn')
    newDirection.setAttribute('class', 'new-field')

    // Переношу введнный текст
    newDirection.value = direction.value

    // Присваиваю элементы в блок
    newFieldBlock.appendChild(deleteField)
    newFieldBlock.appendChild(newDirection)
    addableBlock.appendChild(newFieldBlock)

    // Очищаю инпут и даю на него фокус
    direction.value = ''
    direction.focus()

    // Функция удаления элемента
    deleteField.addEventListener('click', () => {
      addableBlock.removeChild(newFieldBlock)
    })
  }
})
/* ================================================ */

const ingridients = document.querySelector('.addable-inputs')

const countOfIngridient = document.querySelector('.new-recipe-count-field > input')
const unitOfIngridient = document.querySelector('.new-recipe-unit-field > input')

const addIngridientBtn = document.querySelector('.modal-content__form > a')

addIngridientBtn.addEventListener('click', () => {
  if (countOfIngridient.value != '' && unitOfIngridient.value != '') {
    // Практически такая же логика, что и выше
    let newCount = document.createElement('div')
    let newUnit = document.createElement('div')
    let newElement = document.createElement('div')
    let newCountInput = document.createElement('input')

    let deleteField = document.createElement('div')

    let newUnitInput = document.createElement('input')

    newCountInput.value = countOfIngridient.value
    newUnitInput.value = unitOfIngridient.value

    newCount.setAttribute('class', 'new-recipe-count-field')
    newUnit.setAttribute('class', 'new-recipe-unit-field')
    deleteField.setAttribute('class', 'delete-btn ingridients')

    newElement.setAttribute('class', 'addable-inputs__element')

    ingridients.prepend(newElement)

    newElement.appendChild(deleteField)
    newElement.appendChild(newCount)
    newElement.appendChild(newUnit)

    newCount.appendChild(newCountInput)
    newUnit.appendChild(newUnitInput)

    countOfIngridient.value = ''
    unitOfIngridient.value = ''

    deleteField.addEventListener('click', () => {
      ingridients.removeChild(newElement)
    })
  }
})