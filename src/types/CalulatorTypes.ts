import { Dispatch, SetStateAction } from 'react'

export type CalculatorProps = {
  buttons: string[]
  number: string
  setNumber: Dispatch<SetStateAction<string>>
  numbers: string[]
  setNumbers: Dispatch<SetStateAction<string[]>>
  previousNumber: string
  setPreviousNumber: Dispatch<SetStateAction<string>>
  operator: string
  setOperator: Dispatch<SetStateAction<string>>
  operators: string[]
  setOperators: Dispatch<SetStateAction<string[]>>
  result: string
  setResult: Dispatch<SetStateAction<string>>
  results: string[]
  setResults: Dispatch<SetStateAction<string[]>>
  error: string
  setError: Dispatch<SetStateAction<string>>
}

export type ButtonProps = {
  button: string
} & Omit<CalculatorProps, 'buttons'>
