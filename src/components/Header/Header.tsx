import { useColorMode } from '@chakra-ui/react'
import styled from '@emotion/styled'

const HeaderStyled = styled.header(({ bg }: { bg: string }) => ({
  backgroundColor: bg,
  padding: '8px 0',
  position: 'sticky',
  top: 0,
  zIndex: 9,
}))

const Header = ({ children }: { children: JSX.Element }) => {
  const { colorMode } = useColorMode()

  return (
    <HeaderStyled
      bg={
        colorMode === 'light'
          ? 'var(--chakra-colors-chakra-body-bg)'
          : 'var(--chakra-colors-chakra-body-bg)'
      }
    >
      {children}
    </HeaderStyled>
  )
}

export default Header
