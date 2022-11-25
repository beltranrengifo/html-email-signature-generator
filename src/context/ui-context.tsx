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
  baseColorLight: string
  baseColorDark: string
  baseCurrentColor: string
  nameColorLight: string
  nameColorDark: string
  nameCurrentColor: string
  baseStyles: any
  template: string
}

interface IUiActions {
  handleSetBaseLightColor: (color: string) => void
  handleSetBaseDarkColor: (color: string) => void
  handleSetNameLightColor: (color: string) => void
  handleSetNameDarkColor: (color: string) => void
  handleSetTemplate: (template: string) => void
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

const BASE_COLOR_LIGHT = '#473741'
const BASE_COLOR_DARK = '#d2d2d2'
const NAME_COLOR_LIGHT = '#2d2329'
const NAME_COLOR_DARK = '#e4dede'

const UiProvider = ({ children }: { children: JSX.Element }) => {
  const { colorMode } = useColorMode()

  const [state, setState] = useState({
    baseColorLight: BASE_COLOR_LIGHT,
    baseColorDark: BASE_COLOR_DARK,
    baseCurrentColor:
      colorMode === 'light' ? BASE_COLOR_LIGHT : BASE_COLOR_DARK,
    nameColorLight: NAME_COLOR_LIGHT,
    nameColorDark: NAME_COLOR_DARK,
    nameCurrentColor:
      colorMode === 'light' ? NAME_COLOR_LIGHT : NAME_COLOR_DARK,
    baseStyles: BASE_STYLES,
    template: 'BigLogo',
  })

  useEffect(() => {
    setState((prev: IUiState) => ({
      ...prev,
      baseCurrentColor:
        colorMode === 'light' ? prev.baseColorLight : prev.baseColorDark,
      nameCurrentColor:
        colorMode === 'light' ? prev.nameColorLight : prev.nameColorDark,
    }))
  }, [colorMode])

  const handleSetBaseLightColor = useCallback(
    (color: string) =>
      setState((prev: IUiState) => ({
        ...prev,
        baseColorLight: color,
        baseCurrentColor: color,
      })),
    []
  )
  const handleSetBaseDarkColor = useCallback(
    (color: string) =>
      setState((prev: IUiState) => ({
        ...prev,
        baseColorDark: color,
        baseCurrentColor: color,
      })),
    []
  )
  const handleSetNameLightColor = useCallback(
    (color: string) =>
      setState((prev: IUiState) => ({
        ...prev,
        nameColorLight: color,
        nameCurrentColor: color,
      })),
    []
  )
  const handleSetNameDarkColor = useCallback(
    (color: string) =>
      setState((prev: IUiState) => ({
        ...prev,
        nameColorDark: color,
        nameCurrentColor: color,
      })),
    []
  )
  const handleSetTemplate = useCallback(
    (template: string) =>
      setState((prev: IUiState) => ({
        ...prev,
        template,
      })),
    []
  )

  const actions: IUiActions = {
    handleSetBaseLightColor,
    handleSetBaseDarkColor,
    handleSetNameLightColor,
    handleSetNameDarkColor,
    handleSetTemplate,
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
