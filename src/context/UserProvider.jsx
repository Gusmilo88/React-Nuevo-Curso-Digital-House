import {createContext, useState} from 'react'
import PropTypes from 'prop-types';
import { loginAuthService } from '../services/auth.service';

const UserContext = createContext(null)

const UserProvider = ({children}) => {

    const [user, setUser] = useState(null);

    const login = async (info) => {
        try {
            const response = await loginAuthService(info)
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }

    const logout = () => {
        setUser(null)
    }

    const contextValue = {
        user,
        login,
        logout
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
