import type { DisplayProps } from '../../types/DisplayTypes.ts'
import {
  DisplayStyle,
  DisplayWrapper,
} from '../../styles/Display/Display.style.ts'

function Display({ number, previousNumber, result, error }: DisplayProps) {
  return (
    <DisplayWrapper>
      <DisplayStyle>
        {error
          ? error
          : previousNumber
          ? previousNumber || result
          : number || result}
      </DisplayStyle>
    </DisplayWrapper>
  )
}

export default Display
