import { ChakraProvider, Box, VStack, Grid, theme } from '@chakra-ui/react'
import SignatureFormData from 'components/Signature/FormData/SignatureFormData'
import SignaturePreview from 'components/Signature/Preview/SignaturePreview'
import { ColorModeSwitcher } from 'components/UI/ColorModeSwitcher'

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <VStack spacing={8}>
          <SignatureFormData />
          <SignaturePreview />
        </VStack>
      </Grid>
    </Box>
  </ChakraProvider>
)
