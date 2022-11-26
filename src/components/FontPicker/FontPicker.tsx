import { AtSignIcon } from '@chakra-ui/icons'
import {
  Menu,
  MenuButton,
  Button,
  MenuList,
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
    <Menu closeOnSelect={false}>
      <MenuButton as={Button} leftIcon={<AtSignIcon />}>
        {label}
      </MenuButton>
      <MenuList>
        <MenuOptionGroup defaultValue={currentfont} type="radio">
          {SAFE_FONTS.map((font) => {
            return (
              <MenuItemOption
                as="span"
                cursor="pointer"
                value={font}
                fontSize="md"
                key={font}
                onClick={() => handleSetFont(font)}
                style={{
                  backgroundColor:
                    font === currentfont
                      ? 'var(--chakra-colors-gray-100)'
                      : undefined,
                }}
              >
                <span style={{ fontFamily: font }}>Use {font} typography</span>
              </MenuItemOption>
            )
          })}
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  )
}

export default FontPicker
