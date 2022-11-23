import { useColorModeValue } from '@chakra-ui/react'
import { useState } from 'react'

const useBaseStyles = (colorLight = '#473741', colorDark = '#d2d2d2') => {
  const color = useColorModeValue(colorLight, colorDark)
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  const [currentColor, setCurrentColor] = useState(color)

  return {
    WebkitMarginBefore: 0,
    WebkitMarginAfter: 0,
    fontFamily: 'Trubuchet, Arial, sans-serif',
    fontSize: '14px',
    color: currentColor,
    letterSpacing: '1px',
    margin: '12px 0 0 0',
  }
}

export default useBaseStyles
