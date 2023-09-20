import { Flex, Image } from '@chakra-ui/react'
import { Text, Input, Link, Button } from 'components'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'

export const RegisterScreen = () => {
  const navigate = useNavigate()
  const { handleSubmit, values, handleChange, errors } = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().min(3, 'O nome deve conter pelo menos 3 caracteres').required('O nome é obrigatório.'),
      email: Yup.string()
        .email('Digite um e-mail válido')
        .required('O e-mail é obrigatório.'),
      password: Yup.string()
        .min(6, 'A senha deve conter pelo menos 6 caracteres')
        .required('Senha é obrigatória.'),
        confirmPassword: Yup.string()
        .min(6, 'A confirmação de senha deve conter pelo menos 6 caracteres')
        .required('A confirmação senha é obrigatória.')
        .oneOf([Yup.ref('password'), null], 'As senhas devem ser iguais')
    }),
    onSubmit: (data) => {
      console.log({data})
      navigate('/')
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
        <Flex flexDirection="column"w={["100%", "100%", "100%","416px"]}>
          <Image src="/img/logo.svg" alt="BookClub Logo" w="160px" h="48px" />
          <Text.ScreenTitle mt="48px">Cadastro</Text.ScreenTitle>
          <Input id="name" name="name" value={values.name} error={errors.name} onChange={handleChange} mt="16px" placeholder="Nome completo" />
          <Input id="email" name="email" value={values.email} error={errors.email} onChange={handleChange} mt="16px" placeholder="E-mail" />
          <Input.Password id="password" name="password" value={values.password} error={errors.password} onChange={handleChange} mt="16px" placeholder="Senha" />
          <Input.Password id="confirmPassword" name="confirmPassword" value={values.confirmPassword} error={errors.confirmPassword} onChange={handleChange} mt="16px" placeholder="Confirmar senha" />
          <Button onClick={handleSubmit} mt="16px" mb={["16px", "0px"]}>Cadastrar</Button>
          <Link.Action onClick={() => navigate('/')} mt={["8px","32px"]} text="Já possui uma conta?" actionText="Faça login aqui" />
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