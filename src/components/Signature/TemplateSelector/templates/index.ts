import BigLogo from './BigLogo/BigLogo'
import OneColumn from './OneColumn/OneColumn'

export interface Templates {
  OneColumn: JSX.Element
  BigLogo: JSX.Element
}

export interface ITemplateCard {
  name: string
  title: string
}

export const templateCards: ITemplateCard[] = [
  { name: 'OneColumn', title: 'One column' },
  { name: 'BigLogo', title: 'Big Logo' },
  { name: 'TwoColumnsInverted', title: 'Two columns inverted' },
]

export default { OneColumn, BigLogo }
