import { useState } from "react"
import { Text } from "components/atoms"
import { Button, Input as ChakraInput, InputGroup, InputRightElement } from "@chakra-ui/react"
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'

export const Input = (props) => (
  <>
    <ChakraInput h="56px" fontSize="16px" focusBorderColor="brand.primary" {...props} />
    {props.error && <Text color="red" fontSize="14px">{props.error}</Text>}
  </>
)

Input.Password = ({value, onChange, id, name, ...props}) => {
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

  return (
    <>
      <InputGroup h="56px" fontSize="16px" size="md" bg="transparent" {...props}>
        <Input 
          id={id}
          name={name}
          onChange={onChange}
          value={value}
          focusBorderColor="brand.primary"
          pr="4.5rem"
          type={show ? 'text' : 'password'}
          placeholder="********"
        />
        <InputRightElement h="100%">
          <Button bg="transparent" 
            _hover={{ bg: "transparent" }} 
            h="100%" 
            size="sm" 
            onClick={handleClick} 
            display="flex" 
            alignItems="center" 
            justifyContent="center">
            {show ? <ViewOffIcon boxSize="18px" color="brand.primary" /> : <ViewIcon boxSize="18px" color="brand.primary" /> }
          </Button>
        </InputRightElement>
      </InputGroup>
      {props.error && <Text color="red" fontSize="14px">{props.error}</Text>}
    </>
  )
}

Input.Password.displayName = "InputPassword"