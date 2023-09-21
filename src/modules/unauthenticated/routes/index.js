import { LoginScreen, RegisterScreen, ForgotPasswordScreen, ResetPasswordScreen, PageNotFound } from "../screens";

export const unauthRoutes = [
  {
    path: "*",
    element: <PageNotFound />
  },
  {
    path: "/",
    element: <LoginScreen />
  },
  {
    path: "/login",
    element: <LoginScreen />
  },
  {
    path: "/signup",
    element: <RegisterScreen />
  },
  {
    path: "/forgot-password",
    element: <ForgotPasswordScreen />
  },
  {
    path: "/reset-password",
    element: <ResetPasswordScreen />
  },
]