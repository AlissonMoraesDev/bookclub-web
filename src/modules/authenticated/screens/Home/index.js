import { Flex } from '@chakra-ui/react'
import { NavBar, BookList, CategoryList } from 'components'

export const HomeScreen = () => {

  return (
    <Flex flexDir='column'>
      <NavBar />
      <Flex mt={['24px','48px']} w='100%' h={['72px','200px']} paddingX={['16px', '48px', '80px', '112px']}  >
        <Flex 
          w='100%'
          h='100%'
          borderRadius={['8px','24px']}
          backgroundImage='url("/img/banner.svg")'
          backgroundSize='cover'
          backgroundPosition={['start','center']}
          backgroundRepeat='no-repeat'
        />
      </Flex>
        <BookList />
        <CategoryList />
    </Flex>
  )
}