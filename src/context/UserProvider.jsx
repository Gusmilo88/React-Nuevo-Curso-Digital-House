import {createContext, useState} from 'react'
import PropTypes from 'prop-types';
import { loginAuthService } from '../services/auth.service';
import jwtDecode from 'jwt-decode';

const UserContext = createContext(null)

const UserProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [alert, setAlert] = useState(null);

    const handleAlert = (error) => {
        setAlert(error.message)
        setTimeout(() => {
            setAlert(null)
        }, 3000);
    }

    const login = async (info) => {
        try {
            const {token} = await loginAuthService(info);

            const decodedToken = token ? jwtDecode(token) : null;

            setUser(decodedToken.user)
        } catch (error) {
            // console.log(error);
            handleAlert(error)
        }
    }

    const logout = () => {
        setUser(null)
    }

    const contextValue = {
        user,
        login,
        logout,
        alert
    }

  return (
    <UserContext.Provider value={contextValue}>
        {children}
    </UserContext.Provider>
  )
}

UserProvider.propTypes = {
    children : PropTypes.node.isRequired
}

export { UserContext};
export default UserProvider;
