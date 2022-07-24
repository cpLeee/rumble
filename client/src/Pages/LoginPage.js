import React from 'react'
import { useState } from 'react'
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import Alert from '@mui/material/Alert';

function LoginPage({ onLogin }) {

    const [loginInfo, setLoginInfo] = useState({ username: "", password: "" })
    const [errors, setErrors] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        setLoginInfo({ ...loginInfo, [name]: value })
    }

    const handleLogin = (e) => {
        e.preventDefault();
        loginUser(loginInfo)
        setIsLoading(true)
    }

    const navigate = useNavigate()
    const loginUser = (loginInfo) => {
        fetch('/login', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(loginInfo)
        })
            .then(resp => {
                setIsLoading(false)
                if (resp.ok) {
                    resp.json().then((user) => onLogin(user))
                    navigate('/swipe')
                } else {
                    resp.json().then((err) => {
                        setErrors(err.errors)
                    })
                    // navigate('/')
                }
            })
    }

    return (
        <div>
            <form onSubmit={handleLogin}>
                <Stack
                    className="login-stack"
                    direction="column"
                    justifyContent="center"
                    alignItems="center" 
                    spacing={1}
                    style={{ minHeight: '80vh'}}
                    >
                    <img
                        className="login-image"
                        src="https://cdn-images-1.medium.com/max/800/1*xNkSsTrt8f_6OH7LB06zMg.png" />

                     <TextField id="outlined-basic" name="username" value={loginInfo.username} label="Username" variant="outlined" onChange={handleChange}/>

                    <TextField id="outlined-basic" name="password" value={loginInfo.password} label="Password" variant="outlined" type="password" onChange={handleChange}/>

                    <Button 
                    type="submit"
                    variant="contained"
                    sx={{color: '#ffffff', backgroundColor: '#fb526b', paddingBottom: '2px', paddingTop: '2px', marginTop: '5px'}}>Log in!</Button> 
                </Stack>

                <Stack
                direction="column"
                justifyContent="center"
                alignItems="center" 
                spacing={1} >
                {errors.map((err) => {
                return <Alert severity="error">{`${err}`}</Alert>
                })}
                </Stack>

            </form>
        </div>
    )
}

export default LoginPage