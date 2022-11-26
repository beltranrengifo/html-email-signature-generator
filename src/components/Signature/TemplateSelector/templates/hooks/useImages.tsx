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
  const pinterestImage = useColorModeValue(
    'https://res.cloudinary.com/dap1oowul/image/upload/v1669494888/pinterest_ueljcm.png',
    'https://res.cloudinary.com/dap1oowul/image/upload/v1669494888/pinterest-w_cle6ql.png'
  )
  const youtubeImage = useColorModeValue(
    'https://res.cloudinary.com/dap1oowul/image/upload/v1669494888/youtube_tkfpvf.png',
    'https://res.cloudinary.com/dap1oowul/image/upload/v1669494888/youtube-w_p9gpad.png'
  )
  const facebookImage = useColorModeValue(
    'https://res.cloudinary.com/dap1oowul/image/upload/v1669494888/facebook_gvuykk.png',
    'https://res.cloudinary.com/dap1oowul/image/upload/v1669494888/facebook-w_kc14z6.png'
  )

  return {
    linkedInImage,
    instagramImage,
    twitterImage,
    tiktokImage,
    pinterestImage,
    youtubeImage,
    facebookImage,
  }
}

export default useImages
