import { Heading } from '@chakra-ui/react'
import { useSignatureContext } from 'context/signature-context'

const SignatureFormData = () => {
  const {
    actions: { handleSetSignature, handleClearSignature },
  } = useSignatureContext()
  return (
    <section>
      <Heading as="h2" size="3xl" noOfLines={1}>
        ✏️ Fill in your data
      </Heading>
      <div>
        <button onClick={() => handleSetSignature({ name: 'Pepe Luis' })}>
          set name
        </button>
        <button onClick={() => handleClearSignature()}>clear all</button>
      </div>
    </section>
  )
}

export default SignatureFormData
