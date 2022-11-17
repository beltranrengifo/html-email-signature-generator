import styled from '@emotion/styled'
import {
  Heading,
  HStack,
  Switch,
  Tooltip,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react'

import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import { useState } from 'react'

const HeaderStyled = styled.header`
  background-color: white;
  padding: 8px 0;
  position: sticky;
  top: 0;
  z-index: 9;
`

const SignatureThemeSelector = ({ showTitle = true }: IProps) => {
  const { colorMode, toggleColorMode } = useColorMode()
  const text = useColorModeValue('dark', 'light')

  const [focused, setFocused] = useState(false)
  const onFocus = () => setFocused(true)
  const onBlur = () => setFocused(false)

  return (
    <HeaderStyled>
      {showTitle && (
        <Heading as="h2" my={6} noOfLines={1} size="3xl">
          Select the color mode
        </Heading>
      )}
      <HStack spacing={8} justify="flex-end">
        <Tooltip hasArrow label="Dark">
          <MoonIcon />
        </Tooltip>
        <Switch
          aria-label={`Switch to ${text} mode`}
          onChange={toggleColorMode}
          onKeyDown={(event) => {
            if (event.key === 'Enter' && focused) {
              toggleColorMode()
            }
          }}
          onFocus={onFocus}
          onBlur={onBlur}
          colorScheme="teal"
          size="lg"
          isChecked={colorMode === 'light'}
        />
        <Tooltip hasArrow label="Light">
          <SunIcon />
        </Tooltip>
      </HStack>
    </HeaderStyled>
  )
}

interface IProps {
  showTitle?: boolean
}

export default SignatureThemeSelector
