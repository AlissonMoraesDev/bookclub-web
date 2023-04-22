import { useState } from 'react'
import { Text } from 'components/atoms'
import { Input as ChakraInput, InputGroup, InputRightElement, Button } from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'

export const Input = (props) => (
  <>
    <ChakraInput 
      h='56px' 
      fontSize='16px' 
      focusBorderColor='brand.primary' 
      {...props} 
    />
    {props.error && <Text mt='4px' fontSize='14px' fontWeight='300' color='red'>{props.error}</Text>}
  </>
)



Input.Password = ({ value, onChange, id, name, ...props }) => {
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

  return (
    <>
    
      <InputGroup
        display='flex'
        alignItems='center'
        justifyContent='center' 
        size='md' 
        h='56px'
        {...props}
      >
        <Input
          id={id}
          name={name}
          onChange={onChange}
          value={value} 
          focusBorderColor='brand.primary'
          pr='4.5rem'
          type={ show ? 'text' : 'password'}
          placeholder='********'
        />
        <InputRightElement h='100%'>
          <Button 
            bg='transparent' 
            _hover={{ bg: 'transparent' }} 
            size='sm' 
            onClick={handleClick}
            h='100%'
            display='flex'
            alignItems='center'
            justifyContent='center' 
          >
            { show ? (
              <ViewOffIcon boxSize='18px' color='brand.primary' /> 
            ) 
            : (
              <ViewIcon boxSize='18px' color='brand.primary' /> 
            )} 
          </Button>
        </InputRightElement>
      </InputGroup>
      {props.error && <Text mt='4px' fontSize='14px' fontWeight='300' color='red'>{props.error}</Text>}
    </>
  )
}

Input.Password.displayName = 'InputPassowrd'