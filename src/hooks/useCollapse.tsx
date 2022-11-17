import { Button } from '@chakra-ui/react'
import { useState } from 'react'

const useCollapse = (initialState: boolean): [boolean, any] => {
  const [collapseIsOpen, setCollapseIsOpen] = useState(initialState)

  return [
    collapseIsOpen,
    <Button
      key="useCollapseButton"
      onClick={() => setCollapseIsOpen(!collapseIsOpen)}
      colorScheme="yellow"
      ml="4px"
      pt="3px"
      size="xs"
      variant="outline"
    >
      {collapseIsOpen ? 'Collapse' : 'Show'}
    </Button>,
  ]
}

export default useCollapse
