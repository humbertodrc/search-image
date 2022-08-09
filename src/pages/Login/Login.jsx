import React, { useContext, useEffect, useState } from 'react'

/**
 * Google
 */
import { auth } from '../../firebaseConfig'
import {signInWithPopup, GoogleAuthProvider, onAuthStateChanged ,signOut} from 'firebase/auth'
import GoogleButton from 'react-google-button'

/**
 * Styles
 */
import styles from './Login.module.css'

/**
 * Context
 */
import LoginContext from '../../context/LoginContext'

/**
 * React royter dom
 */
import {useNavigate} from 'react-router-dom'
import { async } from '@firebase/util'

const Login = () => {

  // const [user, setUser] = useState('')
  // const [email, setEmail] = useState('')
  // const [photo, setPhoto] = useState('')
  // const [token, setToken] = useState('')
  const navigate = useNavigate()

  const {setUser,setEmail,setPhoto,setToken} = useContext(LoginContext)

 
  const signInWithGoogle = () =>{

    const provider = new GoogleAuthProvider()

    signInWithPopup(auth, provider)
    .then((res)=>{
        setUser(res.user.displayName)
        setEmail(res.user.email)
        setPhoto(res.user.photoURL)
        setToken(res.user.accessToken)

        localStorage.setItem('token', res.user.accessToken)

        navigate('/home')

        console.log(res)
    })
    .catch((err)=>{
        console.log(err);
    })

  }

  const handleClose = () => {
    signOut(auth)
    .then(() => {
      console.log('close sesion');
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  useEffect(()=>{
   onAuthStateChanged(auth, (data)=>{

    if(data){
      const obteniendoUser = async () =>{
       setUser(data.displayName)
       setEmail(data.email)
       setPhoto(data.photoURL)
       setToken(data.accessToken)
      }
      obteniendoUser()
    }else{
      console.log('no hay usuario')
    }

   });
   },[])

  return (
    <div className={styles.login}>
      <div className={styles.form_container}>
        <form className={styles.form}>
          <input type="text" placeholder='User' name='user'/>
          <input type="email" placeholder='Email' name='email'/>
          <input type="password" placeholder='Password' name='password'/>
          <input type="password" placeholder='Repeart your password' name='password2'/>
        </form>
        <GoogleButton onClick={signInWithGoogle}/>
        <button onClick={handleClose}>Close</button>
      </div>
    </div>
  )
}

export default Login