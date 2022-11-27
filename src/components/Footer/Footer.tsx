import styled from '@emotion/styled'

const FooterStyled = styled.footer(() => ({
  backgroundColor: 'var(--chakra-colors-chakra-body-bg)',
  color: 'var(--chakra-colors-chakra-body-text)',
  padding: '8px 0',
  zIndex: 9,
  height: '44px',
}))

const Footer = () => {
  return <FooterStyled>popo</FooterStyled>
}

export default Footer
