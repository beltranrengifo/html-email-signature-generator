import styled from '@emotion/styled'

const HeaderStyled = styled.header(() => ({
  height: '44px',
  backgroundColor: 'var(--chakra-colors-chakra-body-bg)',
  padding: '8px 12px',
  position: 'sticky',
  top: 0,
  zIndex: 9,
}))

const Header = ({ children }: { children: JSX.Element }) => {
  return <HeaderStyled>{children}</HeaderStyled>
}

export default Header
