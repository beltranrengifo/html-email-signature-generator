import { FormControl, FormLabel, Input, VStack } from '@chakra-ui/react'
import { ISignatureState, useSignatureContext } from 'context/signature-context'

const SignatureFormFields = () => {
  const {
    actions: { handleSetSignature },
    state,
  } = useSignatureContext()

  const { name, imageUrl, email, role, phone, company, companyUrl } = state

  const onInputChange = ({ key, value }: { key: string; value: string }) => {
    handleSetSignature({
      [key as keyof ISignatureState]: value,
    })
  }

  return (
    <>
      <VStack>
        <FormControl isRequired>
          <FormLabel>Name</FormLabel>
          <Input
            onChange={(event) =>
              onInputChange({ key: 'name', value: event.target.value })
            }
            placeholder={name}
            type="text"
            value={name}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input
            onChange={(event) =>
              onInputChange({ key: 'email', value: event.target.value })
            }
            placeholder={email}
            type="email"
            value={email}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Image URL</FormLabel>
          <Input
            onChange={(event) =>
              onInputChange({ key: 'imageUrl', value: event.target.value })
            }
            pattern="https://.*"
            placeholder={imageUrl}
            type="url"
            value={imageUrl}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Phone</FormLabel>
          <Input
            onChange={(event) =>
              onInputChange({ key: 'phone', value: event.target.value })
            }
            placeholder={phone}
            type="tel"
            value={phone}
          />
        </FormControl>
      </VStack>
      <VStack>
        <FormControl>
          <FormLabel>Your role</FormLabel>
          <Input
            onChange={(event) =>
              onInputChange({ key: 'role', value: event.target.value })
            }
            placeholder={role}
            type="text"
            value={role}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Company name</FormLabel>
          <Input
            onChange={(event) =>
              onInputChange({ key: 'company', value: event.target.value })
            }
            placeholder={company}
            type="text"
            value={company}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Company site URL</FormLabel>
          <Input
            onChange={(event) =>
              onInputChange({
                key: 'companyUrl',
                value: event.target.value,
              })
            }
            pattern="https://.*"
            placeholder={companyUrl}
            type="url"
            value={companyUrl}
          />
        </FormControl>
      </VStack>
    </>
  )
}

export default SignatureFormFields
