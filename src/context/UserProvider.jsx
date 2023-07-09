import {createContext, useState} from 'react'
import PropTypes from 'prop-types';

const userContext = createContext(null)

const UserProvider = ({children}) => {

    const [user, setUser] = useState(null);

    const login = () => {
        setUser("Gus")
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
    <userContext.Provider value={contextValue}>
        {children}
    </userContext.Provider>
  )
}

UserProvider.prototype = {
    children : PropTypes.node.isRequired
}

export default UserProvider
