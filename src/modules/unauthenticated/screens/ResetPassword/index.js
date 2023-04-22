import { Flex, Image, useToast } from '@chakra-ui/react';
import { Text, Input, Button, Link } from 'components'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useMutation } from 'react-query'
import { resetPasswordCall } from 'services/api/requests'

export const ResetPasswordScreen = () => {
  const navitage = useNavigate()
  const [searchParams] = useSearchParams()
  const toast = useToast()

  const mutation = useMutation((data) => resetPasswordCall(data), {
    onError: (error) => {
      toast({
        title: 'Falha ao atualizar senha.',
        description: error?.response?.data?.error || 'Por favor, tente novamente',
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
    },
    onSuccess: () => {
      toast({
        title: 'Senha atualizada com sucesso!',
        status: 'success',
        duration: 6000,
        isClosable: true,
      })
      navitage('/')
    }
  })

  const { handleSubmit, values, handleChange, errors} = useFormik({
    initialValues: {
      token: '',
      password: '',
      confirmPassword: ''
    },
    validationSchema: Yup.object({
      token: Yup.string().length(6, 'Token deve conter 6 caracteres.').required('Token é obrigatório.'),
      password: Yup.string()
        .min(6, 'A senha deve ter pelo menos 6 caracteres.')
        .required('Senha é obrigatório.'),
        confirmPassword: Yup.string()
        .min(6, 'A confirmação de senha deve ter pelo menos 6 caracteres.')
        .required('Confirmar senha é obrigatório.')
        .oneOf([Yup.ref('password'), null], 'As devem ser iguais.')
    }),
    onSubmit: (data) => {
      mutation.mutate({
        email: searchParams.get('email'),
        token: data.token,
        password: data.password
      })
    }
  })

  return (
    <Flex flexDir='row' w='100vw' h='100vh'>
      <Flex 
        alignItems={['center', 'flex-start']} 
        justifyContent='center' 
        padding={['24px', '48px', '80px', '48px']}
        flexDir='column'
        marginRight={['0px','112px']} 
        w={['100%', '100%', '100%', '40%']} 
        h='100%'
      >
        <Flex flexDir='column' w={['100%', '100%', '100%','416px']}>
          <Image src='/img/logo.svg' alt='BookClub logo' w='160px' h='48px' />
          <Text.ScreenTitle mt='24px'>Nova senha</Text.ScreenTitle>
          <Text mt='16px'>Digite o código enviado e uma nova senha nos campos abaixo:</Text>
          
          <Input
            id='token'
            name='token'
            value={values.token}
            onChange={handleChange}   
            error={errors.token}
            maxLength={6}  
            mt='24px' 
            placeholder='Ex: 000000' 
          />

          <Input.Password
            id='password'
            name='password'
            value={values.password}
            onChange={handleChange}   
            error={errors.password} 
            mt='16px' 
            placeholder='Nova senha' 
          />

          <Input.Password
            id='confirmPassword'
            name='confirmPassword'
            value={values.confirmPassword}
            onChange={handleChange}   
            error={errors.confirmPassword}  
            mt='16px' 
            placeholder='Confirmar nova senha' 
          />
          
          <Button isLoading={mutation.isLoading} mb='12px' mt='24px' onClick={handleSubmit}>Salvar</Button>
          <Link.Action mt='8px' text='Não recebeu o código?' actionText='Clique aqui para reenviar' />
        </Flex>
      </Flex>
      <Flex w={['0%', '0%', '0%', '60%']} h='100vh' 
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