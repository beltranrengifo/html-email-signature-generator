/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { Container, Heading, useColorModeValue } from '@chakra-ui/react'
import { useSignatureContext } from 'context/signature-context'

import linkedInIcon from 'assets/images/linkedin.png'
import linkedInIconLight from 'assets/images/linkedin-w.png'
import instagramIcon from 'assets/images/instagram.png'
import instagramIconLight from 'assets/images/instagram-w.png'
import twitterIcon from 'assets/images/twitter.png'
import twitterIconLight from 'assets/images/twitter-w.png'

const isValidFieldValue = (field: string | undefined): boolean => {
  return field !== null && field !== '' && field !== undefined
}

const SignaturePreview = () => {
  const { state } = useSignatureContext()
  const {
    name,
    imageUrl,
    email,
    role,
    phone,
    company,
    companyUrl,
    linkedinUrl,
    instagramUrl,
    twitterUrl,
    customUrl,
    customUrlLabel,
  } = state

  const color = useColorModeValue('#473741', '#d2d2d2')
  const linkedInImage = useColorModeValue(linkedInIcon, linkedInIconLight)
  const instagramImage = useColorModeValue(instagramIcon, instagramIconLight)
  const twitterImage = useColorModeValue(twitterIcon, twitterIconLight)

  const baseStyles = {
    WebkitMarginBefore: 0,
    WebkitMarginAfter: 0,
    fontFamily: 'Lucida Sans, Arial, sans-serif',
    fontSize: '14px',
    color,
    letterSpacing: '1px',
    margin: '12px 0 0 0',
  }

  return (
    <Container>
      <Heading as="h2" my={6} noOfLines={1} size="3xl">
        Preview your signature 👀
      </Heading>

      <section id="signature-render">
        <meta httpEquiv="Content-Type" content="text/html charset=UTF-8" />
        {isValidFieldValue(name) && (
          <table
            border={0}
            cellPadding="0"
            style={{ tableLayout: 'auto', marginTop: '40px' }}
          >
            <tbody>
              <tr>
                {isValidFieldValue(imageUrl) && (
                  <td style={{ width: '170px' }}>
                    <img
                      src={imageUrl}
                      width="170"
                      height="163"
                      alt="Grupo La Musa"
                      title="Grupo La Musa"
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
        )}
      </section>

      <div>
        <pre>{JSON.stringify(state, null, 2)}</pre>
      </div>
    </Container>
  )
}

export default SignaturePreview
