import { Flex, Image } from '@chakra-ui/react';
import { Text, Input, Button } from 'components'
import { useNavigate } from 'react-router-dom';

export const ForgotPasswordScreen = () => {
  const navitage = useNavigate()
  return (
    <Flex flexDir='row' w='100vw' h='100vh'>
      <Flex 
        alignItems={['center', 'flex-start']} 
        justifyContent='center' 
        padding={['24px', '48px', '80px', '112px']}
        marginRight={['0px','112px']} 
        flexDir='column' 
        w={['100%', '100%', '100%', '50%']} 
        h='100%'
      >
        <Flex flexDir='column' w={['100%', '100%', '100%','416px']}>
          <Image src='/img/logo.svg' alt='BookClub logo' w='160px' h='48px' />
          <Text.ScreenTitle mt='24px'>Recuperação de senha</Text.ScreenTitle>
          <Text mt='16px'>Digite abaixo o seu e-mail que o código de recuperação será enviado:</Text>
          <Input mt='24px' placeholder='email@email.com' />
          
          <Button mt='24px' onClick={() => navitage('/reiniciar-senha')} >Avançar</Button>
        </Flex>
      </Flex>
      <Flex w={['0%', '0%', '0%', '50%']} h='100vh' 
        backgroundImage='url("/img/auth_background.svg")'
        backgroundSize='cover'
        backgroundPosition='center'
        backgroundRepeat='no-repeat'
        borderTopLeftRadius='32px'
        borderBottomLeftRadius='32px'
      />
    </Flex>
  )
}