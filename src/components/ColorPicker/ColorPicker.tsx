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

interface IPicker {
  label: string
  color: string
  setter: (hex: string) => void
}

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

  const pickers: IPicker[] = [
    {
      label: 'Headline color',
      color: currentNameColor,
      setter:
        colorMode === 'light'
          ? handleSetNameLightColor
          : handleSetNameDarkColor,
    },
    {
      label: 'Base color',
      color: currentBaseColor,
      setter:
        colorMode === 'light'
          ? handleSetBaseLightColor
          : handleSetBaseDarkColor,
    },
    {
      label: 'Disclaimer color',
      color: currentDisclaimerColor,
      setter:
        colorMode === 'light'
          ? handleSetDisclaimerLightColor
          : handleSetDisclaimerDarkColor,
    },
  ]

  return (
    <Menu placement="left-start" closeOnSelect={false}>
      <MenuButton as={Button} leftIcon={<EditIcon />}>
        {label}
      </MenuButton>
      <MenuList border={0} p={0} boxShadow="xl">
        <Accordion allowMultiple>
          {pickers.map(({ label, color, setter }) => {
            return (
              <AccordionItem border={0} minW="257px" key={label + color}>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      {label}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <SketchPicker
                    color={color}
                    onChangeComplete={({ hex }) => setter(hex)}
                  />
                </AccordionPanel>
              </AccordionItem>
            )
          })}
        </Accordion>
      </MenuList>
    </Menu>
  )
}

export default ColorPicker
