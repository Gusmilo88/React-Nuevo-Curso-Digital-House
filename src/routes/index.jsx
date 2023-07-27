import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import Login from '../pages/login'

const AppRoutes = () => {
    return (
    <div> 
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
    </div>
    )
}

export default AppRoutes
