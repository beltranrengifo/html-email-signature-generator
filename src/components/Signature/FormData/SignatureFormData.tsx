import { Box, Button, Container, Heading, SimpleGrid } from '@chakra-ui/react'
import { DeleteIcon } from '@chakra-ui/icons'

import { useSignatureContext } from 'context/signature-context'
import SignatureFormFields from './SignatureFormFields'

const SignatureFormData = () => {
  const {
    actions: { handleClearSignature },
  } = useSignatureContext()

  return (
    <Container>
      <Heading as="h2" size="3xl" noOfLines={1}>
        ✏️ Fill in your data
      </Heading>
      <SimpleGrid columns={2} spacing={10}>
        <SignatureFormFields />
      </SimpleGrid>
      <Box>
        <Button
          leftIcon={<DeleteIcon />}
          colorScheme="teal"
          variant="solid"
          onClick={() => handleClearSignature()}
        >
          Clear form
        </Button>
      </Box>
    </Container>
  )
}

export default SignatureFormData
