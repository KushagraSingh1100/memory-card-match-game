import React from 'react'
import { GoogleLogin } from '@react-oauth/google'
import { useNavigate } from 'react-router-dom'

function LandingPage() {

    const navigate = useNavigate();

  return (
    <div>
        <GoogleLogin onSuccess={(credentialResponse)=>{
            console.log(credentialResponse)
            navigate("/menu")
            }}
            onError={(e)=>console.log("Login Failed", e)}
        />
    </div>
  )
}

export default LandingPage