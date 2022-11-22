import { useColorModeValue } from '@chakra-ui/react'

const useBaseStyles = (colorLight = '#473741', colorDark = '#d2d2d2') => {
  const color = useColorModeValue(colorLight, colorDark)

  return {
    WebkitMarginBefore: 0,
    WebkitMarginAfter: 0,
    fontFamily: 'Trubuchet, Arial, sans-serif',
    fontSize: '14px',
    color,
    letterSpacing: '1px',
    margin: '12px 0 0 0',
  }
}

export default useBaseStyles
