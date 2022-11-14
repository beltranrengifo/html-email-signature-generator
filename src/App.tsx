import { ChakraProvider, Box, VStack, Grid, theme } from '@chakra-ui/react'
import SignatureFormData from 'components/Signature/FormData/SignatureFormData'
import SignaturePreview from 'components/Signature/Preview/SignaturePreview'
import { ColorModeSwitcher } from 'components/UI/ColorModeSwitcher'
import GlobalStyles from 'assets/styles/global'
import { Global } from '@emotion/react'
import { SignatureProvider } from 'context/signature-context'

export const App = () => (
  <ChakraProvider theme={theme}>
    <Global styles={GlobalStyles} />
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <VStack spacing={8}>
          <SignatureProvider>
            <>
              <SignatureFormData />
              <SignaturePreview />
            </>
          </SignatureProvider>
        </VStack>
      </Grid>
    </Box>
  </ChakraProvider>
)
