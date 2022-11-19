import {
  FormControl,
  FormHelperText,
  FormLabel,
  GridItem,
  Input,
  Textarea,
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

  const disclaimer = formFields.find((field) => field.name === 'disclaimer')

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
          skipRender,
          type,
          tooltip,
        }) => {
          if (skipRender) return null

          return (
            <GridItem
              key={name}
              mb={{
                sm: 4,
                md: 0,
              }}
            >
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
                  placeholder={label}
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
      <GridItem colSpan={2}>
        <FormControl>
          <FormLabel>{disclaimer?.label}</FormLabel>
          <Textarea
            placeholder={disclaimer?.label}
            value={state.disclaimer}
            onChange={(event) =>
              onInputChange({ key: 'disclaimer', value: event.target.value })
            }
          />

          <FormHelperText textAlign="left">
            {disclaimer?.helperText}
          </FormHelperText>
        </FormControl>
      </GridItem>
    </>
  )
}

export default SignatureFormFields
