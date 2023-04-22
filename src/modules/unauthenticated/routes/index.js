import { LoginScreen, RegisterScreen, ForgotPasswordScreen, ResetPasswordScreen } from '../screens'

export const unauthRoutes = [
  {
    path: '/',
    element: <LoginScreen />
  },
  {
    path: '/cadastrar',
    element: <RegisterScreen />
  },
  {
    path: '/recuperar-senha',
    element: <ForgotPasswordScreen />
  },
  {
    path: '/reiniciar-senha',
    element: <ResetPasswordScreen />
  }
]
