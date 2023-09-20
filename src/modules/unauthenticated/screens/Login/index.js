import { Flex, Image } from '@chakra-ui/react'
import { Text, Input, Link, Button } from 'components'
import { useNavigate } from 'react-router-dom'


export const LoginScreen = () => {
  const navigate = useNavigate()
  return (
    <Flex flexDir="row" w="100vw" h="100vh">
      <Flex 
        alignItems={["center","flex-start", "space-between"]}
        justifyContent="center" 
        padding={["24px","32px","48px","64px","80px", "112px"]}
        flexDir="column" 
        w={["100%","100%","100%","80%","50%"]}
        h="100%">
        <Flex flexDirection="column" w={["100%", "100%", "100%","100%","416px"]}>
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
          <Link.Action onClick={() => navigate('/signup')} mt="32px" text="Não possui uma conta?" actionText="Cadastra-se aqui" />
        </Flex>
      </Flex>
      <Flex w={["0%","0%", "30%","60%","60%"]}h="100vh" 
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