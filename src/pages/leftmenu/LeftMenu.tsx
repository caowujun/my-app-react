import { Button } from 'antd';
import { Route, Link, BrowserRouter, Routes, useNavigate } from 'react-router-dom';

export default function LeftMenu(props: any) {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/main/dashboard">dashboard</Link>
                </li>
                <li>
                    <Link to="/main/fire">fire</Link>
                </li>
            </ul>
            <hr />
        </div>
    );
}
