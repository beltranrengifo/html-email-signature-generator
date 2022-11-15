import { Container, Heading } from '@chakra-ui/react'
import { useSignatureContext } from 'context/signature-context'

const SignaturePreview = () => {
  const { state } = useSignatureContext()
  return (
    <Container>
      <Heading as="h2" size="3xl" noOfLines={1}>
        Preview your signature 👀
      </Heading>
      <div>
        <pre>{JSON.stringify(state, null, 2)}</pre>
      </div>
    </Container>
  )
}

export default SignaturePreview
