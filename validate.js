import { isDefined, isNull } from './helpers'

export default function validate({ data, options }) {
  const errors = new Map()

  for (const [key, value] of options) {
    if (value === 'required') {
      const msg = !isDefined({ data, key }) ? `${key} requerida` : null
      const lastError = errors.get(key) ?? []
      const mergeError = !isNull(msg) ? [...lastError, msg] : null
      errors.set(key, mergeError)
    }
  }

  let isValid = true

  for (const [key, value] of errors) {
    if (isNull(value)) continue

    isValid = false
    break
  }

  return { isValid, errors }
}
