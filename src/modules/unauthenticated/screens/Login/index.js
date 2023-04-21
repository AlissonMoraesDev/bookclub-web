import { Flex, Image } from '@chakra-ui/react';
import { Text, Input, Link, Button } from 'components'
import { useNavigate } from 'react-router-dom';

export const LoginScreen = () => {
  const navitage = useNavigate()
  return (
    <Flex flexDir='row' w='100vw' h='100vh'>
      <Flex 
        alignItems={['center', 'flex-start']} 
        justifyContent='center' 
        padding={['24px', '48px', '80px', '112px']}
        flexDir='column' 
        w={['100%', '100%', '100%', '50%']} 
        h='100%'
      >
        <Flex flexDir='column' w={['100%', '100%', '100%','416px']}>
          <Image src='/img/logo.svg' alt='BookClub logo' w='160px' h='48px' />
          <Text.ScreenTitle mt='48px'>Login</Text.ScreenTitle>
          <Input mt='24px' placeholder='email@email.com' />
          <Input.Password mt='16px' placeholder='********' />

          <Flex mt='8px' w='100%' alignItems='flex-end' justifyContent='flex-end'>
            <Link>Esqueceu a sua senha?</Link>
          </Flex>
          
          <Button mt='24px'>Login</Button>
          <Link.Action onClick={() => navitage('/cadastrar')} mt='48px' text='Não possui uma conta?' actionText='Cadastre-se aqui' />
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