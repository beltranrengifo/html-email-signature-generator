import BigLogo from './BigLogo/BigLogo'
import OneColumn from './OneColumn/OneColumn'
import BigLogoFlipped from './BigLogoFlipped/BigLogoFlipped'

export interface Templates {
  OneColumn: JSX.Element
  BigLogo: JSX.Element
  BigLogoFlipped: JSX.Element
}

export interface ITemplateCard {
  name: string
  title: string
}

export const templateCards: ITemplateCard[] = [
  { name: 'OneColumn', title: 'One column' },
  { name: 'BigLogo', title: 'Big Logo' },
  { name: 'BigLogoFlipped', title: 'Big Logo Flipped' },
]

export default { OneColumn, BigLogo, BigLogoFlipped }
