import React from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import Login from '../pages/login'

const AppRoutes = () => {
    return (
    <div> 
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    </div>
    )
}

export default AppRoutes
