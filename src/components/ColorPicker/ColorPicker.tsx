import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Menu,
  MenuButton,
  MenuList,
  useColorMode,
} from '@chakra-ui/react'
import { useUiContext } from 'context/ui-context'
import { SketchPicker } from 'react-color'
import { EditIcon } from '@chakra-ui/icons'

const ColorPicker = ({ label }: { label: string }) => {
  const {
    state: uiState,
    actions: {
      handleSetBaseLightColor,
      handleSetBaseDarkColor,
      handleSetNameLightColor,
      handleSetNameDarkColor,
      handleSetDisclaimerLightColor,
      handleSetDisclaimerDarkColor,
    },
  } = useUiContext()
  const {
    baseColorLight,
    baseColorDark,
    nameColorLight,
    nameColorDark,
    disclaimerColorLight,
    disclaimerColorDark,
  } = uiState

  const { colorMode } = useColorMode()
  const currentBaseColor =
    colorMode === 'light' ? baseColorLight : baseColorDark
  const currentNameColor =
    colorMode === 'light' ? nameColorLight : nameColorDark
  const currentDisclaimerColor =
    colorMode === 'light' ? disclaimerColorLight : disclaimerColorDark

  return (
    <Menu placement="left-start" closeOnSelect={false}>
      <MenuButton as={Button} leftIcon={<EditIcon />}>
        {label}
      </MenuButton>
      <MenuList border={0} p={0} boxShadow="xl">
        <Accordion allowMultiple>
          <AccordionItem border={0} minW="257px">
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Headline color
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <SketchPicker
                color={currentNameColor}
                onChangeComplete={({ hex }) =>
                  colorMode === 'light'
                    ? handleSetNameLightColor(hex)
                    : handleSetNameDarkColor(hex)
                }
              />
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem border={0} minW="257px">
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Base color
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <SketchPicker
                color={currentBaseColor}
                onChangeComplete={({ hex }) =>
                  colorMode === 'light'
                    ? handleSetBaseLightColor(hex)
                    : handleSetBaseDarkColor(hex)
                }
              />
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem border={0} minW="257px">
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Disclaimer color
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <SketchPicker
                color={currentDisclaimerColor}
                onChangeComplete={({ hex }) =>
                  colorMode === 'light'
                    ? handleSetDisclaimerLightColor(hex)
                    : handleSetDisclaimerDarkColor(hex)
                }
              />
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </MenuList>
    </Menu>
  )
}

export default ColorPicker
