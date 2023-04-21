import { LoginScreen, RegisterScreen } from '../screens'

export const unauthRoutes = [
  {
    path: '/',
    element: <LoginScreen />
  },
  {
    path: '/cadastrar',
    element: <RegisterScreen />
  }
]
