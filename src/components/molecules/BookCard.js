import { Text } from 'components/atoms'
import { Flex } from '@chakra-ui/react'

export const BookCard = ({ cover_url, name, author}) => {
  return (
    <Flex flexDir="column" mr="16px" alignItems="center" justifyContent="center">
      <Flex 
        backgroundImage={`url(${cover_url})`}
        backgroundSize="cover"
        backgroundPosition="center"
        h={["180px","230px"]} w={["120px","154px"]} borderRadius={["8px","12px"]} />
        <Text noOfLines={1}  textAlign="center" fontSize="12px" fontWeight="600" mt="8px">
          {name}
        </Text>
        <Text textAlign="center" fontSize="10px" mt="4px">
          {author?.name}
        </Text>
    </Flex>
  )
}