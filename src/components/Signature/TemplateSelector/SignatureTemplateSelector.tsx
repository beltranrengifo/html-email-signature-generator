import {
  Card,
  CardBody,
  Heading,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react'
import { useUiContext } from 'context/ui-context'
import { ITemplateCard, templateCards } from './templates'

const SignatureTemplateSelector = () => {
  const {
    state: uiState,
    actions: { handleSetTemplate },
  } = useUiContext()

  const { template: currentTemplate } = uiState

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
    <section>
      <Heading
        as="h3"
        my={6}
        noOfLines={1}
        textAlign="left"
        size="lg"
        mt={0}
        mb={6}
      >
        <span>Select template 💅</span>
      </Heading>
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
              onClick={() => handleSetTemplate(name)}
            >
              <CardBody>{title}</CardBody>
            </Card>
          )
        })}
      </Stack>
    </section>
  )
}

export default SignatureTemplateSelector
