import { Flex, Image, useToast } from '@chakra-ui/react'
import { Text, Input, Button } from 'components'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useMutation } from 'react-query'
import { forgotPasswordCall } from 'services/api/requests'


export const ForgotPasswordScreen = () => {
  const navigate = useNavigate()
  const toast = useToast()

  const mutation = useMutation((data) => forgotPasswordCall(data), {
    onError: (error) => {
      toast({
        title: 'Falha ao consultar e-mail cadastrado.',
        description: error?.response.data.error || 'Por favor, tente novamente!',
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
    },
    onSuccess: (data) => {
      toast({
        title: 'E-mail enviado com sucesso.',
        status: 'success',
        duration: 6000,
        isClosable: true,
      })
      navigate(`/reset-password?email=${values.email}`)
    }
  })

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
          <Button isLoading={mutation.isLoading} onClick={handleSubmit} mt="16px">Enviar</Button>
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