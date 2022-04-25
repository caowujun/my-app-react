import { Button } from 'antd';
import { Route, Link, BrowserRouter, Routes, useNavigate } from 'react-router-dom';

export default function Login(props: any) {
    const navigate = useNavigate();
    return (
        <div>
            <Button onClick={() => navigate('/main')}>login!</Button>
        </div>
    );
}
