import { Link } from "react-router-dom"
import useUser from "../../hooks/useUser"
import { useEffect } from "react";

const Login = () => {

    const {user, login} = useUser();

    useEffect (() => {
        login()
    }, [login]);

  return (
    <>
        <h1>Login</h1>
        <hr />
        <h2>Bienvenido, {user}</h2>
        <Link to={"/"}>Volver al home</Link>
        <br />
    </>
  )
}

export default Login
