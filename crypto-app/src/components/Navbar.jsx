import React from 'react';
import { Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, BulbOutlined, FundOutlined } from '@ant-design/icons';
import GitHubButton from "react-github-btn";

import cryptoLogo from '../images/cryptoLogo.png';

const Navbar = () => {
    return ( 
        <div className="nav-container">
            <div className="logo-container">
                <Avatar src={cryptoLogo} size="large"/>
                <Typography.Title level={2} className="logo">
                    <Link to="/">CoinSnap</Link>
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
                    <Menu.Item icon={<BulbOutlined/>}>
                        <Link to="/news">News</Link>
                    </Menu.Item>
                </Menu>
                <div className='github-btn'>
                    <GitHubButton href="https://github.com/Adam014/rapidCrypto" data-size="large" data-show-count="true">Star this on Github</GitHubButton>
                </div>
            </div>
        </div>
    )
}

export default Navbar