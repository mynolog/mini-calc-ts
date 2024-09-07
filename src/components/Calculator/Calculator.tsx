import type { CalculatorProps } from '../../types/CalulatorTypes.ts'
import Button from './Button.tsx'
import CalculatorBox from '../../styles/Calculator/Calculator.style.ts'

function Calculator({
  buttons,
  number,
  setNumber,
  numbers,
  setNumbers,
  previousNumber,
  setPreviousNumber,
  operator,
  setOperator,
  operators,
  setOperators,
  result,
  setResult,
  results,
  setResults,
  error,
  setError,
}: CalculatorProps) {
  return (
    <CalculatorBox>
      {buttons.map((button, index) => (
        <Button
          key={index}
          button={button}
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
      ))}
    </CalculatorBox>
  )
}

export default Calculator
