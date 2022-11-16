/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import {
  Alert,
  AlertIcon,
  Container,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react'
import { useSignatureContext } from 'context/signature-context'

import useLocalStorage from 'hooks/useLocalStorage'
import { useEffect } from 'react'

export const isValidFieldValue = (field: string | undefined): boolean => {
  return field !== null && field !== '' && field !== undefined
}

const SignaturePreview = () => {
  const {
    state,
    actions: { handleSetSignature },
  } = useSignatureContext()
  const {
    name,
    imageUrl,
    darkImageUrl,
    email,
    role,
    phone,
    company,
    companyUrl,
    linkedinUrl,
    instagramUrl,
    twitterUrl,
    tiktokUrl,
    customUrl,
    customUrlLabel,
  } = state

  const color = useColorModeValue('#473741', '#d2d2d2')

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

  const [storedImages] = useLocalStorage('uploadedImages', {
    imageUrl: '',
    darkImageUrl: '',
  })

  Object.keys(storedImages).forEach((key) => {
    if (storedImages[key] === '') {
      delete storedImages[key]
    }
  })

  const image = useColorModeValue(
    storedImages?.imageUrl || imageUrl,
    isValidFieldValue(storedImages?.darkImageUrl)
      ? storedImages.darkImageUrl
      : darkImageUrl ?? imageUrl
  )

  const baseStyles = {
    WebkitMarginBefore: 0,
    WebkitMarginAfter: 0,
    fontFamily: 'Lucida Sans, Arial, sans-serif',
    fontSize: '14px',
    color,
    letterSpacing: '1px',
    margin: '12px 0 0 0',
  }

  useEffect(() => {
    if (Object.keys(storedImages).length) {
      handleSetSignature({
        ...storedImages,
      })
    }
  }, [storedImages])

  return (
    <Container>
      <Heading as="h2" my={6} noOfLines={1} size="2xl" textAlign="left">
        Preview your signature
      </Heading>

      <section id="signature-render">
        <meta httpEquiv="Content-Type" content="text/html charset=UTF-8" />
        {isValidFieldValue(name) ? (
          <table
            border={0}
            cellPadding="0"
            style={{ tableLayout: 'auto', marginTop: '40px' }}
          >
            <tbody>
              <tr>
                {isValidFieldValue(image) && (
                  <td style={{ width: '170px' }}>
                    <img
                      src={image}
                      width="170"
                      height="163"
                      alt="Email Signature Image"
                      title="Email Signature Image"
                    />
                  </td>
                )}
                <td style={{ width: '10px' }}></td>

                <td style={{ verticalAlign: 'top', textAlign: 'left' }}>
                  <p style={baseStyles}>
                    <strong>{name}</strong>
                  </p>
                  {isValidFieldValue(role) && (
                    <p style={{ ...baseStyles, margin: 0 }}>{role}</p>
                  )}
                  {isValidFieldValue(email) && (
                    <a
                      // email value is already checked above
                      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                      href={`mailto:${email}`}
                      style={{ textDecoration: 'none', wordBreak: 'keep-all' }}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <p
                        style={{
                          ...baseStyles,
                          fontSize: '12px',
                          margin: 0,
                          wordBreak: 'keep-all',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {email}
                      </p>
                    </a>
                  )}
                  {isValidFieldValue(company) && (
                    <a
                      href={isValidFieldValue(companyUrl) ? companyUrl : '#'}
                      style={{ textDecoration: 'none' }}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <p style={{ ...baseStyles, fontSize: '12px', margin: 0 }}>
                        {company}
                      </p>
                    </a>
                  )}
                  {isValidFieldValue(linkedinUrl) && (
                    <a
                      href={linkedinUrl}
                      style={{ textDecoration: 'none' }}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src={linkedInImage}
                        alt="Linkedin"
                        width="25"
                        height="25"
                        style={{ display: 'inline', margin: '8px 0 0 0' }}
                      />
                    </a>
                  )}
                  {isValidFieldValue(instagramUrl) && (
                    <a
                      href={instagramUrl}
                      style={{ textDecoration: 'none' }}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src={instagramImage}
                        alt="Instagram"
                        width="25"
                        height="25"
                        style={{ display: 'inline', margin: '8px 0 0 5px' }}
                      />
                    </a>
                  )}
                  {isValidFieldValue(twitterUrl) && (
                    <a
                      href={twitterUrl}
                      style={{ textDecoration: 'none' }}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src={twitterImage}
                        alt="Twitter"
                        width="25"
                        height="25"
                        style={{ display: 'inline', margin: '8px 0 0 5px' }}
                      />
                    </a>
                  )}
                  {isValidFieldValue(tiktokUrl) && (
                    <a
                      href={tiktokUrl}
                      style={{ textDecoration: 'none' }}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src={tiktokImage}
                        alt="Twitter"
                        width="25"
                        height="25"
                        style={{ display: 'inline', margin: '8px 0 0 5px' }}
                      />
                    </a>
                  )}
                  {isValidFieldValue(customUrl) && (
                    <a
                      href={isValidFieldValue(customUrl) ? customUrl : '#'}
                      style={{ textDecoration: 'none' }}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <p style={{ ...baseStyles, fontSize: '12px', margin: 0 }}>
                        {customUrlLabel}
                      </p>
                    </a>
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        ) : (
          <Alert status="info">
            <AlertIcon />
            Please, fill in the mandatory fields
          </Alert>
        )}
      </section>
    </Container>
  )
}

export default SignaturePreview
