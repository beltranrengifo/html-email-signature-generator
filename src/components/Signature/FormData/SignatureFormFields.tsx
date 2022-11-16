import {
  FormControl,
  FormLabel,
  GridItem,
  Input,
  Tooltip,
} from '@chakra-ui/react'
import { InfoOutlineIcon } from '@chakra-ui/icons'

import { ISignatureState, useSignatureContext } from 'context/signature-context'
import { formFields } from './formFields'
import { isValidFieldValue } from 'components/Signature/Preview/SignaturePreview'

const SignatureFormFields = () => {
  const {
    actions: { handleSetSignature },
    state,
  } = useSignatureContext()

  const onInputChange = ({ key, value }: { key: string; value: string }) => {
    handleSetSignature({
      [key as keyof ISignatureState]: value,
    })
  }

  return (
    <>
      {formFields.map(({ label, name, pattern, required, type, tooltip }) => {
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
            </FormControl>
          </GridItem>
        )
      })}
    </>
  )
}

export default SignatureFormFields
