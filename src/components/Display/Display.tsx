import type { DisplayProps } from '../../types/DisplayTypes.ts'
import { DisplayBox, DisplayText } from '../../styles/Display/Display.style.ts'

function Display({ number, previousNumber, result, error }: DisplayProps) {
  return (
    <DisplayBox>
      <DisplayText>
        {error
          ? error
          : previousNumber
          ? previousNumber || result
          : number || result}
      </DisplayText>
    </DisplayBox>
  )
}

export default Display
