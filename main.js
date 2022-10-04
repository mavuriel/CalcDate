import '@picocss/pico'
import './style.css'
import Bowser from 'bowser'
import dayjs from 'dayjs'

const inputContainer = document.querySelector('#input-container')

const fechaInicial = document.querySelector('#fechaInicial')
const fechaFinal = document.querySelector('#fechaFinal')

const formFechas = document.querySelector('#formFechas')
const btnCalcular = document.querySelector('#btnCalcular')

const validateDates = (dates, operationType) => {
  const errors = []

  // TODO: si la fecha inicial es mayor a la fecha final
  // TODO: si la fecha final es menor a la fecha inicial

  switch (operationType) {
    case 'daysBetween':
      if (dates.fechaInicial.value === '') errors.push('Sin fecha inicial 🧐')
      if (dates.fechaFinal.value === '') errors.push('Sin fecha final 🤨')
      break

    default:
      break
  }

  const error = errors.length > 0 && true

  console.log({ error, errors })

  return { error, errors }
}

formFechas.addEventListener('submit', e => {
  e.preventDefault()

  const elementosForm = e.target.elements
  const operationType = 'daysBetween'

  const { error, errors } = validateDates(elementosForm, operationType)

  const inputsForm = [...elementosForm].slice(0, -1)

  if (error) {
    inputsForm.forEach((input, index) => {
      input.setAttribute('aria-invalid', 'true')

      const errorMessage = input.nextElementSibling.firstElementChild
      errorMessage.innerText = errors[index]
      errorMessage.classList.add('error__message--show')
    })
  }

  btnCalcular.setAttribute('aria-busy', 'true')
  btnCalcular.toggleAttribute('disabled')

  setTimeout(() => {
    btnCalcular.setAttribute('aria-busy', 'false')
    btnCalcular.toggleAttribute('disabled')
  }, 500)
})

const browser = Bowser.getParser(window.navigator.userAgent)
const { name: browserName } = browser.getBrowser()

if (browserName === 'Firefox') {
  const htmlAlert = `
    <p>Tu navegador es <span>${browserName}</span> 😰</p>
    <p>
      Por lo cual los selectores de fecha y hora <span>no se muestran correctamente</span> 😤
    </p>
    <p>
      Por favor teclea las horas si las necesitas, en caso contrario serán tomadas como <span>00:00</span> 😎
    </p>
  `
  inputContainer.insertAdjacentHTML('beforeend', htmlAlert)
}
