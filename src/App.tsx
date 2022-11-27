import { ChakraProvider, Box, VStack, Grid, theme } from '@chakra-ui/react'
import SignatureFormData from 'components/Signature/FormData/SignatureFormData'
import SignaturePreview from 'components/Signature/Preview/SignaturePreview'
import GlobalStyles from 'assets/styles/global'
import { Global } from '@emotion/react'
import { SignatureProvider } from 'context/signature-context'
import SignatureThemeSelector from 'components/Signature/ThemeSelector/SignatureThemeSelector'
import Header from 'components/Header/Header'
import Footer from 'components/Footer/Footer'
import SignatureDocumentation from 'components/Signature/ImplementDocs/SignatureDocumentation'
import { UiProvider } from 'context/ui-context'

export const App = () => (
  <ChakraProvider theme={theme}>
    <Global styles={GlobalStyles} />
    <Box textAlign="center" fontSize="xl" as="main">
      <Header>
        <SignatureThemeSelector showTitle={false} />
      </Header>
      <Grid minHeight="calc(100vh - 44px*2)">
        <VStack spacing={8} pb={10}>
          <SignatureProvider>
            <>
              <SignatureFormData />
              <UiProvider>
                <SignaturePreview />
              </UiProvider>
              <SignatureDocumentation />
            </>
          </SignatureProvider>
        </VStack>
      </Grid>
      <Footer />
    </Box>
  </ChakraProvider>
)
