interface IField {
  label: string
  name: string
  pattern?: string
  required?: boolean
  tooltip?: string | undefined
  type: string
}

const formFields: IField[] = [
  {
    label: 'Name',
    name: 'name',
    required: true,
    type: 'text',
  },
  {
    label: 'Email',
    name: 'email',
    type: 'email',
  },
  {
    label: 'Image URL',
    name: 'imageUrl',
    pattern: 'https://.*',
    tooltip:
      'Paste your image URL or upload a new one. JPG, PNG and GIF formats',
    type: 'url',
  },
  {
    label: 'Dark Mode Image URL',
    name: 'darkImageUrl',
    pattern: 'https://.*',
    type: 'url',
  },
  {
    label: 'Work role',
    name: 'role',
    type: 'text',
  },
  {
    label: 'Company name',
    name: 'company',
    type: 'text',
  },
  {
    label: 'Company URL',
    name: 'companyUrl',
    pattern: 'https://.*',
    type: 'url',
  },
  {
    label: 'Phone',
    name: 'phone',
    type: 'tel',
  },
  {
    label: 'LinkedIn URL',
    name: 'linkedinUrl',
    pattern: 'https://.*',
    type: 'url',
  },
  {
    label: 'Instagram URL',
    name: 'instagramUrl',
    pattern: 'https://.*',
    type: 'url',
  },
  {
    label: 'Twitter URL',
    name: 'twitterUrl',
    pattern: 'https://.*',
    type: 'url',
  },
  {
    label: 'TikTok URL',
    name: 'tiktokUrl',
    pattern: 'https://.*',
    type: 'url',
  },
  {
    label: 'Custom URL',
    name: 'customUrl',
    pattern: 'https://.*',
    type: 'url',
  },
  {
    label: 'Custom URL label',
    name: 'customUrlLabel',
    type: 'text',
  },
]

export { formFields }
