const isDefined = ({ data, key }) => data.has(key) && data.get(key) !== ''

const isNull = value => value === null

const setButtonState = ({ button, stateType }) => {
  const state = {
    ready: 'false',
    loading: 'true',
  }[stateType]

  button.setAttribute('aria-busy', state)
  button.toggleAttribute('disabled')
}

const clearErrorMessages = ({ elementos }) => {
  elementos.forEach(input => {
    input.setAttribute('aria-invalid', 'false')
    input.nextElementSibling.firstElementChild.innerText = ''
  })
}

export { isDefined, isNull, setButtonState, clearErrorMessages }
