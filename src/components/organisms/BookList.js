import { Flex } from '@chakra-ui/react'
import { BookCard } from 'components/molecules'
import { Text } from 'components/atoms'
import { useQuery } from 'react-query'
import { getHighLightedBooks } from 'services/api/requests'

export const BookList = () => {
  const { data } = useQuery('highlighted', getHighLightedBooks)
  return ( 
    <Flex mt={['24px','48px']} flexDir='column' paddingX={['24px', '48px', '80px', '112px']}>
      <Text.ScreenTitle>Destaques</Text.ScreenTitle>
      <Flex mt={['12px','24px']} flexDir='row' overflowX={['scroll','auto']} css={{
        '::-webkit-scrollbar': {
          display: 'none'
        }
      }}>
        { data?.data &&
          data?.data.map((item) => <BookCard key={`book_${item.id}`} {...item} />)
        }
      </Flex>
    </Flex>
  )
}