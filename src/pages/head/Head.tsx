import { Button } from 'antd';
import { Route, Link, BrowserRouter, Routes, useNavigate } from 'react-router-dom';
import style from './styles.module.css';

export default function Head(props: any) {
    const navigate = useNavigate();
    return (
        <div className={style.head}>
            <Button onClick={() => navigate('/main/about')}>about</Button>
            <hr />
        </div>
    );
}
