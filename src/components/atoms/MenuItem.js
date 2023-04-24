import { Text } from 'components/atoms'
import { MenuItem as ChakraMenuItem, Icon } from '@chakra-ui/react'

export const MenuItem = ({ icon, text, divider, onClick}) => (
  <ChakraMenuItem 
    h='48px' 
    borderBottomWidth={divider ? '1px' : '0px'} 
    borderBottomStyle='solid' 
    borderBottomColor='brand.greyLight'
    onClick={onClick}
  >
    <Icon color='brand.greyDark' boxSize='18px' as={icon} mr='8px'/>
    <Text color='brand.greyDark' fontWeight='600' size='14px'>
      {text}
    </Text>
  </ChakraMenuItem>
)
