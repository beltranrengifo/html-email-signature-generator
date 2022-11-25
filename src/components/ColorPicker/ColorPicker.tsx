import {
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
    actions: { handleSetUiLightColor, handleSetUiDarkColor },
  } = useUiContext()
  const { colorLight, colorDark } = uiState

  const { colorMode } = useColorMode()
  const currentColor = colorMode === 'light' ? colorLight : colorDark
  return (
    <Menu placement="left-start">
      <MenuButton as={Button} leftIcon={<EditIcon />}>
        {label}
      </MenuButton>
      <MenuList border={0} p={0}>
        <SketchPicker
          color={currentColor}
          onChangeComplete={({ hex }) =>
            colorMode === 'light'
              ? handleSetUiLightColor(hex)
              : handleSetUiDarkColor(hex)
          }
        />
      </MenuList>
    </Menu>
  )
}

export default ColorPicker
