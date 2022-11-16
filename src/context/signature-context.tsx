import { createContext, useCallback, useContext, useState } from 'react'
import buster from 'assets/images/bkp.jpg'
import busterDark from 'assets/images/bkp-dark.jpg'

interface ISignatureContext {
  state: ISignatureState
  actions: ISignatureActions
}

interface ISignatureActions {
  handleSetSignature: (next: ISignatureState) => void
  handleClearSignature: () => void
}
export interface ISignatureState {
  name?: string
  imageUrl?: string
  darkImageUrl?: string
  email?: string
  role?: string
  phone?: string
  company?: string
  companyUrl?: string
  linkedinUrl?: string
  instagramUrl?: string
  twitterUrl?: string
  tiktokUrl?: string
  customUrl?: string
  customUrlLabel?: string
}

const initialState: ISignatureState = {
  name: 'Buster Keaton',
  imageUrl: buster,
  darkImageUrl: busterDark,
  email: 'hi@busterkeatonproductions.com',
  role: 'Actor, Director & Engineer',
  phone: '+0 123 456 789',
  company: 'Buster Keaton Productions',
  companyUrl: 'https://busterkeatonproductions.com',
  linkedinUrl: 'https://www.linkedin.com/in/busterkeaton/',
  instagramUrl: 'https://www.instagram.com/busterkeaton/',
  twitterUrl: 'https://www.twitter.com/busterkeaton/',
  tiktokUrl: 'https://www.tiktok.com/busterkeaton/',
  customUrl: 'https://www.my-custom-domain.com/',
  customUrlLabel: 'Visit my custom domain',
}

const SignatureContext = createContext<ISignatureContext | null>(null)
SignatureContext.displayName = 'SignatureContext'

const SignatureProvider = ({ children }: { children: JSX.Element }) => {
  const [state, setState] = useState(initialState)

  const handleSetSignature = useCallback(
    (next: ISignatureState) =>
      setState((prev: ISignatureState) => ({
        ...prev,
        ...next,
      })),
    []
  )
  const handleClearSignature = useCallback(() => {
    const reset: any = {}

    Object.keys(state).forEach((key: string) => {
      ;(reset as ISignatureState)[key as keyof ISignatureState] = ''
    })

    setState(reset)
  }, [])

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
    throw new Error(
      `useSignatureContext must be used within a SignatureProvider`
    )
  }

  return context
}

export { SignatureProvider, useSignatureContext }
