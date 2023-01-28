import '@picocss/pico'
import './style.css'
import checkBrowser from './checkBrowser'
import validateDates from './validateDates'
import { clearErrorMessages, setButtonState } from './helpers'

checkBrowser()

const formFechas = document.querySelector('#formFechas')
const btnCalcular = document.querySelector('#btnCalcular')

formFechas.addEventListener('submit', e => {
  e.preventDefault()

  setButtonState({ button: btnCalcular, stateType: 'loading' })

  const elementosForm = [...e.target.elements].slice(0, -1)

  clearErrorMessages({ elementos: elementosForm })

  const operationType = 'daysBetween'

  const { error, errors, data } = validateDates(elementosForm, operationType)

  if (error) {
    for (const [key, value] of errors) {
      if (value === null) continue
      const inputWithError = elementosForm.find(element => element.id === key)
      inputWithError.setAttribute('aria-invalid', 'true')
      const errorMessage = inputWithError.nextElementSibling.firstElementChild
      for (const message of value) {
        errorMessage.insertAdjacentText('beforeend', message)
      }
      errorMessage.classList.add('error__message--show')
    }

    setTimeout(() => {
      setButtonState({ button: btnCalcular, stateType: 'ready' })
    }, 500)

    return
  }

  console.log(data)

  setTimeout(() => {
    setButtonState({ button: btnCalcular, stateType: 'ready' })
  }, 500)
})
