import {
  FormControl,
  FormHelperText,
  FormLabel,
  GridItem,
  Input,
  Tooltip,
} from '@chakra-ui/react'
import { InfoOutlineIcon } from '@chakra-ui/icons'

import { ISignatureState, useSignatureContext } from 'context/signature-context'
import { formFields } from './formFields'
import { isValidFieldValue } from 'components/Signature/Preview/SignaturePreview'
import UploadWidget from 'components/UploadWidget/UploadWidget'
import useLocalStorage from 'hooks/useLocalStorage'

const SignatureFormFields = () => {
  const {
    actions: { handleSetSignature },
    state,
  } = useSignatureContext()

  const [uploadedImageOnStorage, setUploadedImageOnStorage] = useLocalStorage(
    'uploadedImages',
    {}
  )

  const onInputChange = ({ key, value }: { key: string; value: string }) => {
    handleSetSignature({
      [key as keyof ISignatureState]: value,
    })
  }

  const handleUploadSuccess = (url: string, fieldName: string) => {
    handleSetSignature({
      [fieldName as keyof ISignatureState]: url,
    })
    setUploadedImageOnStorage({ ...uploadedImageOnStorage, [fieldName]: url })
  }

  return (
    <>
      {formFields.map(
        ({
          helperText,
          label,
          name,
          pattern,
          renderUploadButton,
          required,
          type,
          tooltip,
        }) => {
          return (
            <GridItem key={name}>
              <FormControl isRequired={required}>
                <FormLabel>
                  {label}{' '}
                  {Boolean(isValidFieldValue(tooltip)) && (
                    <Tooltip hasArrow label={tooltip} placement="top">
                      <InfoOutlineIcon mb="3px" ml="4px" />
                    </Tooltip>
                  )}
                  {(renderUploadButton ?? false) && (
                    <UploadWidget
                      onSuccess={(url: string, fieldName: string) => {
                        handleUploadSuccess(url, fieldName)
                      }}
                      fieldName={name}
                    />
                  )}
                </FormLabel>
                <Input
                  onChange={(event) =>
                    onInputChange({ key: name, value: event.target.value })
                  }
                  pattern={pattern}
                  placeholder={name}
                  type={type}
                  value={state[name as keyof ISignatureState]}
                />
                {isValidFieldValue(helperText) && (
                  <FormHelperText textAlign="left">{helperText}</FormHelperText>
                )}
              </FormControl>
            </GridItem>
          )
        }
      )}
    </>
  )
}

export default SignatureFormFields
