import { useContext, createContext, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [pwd, setPwd] = useState(null)
  const login = (user, pwd) => {
    setUser(user);
    setPwd(pwd);
  }

  return (
    <AuthContext.Provider value={{ user, pwd }}>
      { children }
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext);
}

export default AuthContext;