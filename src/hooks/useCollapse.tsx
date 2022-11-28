import { Button } from '@chakra-ui/react'
import { useState } from 'react'
import { Collapse } from 'react-collapse'

const useCollapse = (initialState: boolean): [boolean, any, any] => {
  const [collapseIsOpen, setCollapseIsOpen] = useState(initialState)

  return [
    collapseIsOpen,
    <Button
      key="useCollapseButton"
      onClick={() => setCollapseIsOpen(!collapseIsOpen)}
      colorScheme="yellow"
      ml="4px"
      pt="5px"
      pb="4px"
      size="xs"
      variant="outline"
    >
      {collapseIsOpen ? 'Collapse' : 'Expand'}
    </Button>,
    Collapse,
  ]
}

export default useCollapse
