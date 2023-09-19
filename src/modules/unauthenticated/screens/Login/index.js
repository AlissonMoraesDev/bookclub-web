import { Flex, Image } from '@chakra-ui/react'
import { Text, Input, Link, Button } from 'components'

export const LoginScreen = () => {
  return (
    <Flex flexDir="row" w="100vw" h="100vh">
      <Flex 
        alignItems={["center","flex-start", "space-between"]}
        justifyContent="center" 
        paddingLeft={["0px", "0px", "0px","0px","112px"]} 
        padding={["24px","32px","48px","64px","0px"]}
        flexDir="column" 
        w={["100%","100%","100%","50%","40%"]}
        h="100%">
        <Flex flexDirection="column" w={["100%", "100%", "100%","416px"]}>
          <Image src="/img/logo.svg" alt="BookClub Logo" w="160px" h="48px" />
          <Text.ScreenTitle mt="48px">Login</Text.ScreenTitle>
          <Input
            mt="24px" 
            placeholder="email@exemplo.com"
          />
          <Input.Password
            mt="16px" 
            placeholder="********"
          />
          <Flex mt="8px" alignItems="center" justifyContent="flex-end">
            <Link>Esqueceu sua senha?</Link>
          </Flex>
          <Button mt="16px">Login</Button>
          <Link.Action mt="32px" text="Não possui uma conta?" actionText="Cadastra-se aqui" />
        </Flex>
      </Flex>
      <Flex w={["0%","0%", "40%","50%","60%"]}h="100vh" 
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