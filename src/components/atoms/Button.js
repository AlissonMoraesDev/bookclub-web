import { Button as ChakraButton } from '@chakra-ui/react'

export const Button = ({ children, ...props}) => (
  <ChakraButton 
    fontSize='16px' 
    borderRadius='16px' 
    fontWeight='bold'  
    h='56px' 
    bg='brand.primary'
    _hover={{
      bg: 'brand.primary'
    }} 
    {...props}
  >
    {children}
  </ChakraButton>
)
