import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Button } from 'antd';
import { Route, Link, BrowserRouter, Routes, Outlet } from 'react-router-dom';
import Login from './pages/login/Login';
import Main from './pages/main/Main';
import About from './pages/about/About';
import DashBoard from './pages/dashboard/Dashboard';
import Fire from './pages/fire/Fire';
function App() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            {/* <Route path="about" element={<About />} /> */}
            <Route path="/main" element={<Main />}>
                <Route path="about" element={<About />} />
                <Route path="fire" element={<Fire />} />
                <Route path="dashboard" element={<DashBoard />} />
            </Route>
        </Routes>
    );
}

export default App;
