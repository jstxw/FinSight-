import React from 'react'
import AuthLayout from '../../components/AuthLayout'

const Login = () => {
  const [email, setEmail] = userState("");
  const [password, setPassword] = userState("");
  const [error, setError] = userState("");
  return (
    <AuthLayout>
      <div className="lg: w-[70%] h-3/4 mid:h-full flex flex-col justify-center">
        <h3 className="text-xl font-semibold text-black">Welcome Back!</h3>
        <p className="text-xs text-slate-700 mt-1.5 mb-6 ">
        Please enter your details to log in!</p>
      </div>


    </AuthLayout>
  )
}

export default Login