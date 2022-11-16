import { Button, useToast } from '@chakra-ui/react'
import useLocalStorage from 'hooks/useLocalStorage'
import { useEffect, useRef } from 'react'

const UploadWidget = ({ onSuccess }: { onSuccess: (url: string) => void }) => {
  const cloudinaryRef = useRef()
  const widgetRef = useRef({})

  const toast = useToast()

  const [, setUploadedImage] = useLocalStorage('uploadedImage', '')
  const [, setUploadedDarkImage] = useLocalStorage('uploadedDarkImage', '')

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary

    widgetRef.current = (cloudinaryRef.current as any).createUploadWidget(
      {
        cloudName: 'dap1oowul',
        uploadPreset: 'ixo6nhfh',
        sources: ['local'],
        multiple: false,
        maxImageFileSize: 400000,
        maxImageWidth: 800,
      },
      (error: unknown, result: any) => {
        if (error !== null && Boolean(error)) {
          console.error(result)
        } else {
          if (result.event === 'success') {
            onSuccess(result.info.url)

            setUploadedImage(result.info.url)
            setUploadedDarkImage(result.info.url)

            toast({
              title: 'Upload completed.',
              description: 'YAY nice pic!',
              status: 'success',
              duration: 9000,
              isClosable: true,
            })
          }
        }
      }
    )
  }, [])

  return (
    <Button
      onClick={() => (widgetRef?.current as any).open()}
      colorScheme="yellow"
      ml="4px"
      size="xs"
      variant="ghost"
    >
      Upload image
    </Button>
  )
}

declare global {
  interface Window {
    cloudinary: any
  }
}

export default UploadWidget
