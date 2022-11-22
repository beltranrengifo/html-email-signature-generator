import { useColorModeValue } from '@chakra-ui/react'

const useImages = () => {
  const linkedInImage = useColorModeValue(
    'https://res.cloudinary.com/dap1oowul/image/upload/v1668636238/linkedin_iivhm4.png',
    'https://res.cloudinary.com/dap1oowul/image/upload/v1668636238/linkedin-w_jsjf9z.png'
  )
  const instagramImage = useColorModeValue(
    'https://res.cloudinary.com/dap1oowul/image/upload/v1668636237/instagram_xyajry.png',
    'https://res.cloudinary.com/dap1oowul/image/upload/v1668636237/instagram-w_ttsind.png'
  )
  const twitterImage = useColorModeValue(
    'https://res.cloudinary.com/dap1oowul/image/upload/v1668636238/twitter_ajqfha.png',
    'https://res.cloudinary.com/dap1oowul/image/upload/v1668636238/twitter-w_xtnz6v.png'
  )
  const tiktokImage = useColorModeValue(
    'https://res.cloudinary.com/dap1oowul/image/upload/v1668636238/tik-tok_sckheo.png',
    'https://res.cloudinary.com/dap1oowul/image/upload/v1668636238/tik-tok-w_mnaehf.png'
  )

  return { linkedInImage, instagramImage, twitterImage, tiktokImage }
}

export default useImages
