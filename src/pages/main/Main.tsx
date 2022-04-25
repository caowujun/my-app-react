import { Button, Grid } from 'antd';
import { Route, Link, BrowserRouter, Routes, Navigate, Outlet } from 'react-router-dom';
import Footer from '../footer/Footer';
import Head from '../head/Head';
import LeftMenu from '../leftmenu/LeftMenu';
import style from './styles.module.css';

export default function Main(props: any) {
    return (
        <div className={style.box}>
            <Head />
            <div className={style.content}>
                <div className={style.left}>
                    <LeftMenu />
                </div>
                <div className={style.right}>
                    <Outlet />
                </div>
            </div>
            <Footer />
        </div>
    );
}
