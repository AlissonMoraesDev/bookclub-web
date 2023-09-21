import { Flex, Image, useToast } from '@chakra-ui/react'
import { Text, Input, Link, Button } from 'components'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useMutation } from 'react-query'
import { loginCall } from 'services/api/requests'
import { saveItem } from 'services/storage'
import { setAll } from 'services/store/slices/user'


export const LoginScreen = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const toast = useToast()

  const mutation = useMutation((newUser) => loginCall(newUser), {
    onError: (error) => {
      toast({
        title: 'Falha ao realizar login.',
        description: error?.response.data.error || 'Por favor, tente novamente!',
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
    },
    onSuccess: (data) => {
      toast({
        title: 'Login feito com sucesso.',
        status: 'success',
        duration: 6000,
        isClosable: true,
      })
      saveItem('@bookclub_token', data?.data.token)
      dispatch(
        setAll({
          token: data?.data?.token,
          user: data?.data?.user
        })
      )
      navigate('/home')
    }
  })

  const { handleSubmit, values, handleChange, errors } = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Digite um e-mail válido')
        .required('O e-mail é obrigatório.'),
      password: Yup.string()
        .min(6, 'A senha deve conter pelo menos 6 caracteres')
        .required('Senha é obrigatória.')
    }),
    onSubmit: (data) => {
      mutation.mutate(data)
    }
  })

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
          <Text.ScreenTitle mt="48px">Login</Text.ScreenTitle>
          <Input
            type="email"
            id="email"
            name="email"
            value={values.email}
            mt="24px" 
            placeholder="email@exemplo.com"
            onChange={handleChange}
            error={errors.email}
          />
          <Input.Password
            id="password"
            name="password"
            value={values.password}
            mt="16px" 
            placeholder="********"
            onChange={handleChange}
            error={errors.password}
          />
          <Flex mt="8px" alignItems="center" justifyContent="flex-end">
            <Link onClick={() => navigate('/forgot-password')}>Esqueceu sua senha?</Link>
          </Flex>
          <Button isLoading={mutation.isLoading} onClick={handleSubmit}mt="16px" mb={["16px", "0px"]}>Login</Button>
          <Link.Action onClick={() => navigate('/signup')} mt={["8px","32px"]} text="Não possui uma conta?" actionText="Cadastra-se aqui" />
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