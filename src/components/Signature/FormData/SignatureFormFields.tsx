import { FormControl, FormLabel, GridItem, Input } from '@chakra-ui/react'

import { ISignatureState, useSignatureContext } from 'context/signature-context'

interface IField {
  label: string
  name: string
  pattern?: string
  required?: boolean
  type: string
}

const formFields: IField[] = [
  {
    label: 'Name',
    name: 'name',
    required: true,
    type: 'text',
  },
  {
    label: 'Email',
    name: 'email',
    type: 'email',
  },
  {
    label: 'Image URL',
    name: 'imageUrl',
    pattern: 'https://.*',
    type: 'url',
  },
  {
    label: 'Work role',
    name: 'role',
    type: 'text',
  },
  {
    label: 'Company name',
    name: 'company',
    type: 'text',
  },
  {
    label: 'Company URL',
    name: 'companyUrl',
    pattern: 'https://.*',
    type: 'url',
  },
  {
    label: 'Phone',
    name: 'phone',
    type: 'tel',
  },
  {
    label: 'LinkedIn URL',
    name: 'linkedinUrl',
    pattern: 'https://.*',
    type: 'url',
  },
  {
    label: 'Instagram URL',
    name: 'instagramUrl',
    pattern: 'https://.*',
    type: 'url',
  },
  {
    label: 'Twitter URL',
    name: 'twitterUrl',
    pattern: 'https://.*',
    type: 'url',
  },
  {
    label: 'Custom URL',
    name: 'customUrl',
    pattern: 'https://.*',
    type: 'url',
  },
  {
    label: 'Custom URL label',
    name: 'customUrlLabel',
    type: 'text',
  },
]

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
      {formFields.map(({ label, name, pattern, required, type }) => {
        return (
          <GridItem key={name}>
            <FormControl isRequired={required}>
              <FormLabel>{label}</FormLabel>
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
