import { useSignatureContext } from 'context/signature-context'
import { isValidFieldValue } from '../../../Preview/SignaturePreview'
import useBaseStyles from '../hooks/useBaseStyles'
import useImages from '../hooks/useImages'

const BigLogo = ({ image }: { image: string }) => {
  const { linkedInImage, instagramImage, twitterImage, tiktokImage } =
    useImages()

  const baseStyles = useBaseStyles()

  const { state } = useSignatureContext()

  const {
    name,
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
    disclaimer,
  } = state

  return (
    <>
      {' '}
      <meta httpEquiv="Content-Type" content="text/html charset=UTF-8" />
      <table
        border={0}
        cellPadding="0"
        style={{ tableLayout: 'auto', marginTop: '40px' }}
      >
        <tbody>
          <tr style={{ verticalAlign: 'bottom' }}>
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
                  style={{
                    textDecoration: 'none',
                    wordBreak: 'keep-all',
                  }}
                  target="_blank"
                  rel="noreferrer"
                >
                  <p
                    style={{
                      ...baseStyles,
                      fontSize: '12px',
                      margin: '8px 0 0 0',
                      wordBreak: 'keep-all',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {email}
                  </p>
                </a>
              )}
              {isValidFieldValue(phone) && (
                <a
                  // phone value is already checked above
                  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                  href={`tel:${phone}`}
                  style={{
                    textDecoration: 'none',
                    wordBreak: 'keep-all',
                  }}
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
                    {phone}
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
                  <p
                    style={{
                      ...baseStyles,
                      fontSize: '12px',
                      margin: '8px 0 0 0',
                    }}
                  >
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
                  <p
                    style={{
                      ...baseStyles,
                      fontSize: '12px',
                      margin: 0,
                    }}
                  >
                    {customUrlLabel}
                  </p>
                </a>
              )}
            </td>
          </tr>
          {isValidFieldValue(disclaimer) && (
            <>
              <tr>
                <td style={{ height: '25px' }} colSpan={3}></td>
              </tr>
              <tr>
                <td style={{ verticalAlign: 'top' }} colSpan={3} width="420">
                  <p
                    style={{
                      ...baseStyles,
                      textAlign: 'justify',
                      fontSize: '7px',
                      margin: 0,
                    }}
                  >
                    {disclaimer}
                  </p>
                </td>
              </tr>
            </>
          )}
        </tbody>
      </table>
    </>
  )
}

export default BigLogo
