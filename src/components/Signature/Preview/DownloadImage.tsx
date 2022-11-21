/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Spinner,
  Stack,
  Skeleton,
} from '@chakra-ui/react'
import { DownloadIcon } from '@chakra-ui/icons'

import { useState } from 'react'
import html2canvas from 'html2canvas'

import { isValidFieldValue } from './SignaturePreview'
import { useSignatureContext } from 'context/signature-context'

const DownloadImage = () => {
  const [isGeneratingImage, setIsGeneratingImage] = useState(false)

  const { state } = useSignatureContext()
  const { name } = state

  const { isOpen, onOpen, onClose } = useDisclosure()

  const downloadImageButtonText = isGeneratingImage
    ? 'Generating image...'
    : 'Download signature image'

  const downloadImageButtonIcon = isGeneratingImage ? (
    <Spinner />
  ) : (
    <DownloadIcon />
  )

  const handleImageGeneration = async (): Promise<void> => {
    try {
      setIsGeneratingImage(true)
      onOpen()
      const signature = document.getElementById('signature-render')
      if (!signature) return

      const canvas = await html2canvas(signature, {
        imageTimeout: 200000,
        useCORS: true,
        proxy:
          process.env.NODE_ENV === 'production'
            ? process.env.REACT_APP_API_PRODUCTION_DOMAIN
            : process.env.REACT_APP_API_DEV_DOMAIN,
      })

      canvas.setAttribute('id', 'signature-canvas')

      const elementToAppendChild = document.getElementById('signature-image')
      if (!elementToAppendChild) return
      elementToAppendChild.appendChild(canvas)

      setIsGeneratingImage(false)
    } catch (error) {
      if (process.env.NODE_ENV !== 'production') {
        console.error(error)
      }
    }
  }

  const handleImageDownload = () => {
    const canvas = document.getElementById('signature-canvas')
    if (!canvas) return

    const link = document.createElement('a')
    link.download = 'signature.png'

    link.href = (canvas as HTMLCanvasElement).toDataURL()
    link.click()
  }

  return (
    <>
      <Button
        colorScheme="gray"
        disabled={!isValidFieldValue(name)}
        leftIcon={<DownloadIcon />}
        mr={2}
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onClick={handleImageGeneration}
        variant="solid"
      >
        Download as image
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size="4xl">
        <ModalOverlay />
        <ModalContent p={4}>
          <ModalHeader>Download Signature As Image</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {isGeneratingImage && (
              <Stack maxW="100%" minH={200} w={700} justifyContent="center">
                <Skeleton height="20px" w="100%" />
                <Skeleton height="20px" w="100%" />
                <Skeleton height="20px" w="100%" />
              </Stack>
            )}

            <div id="signature-image" />
          </ModalBody>

          <ModalFooter mt={4}>
            <Button
              colorScheme="teal"
              mr={3}
              onClick={handleImageDownload}
              leftIcon={downloadImageButtonIcon}
            >
              {downloadImageButtonText}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default DownloadImage
