import { Flex, Image } from '@chakra-ui/react'
import { Text, Input, Button, Link } from 'components'
// import { useNavigate } from 'react-router-dom'


export const ResetPasswordScreen = () => {
  // const navigate = useNavigate()
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
          <Text.ScreenTitle mt="48px">Nova senha</Text.ScreenTitle>
          <Text mt="24px">Digite o código enviado e uma nova senha:</Text>
          <Input mt="24px" placeholder="Ex: 0000" />
          <Input.Password mt="24px" placeholder="Nova senha" />
          <Input.Password mt="24px" placeholder="Confirmar nova senha" />
          <Button mt="16px" mb={["16px", "0px"]}>Salvar</Button>
          <Link.Action mt={["8px","32px"]} text="Não recebeu o código?" actionText="Clique aqui para reenviar" />
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