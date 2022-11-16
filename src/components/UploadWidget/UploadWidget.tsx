import { Button, useToast } from '@chakra-ui/react'
import { useEffect, useRef } from 'react'

const UploadWidget = ({
  onSuccess,
  fieldName,
}: {
  onSuccess: (url: string, fieldName: string) => void
  fieldName: string
}) => {
  const cloudinaryRef = useRef()
  const widgetRef = useRef({})

  const toast = useToast()

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary

    widgetRef.current = (cloudinaryRef.current as any).createUploadWidget(
      {
        cropping: true,
        cloudName: 'dap1oowul',
        uploadPreset: 'ixo6nhfh',
        sources: ['local', 'camera', 'image_search', 'instagram', 'unsplash'],
        multiple: false,
        maxImageFileSize: 800000,
        maxImageWidth: 800,
      },
      (error: unknown, result: any) => {
        if (error !== null && Boolean(error)) {
          console.error(result)
        } else {
          if (result.event === 'success') {
            onSuccess(result.info.url, fieldName)

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
