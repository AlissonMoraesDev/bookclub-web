import { Flex } from '@chakra-ui/react'
import { Text } from 'components/atoms'

export const CategoryCard = ({onClick, name, selected }) => {
  return (
    <Flex
      alignItems="center" 
      justifyContent="center"
      h="36px"
      cursor="pointer"
      onClick={onClick} 
      px="14px" 
      py="12px"
      borderStyle="solid"
      borderWidth="1px"
      mr="8px"
      borderRadius="8px"
      borderColor={selected ? 'brand.black' : 'brand.grayLight'}
      bg={selected ? 'brand.black' : 'brand.background'}
    >
      <Text fontSize="14px" fontWeight="500" color={selected ? 'brand.white' : 'brand.black'} >{name}</Text>
    </Flex>
  )
}