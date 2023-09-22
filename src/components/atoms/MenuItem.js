import { Text } from 'components/atoms'
import { MenuItem as ChakraMenuItem, Icon } from '@chakra-ui/react'

export const MenuItem = ({ icon, text, divider}) => (
  <ChakraMenuItem h="48px" borderBottomWidth={divider ? '1px' : '0px'} borderBottomColor="brand.grayLight" borderBottomStyle="solid">
    <Icon color="brand.grayDark" boxSize="18px" mr="8px" as={icon}/> 
    <Text color="brand.grayDark" fontSize="14px">
      {text}
    </Text>
  </ChakraMenuItem>
)
