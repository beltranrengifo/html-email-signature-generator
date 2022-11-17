import { Container } from '@chakra-ui/react'
import { HeadingStyled } from 'components/Signature/FormData/SignatureFormData'
import { Collapse } from 'react-collapse'
import useCollapse from 'hooks/useCollapse'

const SignatureImplementDocs = () => {
  const [collapseIsOpen, CollapseButton] = useCollapse(false)

  return (
    <Container>
      <HeadingStyled as="h2" my={6} noOfLines={1} size="2xl" textAlign="left">
        <span>How to use ✍️</span>
        {CollapseButton}
      </HeadingStyled>
      <Collapse isOpened={collapseIsOpen}>
        <p>hola</p>
      </Collapse>
    </Container>
  )
}

export default SignatureImplementDocs
