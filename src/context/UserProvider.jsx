import {createContext, useState} from 'react'
import PropTypes from 'prop-types';
import { loginAuthService, profileUserService } from '../services/auth.service';
import jwtDecode from 'jwt-decode';

const UserContext = createContext(null)

const UserProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [alert, setAlert] = useState(null);
    const [userProfile, setUserProfile] = useState(null);

    const handleAlert = (error) => {
        setAlert(error.message)
        setTimeout(() => {
            setAlert(null)
        }, 3000);
    }

    const login = async (info) => {
        try {
            const {token} = await loginAuthService(info);
            sessionStorage.setItem("DrinksToken", token)

            const decodedToken = token ? jwtDecode(token) : null;

            setUser(decodedToken.user)
        } catch (error) {
            // console.log(error);
            handleAlert(error)
        }
    }

    const getProfile = async () => {
        try {
            const token = sessionStorage.getItem("DrinksToken")

            if(!token){
                return null
            }

            const response = await profileUserService(token);

            console.log(response);

            setUserProfile(response.user)
        } catch (error) {
            handleAlert(error)
        }
    }

    const logout = () => {
        setUser(null)
    }

    const contextValue = {
        user,
        userProfile,
        login,
        logout,
        getProfile,
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
