import { Flex, Image } from '@chakra-ui/react'
import { Text, Input, Link, Button } from 'components'
import { useNavigate } from 'react-router-dom'

export const RegisterScreen = () => {
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
          <Text.ScreenTitle mt="48px">Cadastro</Text.ScreenTitle>
          <Input mt="16px" placeholder="Nome completo" />
          <Input mt="16px" placeholder="E-mail" />
          <Input.Password mt="16px" placeholder="Senha" />
          <Input.Password mt="16px" placeholder="Confirmar senha" />
          <Button mt="16px">Cadastrar</Button>
          <Link.Action onClick={() => navigate('/')} mt="32px" text="Já possui uma conta?" actionText="Faça login aqui" />
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