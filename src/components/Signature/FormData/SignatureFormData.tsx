import { Collapse } from 'react-collapse'

import { Box, Button, Container, Grid, Heading } from '@chakra-ui/react'
import { DeleteIcon } from '@chakra-ui/icons'

import { useSignatureContext } from 'context/signature-context'
import SignatureFormFields from './SignatureFormFields'
import styled from '@emotion/styled'
import useCollapse from 'hooks/useCollapse'

export const HeadingStyled = styled(Heading)`
  align-items: center;
  display: flex;
  justify-content: space-between;
`

const SignatureFormData = () => {
  const [collapseIsOpen, CollapseButton] = useCollapse(true)

  const {
    actions: { handleClearSignature },
    state,
  } = useSignatureContext()

  const formIsEmpty: boolean = !Object.values(state).some(
    (value: string) => value.length
  )

  return (
    <Container>
      <HeadingStyled as="h2" my={6} noOfLines={1} size="2xl" textAlign="left">
        <span>Fill in data 🤓</span>
        {CollapseButton}
      </HeadingStyled>
      <Collapse isOpened={collapseIsOpen}>
        <Grid
          templateColumns={{ sm: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
          gap={6}
        >
          <SignatureFormFields />
        </Grid>
        <Box textAlign="left">
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
      </Collapse>
    </Container>
  )
}

export default SignatureFormData
