import React from 'react'
import Loginform from './LoginForm'
import { sendUserAuthRequest } from '../api/api'

const Login = () => {
  const getData = (data) =>{
    console.log("Auth",data)
    sendUserAuthRequest(data.inputs, data.signup)
    .then((res)=> console.log(res))
    .catch((error)=> console.log(error))
  }
  return (
    <div>
      <Loginform onSubmit={getData} />
    </div>
  )
}

export default Login