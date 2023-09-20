import { Flex, Image } from '@chakra-ui/react'
import { Text, Input, Button, Link } from 'components'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'

export const ResetPasswordScreen = () => {
  const navigate = useNavigate()
  const { handleSubmit, values, handleChange, errors } = useFormik({
    initialValues: {
      token: '',
      password: '',
      confirmPassword: ''
    },
    validationSchema: Yup.object({
      token: Yup.string().min(4, 'O token deve possuir 4 caracteres').required('O token é obrigatório.'),
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
      navigate('/login')
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
          <Text.ScreenTitle mt="48px">Nova senha</Text.ScreenTitle>
          <Text mt="24px">Digite o código enviado e uma nova senha:</Text>
          <Input id="token" name="token" value={values.token} error={errors.token} onChange={handleChange} mt="24px" placeholder="Ex: 0000" maxLength={4}/>
          <Input.Password id="password" name="password" value={values.password} error={errors.password} onChange={handleChange} mt="24px" placeholder="Nova senha" />
          <Input.Password id="confirmPassword" name="confirmPassword" value={values.confirmPassword} error={errors.confirmPassword} onChange={handleChange} mt="24px" placeholder="Confirmar nova senha" />
          <Button onClick={handleSubmit} mt="16px" mb={["16px", "0px"]}>Salvar</Button>
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