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

export const isValidFieldValue = (field: string | undefined): boolean => {
  return field !== null && field !== '' && field !== undefined
}

const SignaturePreview = () => {
  let clipboard: Clipboard

  const [collapseIsOpen, CollapseButton] = useCollapse(false)

  const [isCopying, setIsCopying] = useState(false)
  const toast = useToast()

  const {
    state,
    actions: { handleSetSignature },
  } = useSignatureContext()

  const { name, imageUrl, darkImageUrl, template } = state

  const [storedImages] = useLocalStorage('uploadedImages', {
    imageUrl: '',
    darkImageUrl: '',
  })

  Object.keys(storedImages).forEach((key) => {
    if (storedImages[key] === '') {
      delete storedImages[key]
    }
  })

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
        <span>Preview signature 🧐</span>
        {CollapseButton}
      </HeadingStyled>
      <Collapse isOpened={collapseIsOpen}>
        <Card size="lg" pb="40px">
          <CardHeader p={0} justifyContent="end" display="flex">
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
          </CardHeader>
          <CardBody id="signature-render">
            {isValidFieldValue(name) ? (
              <Template image={image} />
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
