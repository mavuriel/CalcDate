import '@picocss/pico'
import './style.css'
import Bowser from 'bowser'
import dayjs from 'dayjs'

const inputContainer = document.querySelector('#input-container')

const fechaInicial = document.querySelector('#fechaInicial')
const fechaFinal = document.querySelector('#fechaFinal')

const formFechas = document.querySelector('#formFechas')
const btnCalcular = document.querySelector('#btnCalcular')

formFechas.addEventListener('submit', e => {
  e.preventDefault()
  console.log(btnCalcular)
  btnCalcular.setAttribute('aria-busy', 'true')
  btnCalcular.toggleAttribute('disabled')
  console.log(fechaInicial.value, fechaFinal.value)

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
