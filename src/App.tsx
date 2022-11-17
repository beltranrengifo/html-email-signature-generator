import { ChakraProvider, Box, VStack, Grid, theme } from '@chakra-ui/react'
import SignatureFormData from 'components/Signature/FormData/SignatureFormData'
import SignaturePreview from 'components/Signature/Preview/SignaturePreview'
import GlobalStyles from 'assets/styles/global'
import { Global } from '@emotion/react'
import { SignatureProvider } from 'context/signature-context'
import SignatureThemeSelector from 'components/Signature/ThemeSelector/SignatureThemeSelector'

export const App = () => (
  <ChakraProvider theme={theme}>
    <Global styles={GlobalStyles} />
    <Box textAlign="center" fontSize="xl">
      <Grid p={3}>
        <SignatureThemeSelector showTitle={false} />
        <VStack spacing={8} pb={10}>
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
