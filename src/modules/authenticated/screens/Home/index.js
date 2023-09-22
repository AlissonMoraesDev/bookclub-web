import { Flex } from '@chakra-ui/react'
import { BookList, CategoryList, Navbar } from 'components/organisms'

export const HomeScreen = () => {
  
  return (
  <Flex flexDir="column">
    <Navbar />
    <Flex w="100%" h={["72px","200px"]} paddingX={["24px","32px","48px","64px","80px", "112px"]} mt={["24px","48px"]}>
      <Flex 
        borderRadius={["6px","24px"]}
        backgroundImage="url('/img/banner.svg')"
        backgroundSize="cover"
        w="100%"
        h="100%"
        backgroundPosition={["start","start","start","center"]}
        backgroundRepeat="no-repeat"
      />
    </Flex>
    <BookList />
    <CategoryList />
  </Flex>
  )
}