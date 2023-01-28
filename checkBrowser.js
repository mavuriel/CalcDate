import Bowser from 'bowser'

export default function checkBrowser() {
  const browser = Bowser.getParser(window.navigator.userAgent)
  const { name: browserName } = browser.getBrowser()

  if (browserName === 'Firefox') {
    const htmlAlert = `
    <p class="alert__text">Tu navegador es <span>${browserName}</span> 😰</p>
    <p class="alert__text">
      Por lo cual los selectores de fecha y hora <span>no se muestran correctamente</span> 😤
    </p>
    <p class="alert__text">
      <span>Por favor ingresa las horas</span> 😎
    </p>
  `

    const alert = document.querySelector('#alert')
    alert.classList.add('alert--show')
    alert.insertAdjacentHTML('beforeend', htmlAlert)
  }
}
