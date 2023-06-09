import { useState, useEffect } from 'react'
import { useQuery } from 'react-query'
import { Flex, Spinner } from '@chakra-ui/react'
import { Text } from 'components/atoms'
import { CategoryCard, BookCard } from 'components/molecules'
import { getCategories, getBooksByCategory } from 'services/api/requests'


export const CategoryList = ({ title, categoryId}) => {
  const [selected, setSelected] = useState(categoryId)
  const { data } = useQuery('categories', getCategories)
  const { data: bookQuery, refetch, isLoading } = useQuery(
    ['booksById', selected], 
    () => getBooksByCategory(selected), 
    {
    enabled: !!selected
    }
  )

  useEffect(() => {
    if (!selected && data?.data) {
      setSelected(data?.data[0].id)
    }
  }, [data])

  useEffect(() => {
    refetch()
  }, [categoryId])
  
  return (
    <Flex 
      mt='48px' 
      flexDir='column' 
      paddingX={['24px', '48px', '80px', '112px']} 
      h='520px'
    >
      <Text.ScreenTitle>{title || 'Categorias'}</Text.ScreenTitle>
      { 
        !categoryId && (
          <Flex 
            mt='12px' 
            flexDir='row' 
            overflowX={['scroll', 'auto']} 
            css={{
              '::-webkit-scrollbar': {
                display: 'none'
              }
            }}>
            { data?.data &&
              data?.data.map((item) => (
              <CategoryCard 
                key={`book_${item.id}`} 
                selected={selected === item.id} 
                onClick={() => setSelected(item.id)}
                {...item} 
              />
              ))}
          </Flex>
      )}
    <Flex mt='12px' pb='48px' flexDir='row' overflowX={['scroll', 'auto']} css={{
        '::-webkit-scrollbar': {
          display: 'none'
        }
      }}>
        {
          isLoading && <Flex flexDir='row' alignItems='center' justify='center' h='180px'> 
            <Spinner />
          </Flex>
        }
        {!isLoading && bookQuery && bookQuery?.data?.length === 0 && (
          <Flex flexDir='row' alignItems='center' justify='center' h='180px'>
            <Text textAlign='center' fontSize='16px' fontWeight='600' mt='16px'>Nenhum livro encontrado</Text>
          </Flex>
        )}
        { bookQuery &&
          bookQuery?.data.map((item) => <BookCard key={`book_${item.id}`} {...item} />)
        }
      </Flex>
  </Flex>
  )
}