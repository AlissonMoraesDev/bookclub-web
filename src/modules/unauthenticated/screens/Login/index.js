import { Flex, Image } from '@chakra-ui/react'
import { Text, Input, Link, Button } from 'components'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'

export const LoginScreen = () => {
  const navitage = useNavigate()

  const { handleSubmit, values, handleChange, errors} = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('E-mail inválido')
        .required('E-mail é obrigatório'),
      password: Yup.string()
        .min(6, 'A senha deve ter pelo menos 6 caracteres')
        .required('Senha é obrigatório')
    }),
    onSubmit: (data) => {
    }
  })

  console.log({ values, errors })

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
          <Input
            id='email'
            name='email' 
            value={values.email} 
            mt='24px' 
            onChange={handleChange}
            error={errors.email} 
            placeholder='email@email.com'
            />

          <Input.Password 
            id='password'
            name='password'
            value={values.password} 
            mt='16px' 
            onChange={handleChange}  
            error={errors.password}
            placeholder='********'
          />

          <Flex mt='8px' w='100%' alignItems='flex-end' justifyContent='flex-end'>
            <Link onClick={() => navitage('/recuperar-senha')}>Esqueceu a sua senha?</Link>
          </Flex>
          
          <Button onClick={handleSubmit} mb='12px' mt='24px'>Login</Button>
          <Link.Action onClick={() => navitage('/cadastrar')} mt={['8px', '16px']} text='Não possui uma conta?' actionText='Cadastre-se aqui' />
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