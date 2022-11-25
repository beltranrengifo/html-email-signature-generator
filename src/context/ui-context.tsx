import { useColorMode } from '@chakra-ui/react'
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'

interface IUiContext {
  state: IUiState
  actions: IUiActions
}

interface IUiState {
  colorLight: string
  colorDark: string
  baseStyles: any
  currentColor: string
}

interface IUiActions {
  handleSetUiLightColor: (color: string) => void
  handleSetUiDarkColor: (color: string) => void
}

const BASE_STYLES = {
  WebkitMarginBefore: 0,
  WebkitMarginAfter: 0,
  fontFamily: 'Trubuchet, Arial, sans-serif',
  fontSize: '14px',
  letterSpacing: '1px',
  margin: '12px 0 0 0',
}

const UiContext = createContext<IUiContext | null>(null)
UiContext.displayName = 'UiContext'

const COLOR_LIGHT = '#473741'
const COLOR_DARK = '#d2d2d2'

const UiProvider = ({ children }: { children: JSX.Element }) => {
  const { colorMode } = useColorMode()

  const [state, setState] = useState({
    colorLight: COLOR_LIGHT,
    colorDark: COLOR_DARK,
    currentColor: colorMode === 'light' ? COLOR_LIGHT : COLOR_DARK,
    baseStyles: BASE_STYLES,
  })

  useEffect(() => {
    setState((prev: IUiState) => ({
      ...prev,
      currentColor: colorMode === 'light' ? prev.colorLight : prev.colorDark,
    }))
  }, [colorMode])

  const handleSetUiLightColor = useCallback(
    (color: string) =>
      setState((prev: IUiState) => ({
        ...prev,
        colorLight: color,
        currentColor: color,
      })),
    []
  )
  const handleSetUiDarkColor = useCallback(
    (color: string) =>
      setState((prev: IUiState) => ({
        ...prev,
        colorDark: color,
        currentColor: color,
      })),
    []
  )

  const actions: IUiActions = {
    handleSetUiLightColor,
    handleSetUiDarkColor,
  }

  return (
    <UiContext.Provider value={{ state, actions }}>
      {children}
    </UiContext.Provider>
  )
}

const useUiContext = () => {
  const context = useContext(UiContext)

  if (!context) {
    throw new Error(`useUiContext must be used within a UiProvider`)
  }

  return context
}

export { UiProvider, useUiContext }
