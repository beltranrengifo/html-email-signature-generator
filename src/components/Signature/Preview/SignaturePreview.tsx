import { Heading } from '@chakra-ui/react'
import { useSignatureContext } from 'context/signature-context'

const SignaturePreview = () => {
  const { state } = useSignatureContext()
  return (
    <section>
      <Heading as="h2" size="3xl" noOfLines={1}>
        Preview your signature 👀
      </Heading>
      <div>
        <pre>{JSON.stringify(state)}</pre>
      </div>
    </section>
  )
}

export default SignaturePreview
