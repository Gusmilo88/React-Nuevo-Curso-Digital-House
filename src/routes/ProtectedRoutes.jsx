import { Navigate, Outlet } from "react-router-dom";
import useUser from "../hooks/useUser"

const ProtectedRoutes = () => {
    const {user} = useUser();

  return user ? <Outlet/> : <Navigate to={"/login"} replace/>
}

export default ProtectedRoutes
