import { createContext, useCallback, useContext, useState } from 'react'
import useLocalStorage from 'hooks/useLocalStorage'

interface ISignatureContext {
  state: ISignatureState
  actions: ISignatureActions
}

interface ISignatureActions {
  handleSetSignature: (next: ISignatureState) => void
  handleClearSignature: (next: ISignatureState) => void
  handleRestoreSignature: (next: ISignatureState) => void
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
  pinterestUrl?: string
  youtubeUrl?: string
  facebookUrl?: string
  customUrl?: string
  customUrlLabel?: string
  address?: string
  disclaimer?: string
  bannerImageUrl?: string
  bannerImageLink?: string
}

const initialState: ISignatureState = {
  name: 'Buster Keaton',
  imageUrl:
    'https://res.cloudinary.com/dap1oowul/image/upload/v1668682722/bkp_wua0bh.jpg',
  darkImageUrl:
    'https://res.cloudinary.com/dap1oowul/image/upload/v1668682722/bkp-dark_fop6c4.jpg',
  email: 'hi@busterkeatonproductions.com',
  role: 'Actor, Director & Engineer',
  phone: '+0 123 456 789',
  company: 'Buster Keaton Productions',
  companyUrl: 'https://busterkeatonproductions.com',
  linkedinUrl: 'https://www.linkedin.com/in/busterkeaton/',
  instagramUrl: 'https://www.instagram.com/busterkeaton/',
  twitterUrl: 'https://www.twitter.com/busterkeaton/',
  tiktokUrl: 'https://www.tiktok.com/busterkeaton/',
  pinterestUrl: 'https://www.pinterest.com/busterkeaton/',
  youtubeUrl: 'https://www.youtube.com/busterkeaton/',
  facebookUrl: 'https://www.facebook.com/busterkeaton/',
  customUrl: 'https://www.my-custom-domain.com/',
  customUrlLabel: 'Visit my custom domain',
  address: '1 W 2nd St, Piqua, Kansas 66761 EE. UU.',
  bannerImageUrl:
    'https://res.cloudinary.com/dap1oowul/image/upload/v1669321362/sherlock_lgfwh0.jpg',
  bannerImageLink: 'https://en.wikipedia.org/wiki/Buster_Keaton',
  disclaimer:
    'The content of this message is confidential. If you have received it by mistake, please inform us by an email reply and then delete the message. It is forbidden to copy, forward, or in any way reveal the contents of this message to anyone. The integrity and security of this email cannot be guaranteed over the Internet. Therefore, the sender will not be held liable for any damage caused by the message.',
}

const SignatureContext = createContext<ISignatureContext | null>(null)
SignatureContext.displayName = 'SignatureContext'

const SignatureProvider = ({ children }: { children: JSX.Element }) => {
  const [state, setState] = useState(initialState)

  const [, setUploadedImageOnStorage] = useLocalStorage('uploadedImages', {})

  const handleSetSignature = useCallback(
    (next: ISignatureState) =>
      setState((prev: ISignatureState) => ({
        ...prev,
        ...next,
      })),
    []
  )

  const handleRestoreSignature = useCallback(() => {
    handleClearSignature()
    setState({ ...initialState })
  }, [])

  const handleClearSignature = useCallback(() => {
    const reset: any = {}

    Object.keys(state).forEach((key: string) => {
      ;(reset as ISignatureState)[key as keyof ISignatureState] = ''
    })

    setState(reset)
    setUploadedImageOnStorage({})
  }, [])

  const actions: ISignatureActions = {
    handleSetSignature,
    handleClearSignature,
    handleRestoreSignature,
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
