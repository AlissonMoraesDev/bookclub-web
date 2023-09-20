import { Flex, Image } from '@chakra-ui/react'
import { Text, Input, Button } from 'components'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'


export const ForgotPasswordScreen = () => {
  const navigate = useNavigate()
  const { handleSubmit, values, handleChange, errors } = useFormik({
    initialValues: {
      email: ''
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Digite um e-mail válido')
        .required('O e-mail é obrigatório.')
    }),
    onSubmit: (data) => {
      navigate('/reset-password')
      console.log({data})
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
          <Text.ScreenTitle mt="48px">Esqueceu senha</Text.ScreenTitle>
          <Text mt="24px">Digite abaixo seu e-mail que enviaremos um código de recuperação de senha:</Text>
          <Input
            type="email"
            id="email"
            name="email"
            value={values.email}
            mt="24px" 
            placeholder="E-mail"
            onChange={handleChange}
            error={errors.email}
          />
          <Button onClick={handleSubmit} mt="16px">Avançar</Button>
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