import { Flex, Input, InputGroup, InputLeftElement } from "@chakra-ui/react"
import { SearchIcon } from '@chakra-ui/icons'

export const SearchBar = () => {
  return (
    <Flex w={["280px","320px","350px","478px"]} h={["44px","52px"]} bg="brand.grayLight" borderRadius="12px">
      <InputGroup>
        <InputLeftElement h="100%">
          <SearchIcon color="brand.grayDark" />
        </InputLeftElement>
        <Input borderWidth="0px" w="100%" h="100%" placeholder="Faça a sua pesquisa" _placeholder={{ color: 'brand.grayDark'}} focusBorderColor="transparent" />
      </InputGroup>
    </Flex>
  )
}