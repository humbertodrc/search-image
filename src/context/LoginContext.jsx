import { createContext, useState } from "react"


const LoginContext= createContext()

const LoginProvider = ({ children }) => {

  const [user, setUser] = useState('')
  const [email, setEmail] = useState('')
  const [photo, setPhoto] = useState('')
  const [token, setToken] = useState('')

  return (
    <LoginContext.Provider
      value={{user,setUser,email,setEmail, photo, setPhoto, token, setToken}}
    >
      {children}
    </LoginContext.Provider>
  )
}

export { LoginProvider }

export default LoginContext