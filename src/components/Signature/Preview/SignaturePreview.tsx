import { Collapse } from 'react-collapse'

import {
  Alert,
  AlertIcon,
  Container,
  useColorModeValue,
  Card,
  CardBody,
  Button,
  CardHeader,
  useToast,
  Heading,
  Box,
} from '@chakra-ui/react'

import templates, {
  Templates,
} from 'components/Signature/TemplateSelector/templates'

import { CopyIcon, CheckIcon } from '@chakra-ui/icons'
import Clipboard from 'clipboard'

import { useSignatureContext } from 'context/signature-context'

import useLocalStorage from 'hooks/useLocalStorage'
import { useEffect, useState } from 'react'
import { HeadingStyled } from 'components/Signature/FormData/SignatureFormData'
import useCollapse from 'hooks/useCollapse'
import DownloadImage from './DownloadImage'
import SignatureTemplateSelector from 'components/Signature/TemplateSelector/SignatureTemplateSelector'
import ColorPicker from 'components/ColorPicker/ColorPicker'
import { useUiContext } from 'context/ui-context'
import FontPicker from 'components/FontPicker/FontPicker'

export const isValidFieldValue = (field: string | undefined): boolean => {
  return field !== null && field !== '' && field !== undefined
}

const cleanUpEmptyValues = (obj: any): void => {
  Object.keys(obj).forEach((key) => {
    if (obj[key] === '') {
      delete obj[key]
    }
  })
}

const SignaturePreview = () => {
  const [collapseIsOpen, CollapseButton] = useCollapse(false)

  let clipboard: Clipboard
  const [isCopying, setIsCopying] = useState(false)
  const toast = useToast()

  const {
    state: signatureState,
    actions: { handleSetSignature },
  } = useSignatureContext()
  const { name, imageUrl, darkImageUrl } = signatureState

  const { state: uiState } = useUiContext()
  const { template } = uiState

  const [storedImages] = useLocalStorage('uploadedImages', {
    imageUrl: '',
    darkImageUrl: '',
  })
  cleanUpEmptyValues(storedImages)

  const image: string | any = useColorModeValue(
    storedImages?.imageUrl || imageUrl,
    isValidFieldValue(storedImages?.darkImageUrl)
      ? storedImages.darkImageUrl
      : darkImageUrl ?? imageUrl
  )

  const copyButtonText = isCopying ? 'Copied!' : 'Copy'
  const copyButtonIcon = isCopying ? <CheckIcon /> : <CopyIcon />

  const Template = templates[template as keyof Templates]

  useEffect(() => {
    if (Object.keys(storedImages).length) {
      handleSetSignature({
        ...storedImages,
      })
    }
  }, [storedImages])

  useEffect(() => {
    clipboard = new Clipboard('#copy-button')

    clipboard.on('success', (clipboardEvent) => {
      setIsCopying(true)

      setTimeout(() => {
        setIsCopying(false)
        clipboardEvent.clearSelection()
        toast({
          title: 'Signature in clipboard!',
          description:
            "Doubts about what's next? Check the `How to use` section 📑",
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
      }, 1500)
    })

    clipboard.on('error', (clipboardEvent) => {
      console.error('Action:', clipboardEvent.action)
      console.error('Trigger:', clipboardEvent.trigger)
    })

    return () => {
      clipboard.destroy()
    }
  }, [])

  return (
    <Container>
      <HeadingStyled as="h2" my={6} noOfLines={1} size="2xl" textAlign="left">
        <span>Get your signature ✍️</span>
        {CollapseButton}
      </HeadingStyled>
      <Collapse isOpened={collapseIsOpen}>
        <SignatureTemplateSelector />
        <Heading
          as="h3"
          my={6}
          noOfLines={1}
          textAlign="left"
          size="lg"
          mt={10}
        >
          Preview result 🧐
        </Heading>
        <Card size="lg">
          <CardHeader p={0} justifyContent="space-between" display="flex">
            <ColorPicker label="Choose colors" />
            <FontPicker label="Choose font" />
          </CardHeader>
          <CardBody
            pb={0}
            pl={0}
            pr={0}
            boxShadow="lg"
            borderRadius="var(--chakra-radii-md)"
          >
            {isValidFieldValue(name) ? (
              Template ? (
                <>
                  <Box p="var(--card-padding)" id="signature-render">
                    <Template image={image} />
                  </Box>
                  <Box mt={12} display="flex" justifyContent="space-between">
                    <DownloadImage />
                    <Button
                      colorScheme="gray"
                      data-clipboard-target="#signature-render"
                      disabled={!isValidFieldValue(name)}
                      id="copy-button"
                      leftIcon={copyButtonIcon}
                      variant="solid"
                    >
                      {copyButtonText}
                    </Button>
                  </Box>
                </>
              ) : (
                <Alert status="warning">
                  <AlertIcon />
                  We apologize, there&apos;s no template available for this
                  selection. Please try another option 😢
                </Alert>
              )
            ) : (
              <Alert status="info">
                <AlertIcon />
                Please, fill in the mandatory fields
              </Alert>
            )}
          </CardBody>
        </Card>
      </Collapse>
    </Container>
  )
}

export default SignaturePreview
