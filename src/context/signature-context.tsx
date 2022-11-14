import { createContext, useCallback, useContext, useState } from 'react'

interface ISignatureContext {
  state: ISignatureState
  actions: ISignatureActions
}

interface ISignatureState {
  name: string
  imageUrl?: string
  email?: string
  role?: string
  phone?: string
  company?: string
  primaryUrl?: ISignatureUrl
  secondaryUrl?: ISignatureUrl
}

interface ISignatureUrl {
  url: string
  label: string
}

interface ISignatureActions {
  handleSetSignature: (next: ISignatureState) => void
  handleClearSignature: () => void
}

const initialState = {
  name: '',
  imageUrl: '',
  email: '',
  role: '',
  phone: '',
  company: '',
  primaryUrl: { url: '', label: '' },
  secondaryUrl: { url: '', label: '' },
}

const SignatureContext = createContext<ISignatureContext | null>(null)
SignatureContext.displayName = 'SignatureContext'

const SignatureProvider = ({ children }: { children: JSX.Element }) => {
  const [state, setState] = useState(initialState as ISignatureState)

  const handleSetSignature = useCallback(
    (next: ISignatureState) =>
      setState((prev: ISignatureState) => ({
        ...prev,
        ...next,
      })),
    []
  )
  const handleClearSignature = useCallback(
    () => setState(() => initialState),
    []
  )

  const actions: ISignatureActions = {
    handleSetSignature,
    handleClearSignature,
  }

  return (
    <SignatureContext.Provider value={{ state, actions }}>
      {children}
    </SignatureContext.Provider>
  )
}

const useSignatureContext = () => {
  const context = useContext(SignatureContext)

  if (context == null) {
    throw new Error(`useUiContext must be used within a SignatureProvider`)
  }

  return context
}

export { SignatureProvider, useSignatureContext }
