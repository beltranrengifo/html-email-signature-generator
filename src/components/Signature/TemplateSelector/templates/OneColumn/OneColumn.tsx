import { useSignatureContext } from 'context/signature-context'
import { useUiContext } from 'context/ui-context'
import { isValidFieldValue } from '../../../Preview/SignaturePreview'
import useImages from '../hooks/useImages'

const OneColumn = ({ image }: { image: string }) => {
  const { linkedInImage, instagramImage, twitterImage, tiktokImage } =
    useImages()

  const { state: uiState } = useUiContext()
  const { baseCurrentColor, nameCurrentColor, disclaimerCurrentColor, font } =
    uiState

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
    bannerImageUrl,
    bannerImageLink,
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
          color: baseCurrentColor,
          textAlign: 'left',
          marginTop: '40px',
          fontFamily: font,
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
                <span style={{ fontSize: '18pt', color: nameCurrentColor }}>
                  {name}
                </span>
              </strong>
              <span>
                <br />
              </span>
              {isValidFieldValue(role) && (
                <strong style={{ fontSize: '10pt', color: nameCurrentColor }}>
                  {role}
                </strong>
              )}
              {isValidFieldValue(company) && (
                <strong>
                  <span>
                    <span style={{ color: nameCurrentColor }}> | </span>
                    <a
                      href={company}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: 'none' }}
                    >
                      <span
                        style={{ fontSize: '10pt', color: nameCurrentColor }}
                      >
                        {' '}
                        {company}
                      </span>
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
                      {isValidFieldValue(customUrl) && (
                        <div style={{ marginTop: '4px' }}>
                          <a
                            href={customUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ fontSize: '12px' }}
                          >
                            {customUrlLabel ?? null}
                          </a>
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

          {isValidFieldValue(bannerImageUrl) && (
            <>
              <tr>
                <td
                  style={{
                    paddingTop: '15px',
                    borderTop: '1px dotted #000',
                    height: '10px',
                  }}
                  colSpan={3}
                ></td>
              </tr>
              <tr>
                <td colSpan={3} style={{ marginTop: '24px' }}>
                  <a
                    href={
                      isValidFieldValue(bannerImageLink) ? bannerImageLink : '#'
                    }
                    style={{ textDecoration: 'none' }}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={bannerImageUrl} alt="banner image" />
                  </a>
                </td>
              </tr>
            </>
          )}

          {isValidFieldValue(disclaimer) && (
            <tr>
              <td
                colSpan={2}
                style={{
                  paddingTop: '15px',
                  lineHeight: '13px',
                  fontSize: '7pt',
                  color: disclaimerCurrentColor,
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
