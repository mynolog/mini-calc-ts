import type { MouseEvent } from 'react'
import type { ButtonProps } from '../../types/CalulatorTypes.ts'
import validateNumber from '../../utils/validateNumber.ts'
import ButtonStyle from '../../styles/Button/Button.style.ts'

function Button({
  button,
  number,
  setNumber,
  numbers,
  setNumbers,
  previousNumber,
  setPreviousNumber,
  setOperator,
  operators,
  setOperators,
  error,
  setError,
}: ButtonProps) {
  function handleButtonClick(e: MouseEvent<HTMLButtonElement>) {
    const { value } = e.currentTarget
    switch (value) {
      case '+':
      case '-':
      case '*':
      case '/':
        if (number) {
          setPreviousNumber(number)
          setNumbers([...numbers, number])
          setOperator(value)
          setOperators([...operators, value])
          setNumber('')
        }
        break
      case '=':
        if (number) {
          setNumbers([...numbers, number])
          setNumber('')
          setOperator(value)
          setOperators([...operators, value])
          setPreviousNumber('')
        }
        break
      case 'AC':
        setOperator(value)
        setOperators([...operators, value])
        break
      default:
        if (error) {
          setError('')
        }
        if (previousNumber) {
          setPreviousNumber('')
        }
        if (validateNumber(value)) {
          if (number === '0') setNumber(value)
          else setNumber(number + value)
        }
    }
  }

  return (
    <ButtonStyle value={button} onClick={handleButtonClick}>
      {button}
    </ButtonStyle>
  )
}

export default Button
