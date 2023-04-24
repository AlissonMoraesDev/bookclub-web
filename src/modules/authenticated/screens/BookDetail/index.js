import { Flex, useToast } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import { useQuery, useMutation } from 'react-query'
import { getBookDetail, addBookToFavorite, removeBookToFavorite } from 'services/api/requests'
import { NavBar, Text, Button, CategoryList } from 'components'


export const BookDetailScreen = () => {
  const { id } = useParams()
  const { data, refetch, isLoading } = useQuery(
    ['bookDetail', id],
    () => getBookDetail(id),
    {
      enabled: !!id    
    }
  )

  console.log({ data })

  const toast = useToast()

  const addBookFavoriteMutation = useMutation((data) => addBookToFavorite(data), {
    onError: (error) => {
      toast({
        title: 'Falha ao adicoinar nos favoritos.',
        description: error?.response?.data?.error || 'Por favor, tente novamente',
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
      refetch()
    },
    onSuccess: () => {
      toast({
        title: 'Livro adicionado aos favoritos com sucesso!',
        status: 'success',
        duration: 6000,
        isClosable: true,
      })
      refetch()
    }
  })

  const removeBookFavoriteMutation = useMutation((data) => removeBookToFavorite(data), {
    onError: (error) => {
      toast({
        title: 'Error ao remover dos favoritos.',
        description: error?.response?.data?.error || 'Por favor, tente novamente',
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
      refetch()
    },
    onSuccess: () => {
      toast({
        title: 'Livro removido dos favoritos com sucesso!',
        status: 'success',
        duration: 6000,
        isClosable: true,
      })
      refetch()
    }
  })

  const handleVerifyBookFavorites = () => {
    if (data?.data?.favorite) {
      removeBookFavoriteMutation.mutate(data?.data?.favorite.id)
    } else {
      addBookFavoriteMutation.mutate({
        book_id: id
      })
    }
  } 

  
  return (
    <Flex flexDir='column'>
      <NavBar />
      <Flex
        flexDir={['column','row']}
        alignItems={['center', 'flex-start']}
        justifyContent={['center', 'flex-start']}
        mt={['24px','48px']}
        w='100%'
        maxW='100vw'
        paddingX={['24px','48px','80px','112px']}
      >
        <Flex 
          w={['170px','238px']}
          h={['256px','358px']}
          backgroundImage={`url(${data?.data?.book?.cover_url})`}
          backgroundSize='cover'
          backgroundPosition={['center']}
          backgroundRepeat='no-repeat'
          borderRadius={['12px']}
        />
          <Flex mt={['24px', '0px']} w={['100%','70%']} mx={['0px','48px']} flexDir='column'>
            <Text.ScreenTitle fontSize='24px'>
              {data?.data?.book?.name}
            </Text.ScreenTitle>
            <Text mt='6px' fontSize='16px' color='brand.greyDark'>{data?.data?.book?.author?.name}</Text>
            <Text.ScreenTitle mt='12px'>Informações</Text.ScreenTitle>
            <Flex mt='6px' w='100%' flexDir={['column','row']} justifyContent={['flex-start','space-between']}>
            <Text fontSize='14px' color='brand.greyDark'>
              <strong>Categoria:</strong> {data?.data?.book?.category?.name}
            </Text>
            <Text fontSize='14px' color='brand.greyDark'>
              <strong>Páginas:</strong> {data?.data?.book?.pages}
            </Text>
            <Text fontSize='14px' color='brand.greyDark'>
              <strong>Ano de lançamento:</strong> {new Date(data?.data?.book?.release_date).getFullYear()}
            </Text>
          </Flex>
          <Text.ScreenTitle mt='16px'>Sinpopse</Text.ScreenTitle>
          <Text maxW='80%' mt='4px' fontSize='12px' lineHeight='24px' color='brand.black'>
               {data?.data?.book?.synopsis}
          </Text>
        </Flex>
        <Flex justifyContent={['center', 'flex-start']} alignItems={['center', 'flex-start']} w={['100%', 'auto']} mt={['24px', '0px']}>
          <Button 
            isLoading={isLoading || addBookFavoriteMutation.isLoading || removeBookFavoriteMutation.isLoading} 
            secondary={data?.data?.favorite} 
            onClick={() => handleVerifyBookFavorites()}
          >
            {data?.data?.favorite
            ? 'Remover dos favoritos'
            : 'Adicionar aos favoritos'}
          </Button>
        </Flex>
      </Flex>
      <CategoryList 
        title='Livros relacionados' 
        categoryId={data?.data?.book?.category?.id} 
      />
    </Flex>
  )
}