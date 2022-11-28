import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Container,
} from '@chakra-ui/react'
import { HeadingStyled } from 'components/Signature/FormData/SignatureFormData'
import useCollapse from 'hooks/useCollapse'
import documentationItems from './documentationItems'

const SignatureDocumentation = () => {
  const [collapseIsOpen, CollapseButton, Collapse] = useCollapse(false)

  return (
    <Container>
      <HeadingStyled as="h2" my={6} noOfLines={1} size="2xl" textAlign="left">
        <span>How to use 🤔</span>
        {CollapseButton}
      </HeadingStyled>
      <Collapse isOpened={collapseIsOpen}>
        <Accordion allowMultiple>
          {documentationItems.map(
            ({ title, content }: { title: string; content: JSX.Element }) => {
              return (
                <AccordionItem key={title} textAlign="left">
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        {title}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} pl={6} fontSize="xs">
                    {content}
                  </AccordionPanel>
                </AccordionItem>
              )
            }
          )}
        </Accordion>
      </Collapse>
    </Container>
  )
}

export default SignatureDocumentation
