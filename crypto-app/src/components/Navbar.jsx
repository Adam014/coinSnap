import React from 'react';
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';

import cryptoLogo from '../images/cryptoLogo.png';

const Navbar = () => {
    return ( 
        <div className="nav-container">
            <div className="logo-container">
                <Avatar src={cryptoLogo} size="large"/>
                <Typography.Title level={2} className="logo">
                    <Link to="/">CryptoApp</Link>
                </Typography.Title>
            </div>
            <div className='links-container'>
                <Menu theme="dark">
                    <Menu.Item icon={<HomeOutlined/>}>
                        <Link to="/">Home</Link>
                    </Menu.Item>
                    <Menu.Item icon={<FundOutlined/>}>
                        <Link to="/cryptocurrencies">Cryptocurrencies</Link>
                    </Menu.Item>
                    <Menu.Item icon={<MoneyCollectOutlined/>}>
                        <Link to="/exchanges">Exchanges</Link>
                    </Menu.Item>
                    <Menu.Item icon={<BulbOutlined/>}>
                        <Link to="/news">News</Link>
                    </Menu.Item>
                </Menu>
            </div>
        </div>
    )
}

export default Navbar