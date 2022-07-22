import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';

function SignUpPage({onSignUp}) {

    const [signUpInfo, setSignUpInfo] = useState({username:"", password:"", password_confirmation:"", city:""})
    const [errors, setErrors] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        setSignUpInfo({...signUpInfo, [name]: value})
    }

    const handleSignUp = (e) => {
        e.preventDefault();
        signUpUser(signUpInfo)
        setIsLoading(true)
    }

    const navigate = useNavigate()
    const signUpUser = (signUpInfo) => {
    fetch('/signup', {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(signUpInfo)
    })
    .then(resp => {
      setIsLoading(false)
      if (resp.ok) {
        resp.json().then((user) => onSignUp(user))
        navigate('/homepage')
      } else {
        resp.json().then((err) => setErrors(err.errors))  
        navigate('/signup')
      }
    })
    
  }

  return (
    <div>
        <form onSubmit={handleSignUp}>

         <Stack
            className="signup-stack"
            direction="column"
            justifyContent="center"
            alignItems="center" 
            spacing={1}
            style={{ minHeight: '80vh'}}
            >

            <img 
            className='signuppage-image'
            src="https://cdn-images-1.medium.com/max/800/1*iWJOWxVRPpcnlR9iVGz86w.png" />

            <TextField id="outlined-basic" name="username" value={signUpInfo.username} label="Username" variant="outlined" onChange={handleChange}/>

            <TextField id="outlined-basic" name="city" value={signUpInfo.city} label="City" variant="outlined" type="city" onChange={handleChange}/>

            <TextField id="outlined-basic" name="password" value={signUpInfo.password} label="Password" variant="outlined" type="password" onChange={handleChange}/>

            <TextField id="outlined-basic" name="password_confirmation" value={signUpInfo.password_confirmation} label="Password Confirmation" variant="outlined" type="password" onChange={handleChange}/>

            <Button 
            type="submit"
            variant="contained"
            sx={{color: '#ffffff', backgroundColor: '#fb526b', paddingBottom: '2px', paddingTop: '2px', marginTop: '5px'}}>Let's Go!</Button>

            <p><small>Minimum: 8 Letters</small></p>
         </Stack>
         <Stack
            direction="column"
            justifyContent="center"
            alignItems="center" 
            spacing={2}
            style={{ minHeight: '50vh'}}>
            {errors.map((err) => {
            return <Alert severity="error">{`${err}`}</Alert>
            })}
        </Stack>
        </form>
    </div>
  )
}

export default SignUpPage