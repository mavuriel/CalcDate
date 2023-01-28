// import dayjs from 'dayjs'
import validate from './validate'

export default function validateDates(dates, operationType) {
  let error = false
  let errors = null
  const dataMap = new Map()

  if (operationType === 'daysBetween') {
    const [{ id: inputInicio, value: inicio }, { id: inputFin, value: fin }] =
      dates

    dataMap.set(`${inputInicio}`, inicio)
    dataMap.set(`${inputFin}`, fin)

    const optionsMap = new Map()
    optionsMap.set(`${inputInicio}`, 'required')
    optionsMap.set(`${inputFin}`, 'required')

    const { isValid, errors: errorsList } = validate({
      data: dataMap,
      options: optionsMap,
    })

    // const diffDate = getDiffBetweenDates({
    //   dateInitial: data.get('fechaInicial'),
    //   dateTo: data.get('fechaFinal'),
    // })

    error = !isValid
    errors = errorsList
  }

  return { error, errors, data: dataMap }
}

// const getDiffBetweenDates = ({ dateInitial, dateTo }) =>
//   dayjs(dateTo).diff(dateInitial, 'day')
