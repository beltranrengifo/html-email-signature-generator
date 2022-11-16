interface IField {
  helperText?: string
  label: string
  name: string
  pattern?: string
  renderUploadButton?: boolean | undefined
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
    helperText:
      "This image will be used for the light version of the signature. Use the Theme Selector if you don't see it.",
    label: 'Image URL',
    name: 'imageUrl',
    pattern: 'https://.*',
    renderUploadButton: true,
    tooltip:
      'Paste your image URL or upload a new one. JPG, PNG and GIF formats. Max file size allowed 400KB. Recommended image max width 600px',
    type: 'url',
  },
  {
    helperText:
      "This image will be used for the dark version of the signature. Use the Theme Selector if you don't see it.",
    label: 'Dark Mode Image URL',
    name: 'darkImageUrl',
    pattern: 'https://.*',
    renderUploadButton: true,
    tooltip:
      'Paste your image URL or upload a new one. JPG, PNG and GIF formats. Max file size allowed 400KB. Recommended image max width 600px',
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
