import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { Flex } from '@chakra-ui/react'
import { Text } from 'components/atoms'
import { CategoryCard, BookCard } from 'components/molecules'
import { getCategories, getBooksByCategory } from 'services/api/requests'


export const CategoryList = () => {
  const [selected, setSelected] = useState()
  const { data } = useQuery('categories', getCategories)
  const bookQuery = useQuery(['booksById', selected], () => 
    getBooksByCategory(selected), 
    {
      enabled: !!selected
    }
  )

  useEffect(() => {
    if(!selected && data?.data) {
      setSelected(data?.data[0].id)
    }
  }, [data])

  return (
    <Flex flexDir="column" paddingX={["24px","32px","48px","64px","80px", "112px"]} mt="24px" h="400px">
        <Text.ScreenTitle>Categorias</Text.ScreenTitle>
        <Flex mt="12px" overflowX={["scroll", "hidden"]} css={{
            '::-webkit-scrollbar': {
              display: 'none'
            }
          }}>
          {data?.data && data?.data.map((item) => (
            <CategoryCard key={`book_${item.id}`} onClick={() => setSelected(item.id)} selected={selected === item.id} {...item} /> 
          ))}
        </Flex>
        <Flex mt="12px" pb="48px"  overflowX={["scroll", "hidden"]} css={{
            '::-webkit-scrollbar': {
              display: 'none'
            }
          }}>
          {bookQuery?.data && 
            bookQuery?.data?.data.map((item) => (
              <BookCard key={`book_${item.id}`} {...item} /> 
            ))}
        </Flex>
    </Flex>
  )
}