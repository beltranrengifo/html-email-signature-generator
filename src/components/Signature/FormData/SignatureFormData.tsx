import { Box, Button, Container, Grid, Heading } from '@chakra-ui/react'
import { DeleteIcon } from '@chakra-ui/icons'

import { useSignatureContext } from 'context/signature-context'
import SignatureFormFields from './SignatureFormFields'

const SignatureFormData = () => {
  const {
    actions: { handleClearSignature },
    state,
  } = useSignatureContext()

  const formIsEmpty: boolean = !Object.values(state).some(
    (value: string) => value.length
  )

  return (
    <Container>
      <Heading as="h2" my={6} noOfLines={1} size="3xl">
        ✏️ Fill in your data
      </Heading>
      <Grid
        templateColumns={{ sm: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
        gap={6}
      >
        <SignatureFormFields />
      </Grid>
      <Box>
        <Button
          colorScheme="teal"
          disabled={formIsEmpty}
          leftIcon={<DeleteIcon />}
          mt={8}
          onClick={() => handleClearSignature()}
          variant="solid"
        >
          Clear form
        </Button>
      </Box>
    </Container>
  )
}

export default SignatureFormData
