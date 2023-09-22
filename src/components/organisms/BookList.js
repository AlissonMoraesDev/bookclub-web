import { Flex } from '@chakra-ui/react'
import { Text } from 'components/atoms'
import { BookCard } from 'components/molecules'
import { useQuery } from 'react-query'
import { getHighLightedBooks } from 'services/api/requests'

export const BookList = () => {
  const { data } = useQuery('highlighted', getHighLightedBooks)
  return (
    <Flex flexDir="column" paddingX={["24px","32px","48px","64px","80px", "112px"]} mt={["24px","48px"]} >
        <Text.ScreenTitle>Destaques</Text.ScreenTitle>
        <Flex mt="24px" overflowX={["scroll", "auto"]}
          css={{
            '::-webkit-scrollbar': {
              display: 'none'
            }
          }}
        >
          {data?.data && 
            data?.data.map((item) => (
              <BookCard key={`book_${item.id}`} {...item} /> 
            ))}
        </Flex>
    </Flex>
  )
}