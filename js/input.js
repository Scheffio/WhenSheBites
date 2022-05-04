const input = document.querySelector('.footer__search-field>input')
const field = document.querySelector('.footer__search-field')

input.addEventListener('focus', () => {
  field.classList.toggle('focus')
})

input.addEventListener('blur', () => {
  field.classList.remove('focus')
})

// Я думаю не стоит комментировать)