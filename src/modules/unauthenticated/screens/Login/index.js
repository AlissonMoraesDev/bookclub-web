import { Flex, Image, useToast } from '@chakra-ui/react'
import { Text, Input, Link, Button } from 'components'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useMutation } from 'react-query'
import { loginCall } from 'services/api/requests'
import { saveItem } from 'services/storage'
import { setAll } from 'services/store/slices/user'


export const LoginScreen = () => {
  const navitage = useNavigate()
  const dispatch = useDispatch()
  const toast = useToast()

  const mutation = useMutation((newUser) => loginCall(newUser), {
    onError: (error) => {
      toast({
        title: 'Falha ao realizar login.',
        description: error?.response?.data?.error || 'Por favor, tente novamente',
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
    },
    onSuccess: (data) => {
      toast({
        title: 'Login efetuado com sucesso!',
        status: 'success',
        duration: 6000,
        isClosable: true,
      })
      saveItem('@bookclub_TOKEN', data?.data?.token)
      dispatch(setAll({
        token: data?.data?.token,
        user: data?.data?.user
      }))
      navitage('/home')
    }
  })

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
      mutation.mutate(data)
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
            type='email' 
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
          
          <Button isLoading={mutation.isLoading} onClick={handleSubmit} mb='12px' mt='24px'>Login</Button>
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