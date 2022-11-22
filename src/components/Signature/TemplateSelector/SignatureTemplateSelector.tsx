import { Collapse } from 'react-collapse'

import {
  Text,
  Card,
  CardBody,
  Container,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react'
import { HeadingStyled } from 'components/Signature/FormData/SignatureFormData'
import useCollapse from 'hooks/useCollapse'
import { useSignatureContext } from 'context/signature-context'
import { ITemplateCard, templateCards } from './templates'

const SignatureTemplateSelector = () => {
  const [collapseIsOpen, CollapseButton] = useCollapse(false)

  const {
    actions: { handleSetSignature },
    state,
  } = useSignatureContext()

  const { template: currentTemplate } = state

  const activeBgCardColor: string = useColorModeValue(
    'var(--chakra-colors-chakra-subtle-bg)',
    'var(--chakra-colors-teal-200)'
  )

  const activeTextCardColor: string = useColorModeValue(
    'var(--chakra-colors-chakra-body-text)',
    'var(--chakra-colors-gray-800)'
  )

  const isCardActive = (name: string): boolean => currentTemplate === name

  return (
    <Container>
      <HeadingStyled as="h2" my={6} noOfLines={1} size="2xl" textAlign="left">
        <span>Select template 💅</span>
        {CollapseButton}
      </HeadingStyled>
      <Collapse isOpened={collapseIsOpen}>
        <Stack direction={['column', 'row']} spacing="12px">
          {templateCards.map(({ name, title }: ITemplateCard) => {
            return (
              <Card
                _hover={{
                  boxShadow: !isCardActive(name) && 'var(--chakra-shadows-md)',
                }}
                cursor="pointer"
                key={name}
                w="33.33%"
                bg={isCardActive(name) ? activeBgCardColor : 'var(--card-bg)'}
                color={
                  isCardActive(name)
                    ? activeTextCardColor
                    : 'var(--chakra-colors-chakra-body-text)'
                }
                variant={isCardActive(name) ? 'filled' : 'elevated'}
                onClick={() => handleSetSignature({ template: name })}
              >
                <CardBody>{title}</CardBody>
              </Card>
            )
          })}
        </Stack>
        <Text fontSize="sm" mt={4} textAlign="left">
          You may want to expand the Preview Signature section at this point...
          🤔
        </Text>
      </Collapse>
    </Container>
  )
}

export default SignatureTemplateSelector
