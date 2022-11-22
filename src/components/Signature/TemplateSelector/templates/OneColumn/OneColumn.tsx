import { useColorModeValue } from '@chakra-ui/react'
import { useSignatureContext } from 'context/signature-context'
import { isValidFieldValue } from '../../../Preview/SignaturePreview'
import useBaseStyles from '../hooks/useBaseStyles'
import useImages from '../hooks/useImages'

const OneColumn = ({ image }: { image: string }) => {
  const { linkedInImage, instagramImage, twitterImage, tiktokImage } =
    useImages()

  const { fontFamily, color } = useBaseStyles('#285E61', '#E6FFFA')
  const signatureNameColor = useColorModeValue('#234E52', '#B2F5EA')

  const { state } = useSignatureContext()

  const {
    name,
    email,
    role,
    phone,
    address,
    company,
    companyUrl,
    linkedinUrl,
    instagramUrl,
    twitterUrl,
    tiktokUrl,
    customUrl,
    customUrlLabel,
    disclaimer,
  } = state

  return (
    <>
      {' '}
      <meta httpEquiv="Content-Type" content="text/html charset=UTF-8" />
      <table
        style={{
          width: '430px',
          fontSize: '11pt',
          fontFamily,
          color,
          textAlign: 'left',
          marginTop: '40px',
        }}
        cellSpacing={0}
        cellPadding={0}
        border={0}
      >
        <tbody>
          <tr>
            <td
              colSpan={2}
              style={{ borderBottom: '1px dotted #000', paddingBottom: '10px' }}
            >
              <strong>
                <span style={{ fontSize: '18pt', color: signatureNameColor }}>
                  {name}
                </span>
              </strong>
              <span>
                <br />
              </span>
              {isValidFieldValue(role) && (
                <strong style={{ fontSize: '10pt' }}>{role}</strong>
              )}
              {isValidFieldValue(company) && (
                <strong>
                  <span>
                    <span> | </span>
                    <a
                      href={company}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: 'none' }}
                    >
                      <span style={{ fontSize: '10pt' }}> {company}</span>
                    </a>
                  </span>
                </strong>
              )}
            </td>
          </tr>

          <tr>
            <td
              colSpan={2}
              style={{ fontSize: '1px', height: '15px', lineHeight: '1px' }}
            ></td>
          </tr>

          <tr>
            {isValidFieldValue(image) && (
              <td
                style={{
                  textAlign: 'center',
                  fontSize: '10pt',
                  width: '108px',
                  verticalAlign: 'top',
                }}
                width="108"
                valign="top"
                align="center"
              >
                <a href={companyUrl} target="_blank" rel="noreferrer">
                  <img
                    alt="Logo"
                    style={{ width: '100px', height: 'auto', border: 0 }}
                    src={image}
                    width="100"
                  />
                </a>
              </td>
            )}

            <td style={{ paddingLeft: '15px' }} valign="top">
              <table cellSpacing={0} cellPadding={0} border={0}>
                <tbody>
                  <tr>
                    <td
                      style={{
                        fontSize: '9pt',
                        fontFamily: 'Arial, sans-serif',
                        verticalAlign: 'top',
                        lineHeight: '15px',
                      }}
                      valign="top"
                    >
                      {isValidFieldValue(phone) && (
                        <div>
                          <span style={{ fontSize: '12px' }}>
                            <strong>Phone:</strong> {phone}
                            <br />
                          </span>
                        </div>
                      )}
                      {isValidFieldValue(email) && (
                        <div style={{ marginTop: '4px' }}>
                          <span style={{ fontSize: '12px' }}>
                            <strong>Email:</strong> {email}
                            <br />
                          </span>
                        </div>
                      )}
                      {isValidFieldValue(address) && (
                        <div style={{ marginTop: '4px' }}>
                          <span style={{ fontSize: '12px' }}>
                            <strong>Address:</strong> {address}
                            <br />
                          </span>
                        </div>
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{ verticalAlign: 'bottom', paddingTop: '8px' }}
                      valign="bottom"
                    >
                      {isValidFieldValue(linkedinUrl) && (
                        <span>
                          <a
                            href={linkedinUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              src={linkedInImage}
                              alt="linkedin icon"
                              style={{
                                border: 0,
                                height: '20px',
                                width: '20px',
                                display: 'inline',
                              }}
                              width={20}
                            />
                          </a>
                        </span>
                      )}
                      {isValidFieldValue(instagramUrl) && (
                        <span>
                          <a
                            href={instagramUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              src={instagramImage}
                              alt="instagram icon"
                              style={{
                                border: 0,
                                height: '20px',
                                width: '20px',
                                display: 'inline',
                                marginLeft: '4px',
                              }}
                              width={20}
                            />
                          </a>
                        </span>
                      )}
                      {isValidFieldValue(twitterUrl) && (
                        <span>
                          <a
                            href={twitterUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              src={twitterImage}
                              alt="twitter icon"
                              style={{
                                border: 0,
                                height: '20px',
                                width: '20px',
                                display: 'inline',
                                marginLeft: '4px',
                              }}
                              width={20}
                            />
                          </a>
                        </span>
                      )}
                      {isValidFieldValue(tiktokUrl) && (
                        <span>
                          <a
                            href={tiktokUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              src={tiktokImage}
                              alt="tiktok icon"
                              style={{
                                border: 0,
                                height: '20px',
                                width: '20px',
                                display: 'inline',
                                marginLeft: '4px',
                              }}
                              width={20}
                            />
                          </a>
                        </span>
                      )}
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          <tr>
            <td
              colSpan={2}
              style={{ fontSize: '1px', height: '15px', lineHeight: '1px' }}
            ></td>
          </tr>

          <tr>
            <td
              colSpan={2}
              style={{ paddingTop: '15px', borderTop: '1px dotted #000' }}
            >
              {isValidFieldValue(customUrl) && (
                <a href={customUrl} target="_blank" rel="noopener noreferrer">
                  {customUrlLabel ?? null}
                  <img
                    src="banner.png"
                    alt="Banner"
                    style={{ maxWidth: '528px', height: 'auto', border: 0 }}
                  />
                </a>
              )}
            </td>
          </tr>

          {isValidFieldValue(disclaimer) && (
            <tr>
              <td
                colSpan={2}
                style={{
                  paddingTop: '15px',
                  lineHeight: '13px',
                  fontSize: '7pt',
                  color: '#959595',
                }}
              >
                {disclaimer}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  )
}

export default OneColumn
