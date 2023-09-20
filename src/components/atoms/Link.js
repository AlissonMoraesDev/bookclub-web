import { Link as ChakraLink, Flex } from "@chakra-ui/react"

export const Link = ({ children, ...props }) => (
  <ChakraLink fontSize="14px" color="brand.grayDark" {...props}>
    {children}
  </ChakraLink>
)

Link.Action = ({ text, actionText, ...props}) => (
  <Flex flexDir={["column", "row"]} w="100%" alignItems="center" justifyContent="center" >
    <ChakraLink mr="4px" fontSize="16px" color="brand.grayDark" {...props}>
      {text}
    </ChakraLink>
    <ChakraLink fontSize="16px" fontWeight="bold" color="brand.black" {...props}>
      {actionText}
    </ChakraLink>
  </Flex>
)

Link.Action.displayName = "LinkAction"