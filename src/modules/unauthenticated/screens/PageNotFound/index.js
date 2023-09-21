import { Flex, Image } from '@chakra-ui/react'
import { Text, Button } from 'components'
import { useNavigate } from 'react-router-dom'

export const PageNotFound = () => {

  const navigate = useNavigate()
  return (
    <Flex flexDir="row" w="100vw" h="100vh">
      <Flex 
        alignItems={["center","flex-start", "space-between"]}
        justifyContent="center" 
        padding={["24px","32px","48px","64px","80px", "112px"]}
        flexDir="column" 
        w={["100%","100%","100%","70%","50%"]}
        h="100%">
        <Flex flexDirection="column" w={["100%", "100%", "100%","416px"]}>
          <Image src="/img/logo.svg" alt="BookClub Logo" w="160px" h="48px" />
          <Flex flexDir="column" alignItems="center" justifyContent="center">
            <Text.ScreenTitle mt="48px" fontSize="48px" >Ops!</Text.ScreenTitle>
            <Text mt="8px">A página não foi encontrada</Text>
          </Flex>
          <Button onClick={() => navigate('/')}mt="16px" mb={["16px", "0px"]}>Ir para Home</Button>
        </Flex>
      </Flex>
      <Flex w={["0%","0%", "70%","80%","70%"]} h="100vh" 
        backgroundImage="url('/img/auth_background.svg')"
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        borderTopLeftRadius="32px"
        borderBottomLeftRadius="32px"
      />
    </Flex>
  )
}