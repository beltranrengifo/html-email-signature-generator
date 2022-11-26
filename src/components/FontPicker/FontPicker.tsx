import { AtSignIcon } from '@chakra-ui/icons'
import {
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuOptionGroup,
} from '@chakra-ui/react'
import { useUiContext } from 'context/ui-context'

const SAFE_FONTS = [
  'Arial',
  'Courier New',
  'Georgia',
  'Lucida Sans Unicode',
  'Tahoma',
  'Times New Roman',
  'Trebuchet MS',
  'Verdana',
]

const FontPicker = ({ label }: { label: string }) => {
  const {
    state: uiState,
    actions: { handleSetFont },
  } = useUiContext()

  const { font: currentfont } = uiState

  return (
    <Menu>
      <MenuButton as={Button} leftIcon={<AtSignIcon />}>
        {label}
      </MenuButton>
      <MenuList>
        <MenuItem>
          <MenuOptionGroup defaultValue={currentfont} type="radio">
            {SAFE_FONTS.map((font) => {
              return (
                <MenuItemOption
                  as="span"
                  value={font}
                  fontSize="md"
                  key={font}
                  onClick={() => handleSetFont(font)}
                >
                  <span style={{ fontFamily: font }}>
                    Use {font} typography
                  </span>
                </MenuItemOption>
              )
            })}
          </MenuOptionGroup>
        </MenuItem>
      </MenuList>
    </Menu>
  )
}

export default FontPicker
