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
import { ChromePicker } from 'react-color'
import { EditIcon } from '@chakra-ui/icons'

const ColorPicker = ({ label }: { label: string }) => {
  const {
    state: uiState,
    actions: {
      handleSetBaseLightColor,
      handleSetBaseDarkColor,
      handleSetNameLightColor,
      handleSetNameDarkColor,
    },
  } = useUiContext()
  const { baseColorLight, baseColorDark, nameColorLight, nameColorDark } =
    uiState

  const { colorMode } = useColorMode()
  const currentBaseColor =
    colorMode === 'light' ? baseColorLight : baseColorDark
  const currentNameColor =
    colorMode === 'light' ? nameColorLight : nameColorDark

  return (
    <Menu placement="left-start" closeOnSelect={false}>
      <MenuButton as={Button} leftIcon={<EditIcon />}>
        {label}
      </MenuButton>
      <MenuList border={0} p={0}>
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
              <ChromePicker
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
              <ChromePicker
                color={currentBaseColor}
                onChangeComplete={({ hex }) =>
                  colorMode === 'light'
                    ? handleSetBaseLightColor(hex)
                    : handleSetBaseDarkColor(hex)
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
