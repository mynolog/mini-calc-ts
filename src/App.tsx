import { useState, useEffect } from 'react'
import buttonsModel from './models/buttonsModel.ts'
import Calculator from './components/Calculator/Calculator.tsx'
import Display from './components/Display/Display.tsx'
import GlobalStyle from './styles/Global.style.ts'

function App() {
  const [buttons] = useState(buttonsModel)
  const [number, setNumber] = useState('')
  const [numbers, setNumbers] = useState<string[]>([])
  const [previousNumber, setPreviousNumber] = useState('')
  const [operator, setOperator] = useState('')
  const [operators, setOperators] = useState<string[]>([])
  const [result, setResult] = useState('')
  const [results, setResults] = useState<string[]>([])
  const [error, setError] = useState<string>('')

  useEffect(() => {
    if (operator === 'AC') {
      handleClickAC()
    }

    const calculate = (selectedOperator: string) => {
      if (numbers.length < 2 || !operator) return
      const [first, second] = numbers
      let currentResult = 0
      switch (selectedOperator) {
        case '+':
          currentResult = parseFloat(first) + parseFloat(second)
          break
        case '-':
          currentResult = parseFloat(first) - parseFloat(second)
          break
        case '*':
          currentResult = parseFloat(first) * parseFloat(second)
          break
        case '/':
          if (second === '0') {
            setError('0으로 나눌 수 없음')
          } else {
            currentResult = parseFloat(first) / parseFloat(second)
          }
          break
        default:
          return
      }
      setResult(currentResult.toString())
      setResults([...currentResult.toString()])
      setNumber('')
      setNumbers([])
      setOperator('')
      setOperators([])
    }

    if (numbers.length > 0) {
      if (operators[operators.length - 1] === '=') {
        calculate(operators[0])
      }
    }
  }, [numbers, operator, operators, result, results])

  function handleClickAC() {
    setNumber('')
    setNumbers([])
    setPreviousNumber('')
    setOperator('')
    setOperators([])
    setResult('')
    setResults([])
    setError('')
  }

  return (
    <>
      <GlobalStyle />
      <Display
        number={number}
        previousNumber={previousNumber}
        result={result}
        results={results}
        error={error}
      />
      <Calculator
        buttons={buttons}
        number={number}
        setNumber={setNumber}
        numbers={numbers}
        setNumbers={setNumbers}
        previousNumber={previousNumber}
        setPreviousNumber={setPreviousNumber}
        operator={operator}
        setOperator={setOperator}
        operators={operators}
        setOperators={setOperators}
        result={result}
        setResult={setResult}
        results={results}
        setResults={setResults}
        error={error}
        setError={setError}
      />
    </>
  )
}

export default App
