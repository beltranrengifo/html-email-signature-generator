import styled from '@emotion/styled'
import githubIcon from 'assets/images/github.svg'
import githubIconwhite from 'assets/images/github-w.svg'
import { Flex, useColorModeValue } from '@chakra-ui/react'

const FooterStyled = styled.footer(() => ({
  backgroundColor: 'var(--chakra-colors-chakra-body-bg)',
  color: 'var(--chakra-colors-chakra-body-text)',
  padding: '8px 12px',
  zIndex: 9,
  height: '44px',
}))

const REPO_LINK =
  'https://github.com/beltranrengifo/html-email-signature-generator/'

const Footer = () => {
  const image = useColorModeValue(githubIcon, githubIconwhite)

  return (
    <FooterStyled>
      <Flex justifyContent="flex-end">
        <figure>
          <a href={REPO_LINK} target="_blank" rel="noreferrer">
            <img src={image} alt="Github icon repository" />
          </a>
        </figure>
      </Flex>
    </FooterStyled>
  )
}

export default Footer
