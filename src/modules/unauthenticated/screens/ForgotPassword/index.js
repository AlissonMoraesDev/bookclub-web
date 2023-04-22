import { Flex, Image, useToast } from '@chakra-ui/react';
import { Text, Input, Button } from 'components'
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useMutation } from 'react-query'
import { forgotPasswordCall } from 'services/api/requests';


export const ForgotPasswordScreen = () => {
  const navitage = useNavigate()
  const toast = useToast()

  const mutation = useMutation((data) => forgotPasswordCall(data), {
    onError: (error) => {
      toast({
        title: 'Falha ao encontrar e-mail.',
        description: error?.response?.data?.error || 'Por favor, tente novamente',
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
    },
    onSuccess: (data) => {
      toast({
        title: 'E-mail enviado com sucesso!',
        status: 'success',
        duration: 6000,
        isClosable: true,
      })
      navitage(`/reiniciar-senha?email=${values.email}`)
    }
  })

  const { handleSubmit, values, handleChange, errors} = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('E-mail inválido')
        .required('E-mail é obrigatório'),
    }),
    onSubmit: (data) => {
      mutation.mutate(data)
    }
  })

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
          <Input
             id='email' 
             name='email' 
             value={values.email} 
             type='email' 
             onChange={handleChange} 
             error={errors.email}  
            mt='24px' 
            placeholder='email@email.com' 
          />
          
          <Button isLoading={mutation.isLoading} mt='24px' onClick={handleSubmit} >Avançar</Button>
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