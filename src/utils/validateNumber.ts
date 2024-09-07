function validateNumber(value: string) {
  return !isNaN(parseFloat(value))
}

export default validateNumber
