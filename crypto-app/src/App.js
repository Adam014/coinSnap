import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import {Layout, Typography, Space } from 'antd';
import './App.sass';

import { Navbar, Exchanges, Homepage, CryptoDetails, Cryptocurrencies, News } from './components';

const App = () => {
  return (
    <div className="App">
        <div className='navbar'>
            <Navbar />
        </div>
        <div className='main'>
            <Layout>
                <div className='routes'>
                  <Routes>
                    <Route exact path="/" element={<Homepage />} />
                    <Route exact path="/exchanges" element={<Exchanges />} />
                    <Route exact path="/cryptocurrencies" element={<Cryptocurrencies />}/>
                    <Route exact path="/crypto/:coinId" element={<CryptoDetails />} />
                    <Route exact path="/news" element={<News />} />
                  </Routes>
                </div>
            </Layout>
        </div>
        <div className='footer' level={5} >
          Copyright © 2021
          <Typography.Title>
              <Link to="/" className='footer-link'>
                  CryptoApp
              </Link>
              <br/>
              All rights reserved.
          </Typography.Title>
          <Space>
              <Link to="/">Home</Link>
              <Link to="/exchanges">Exchanges</Link>
              <Link to="/news">News</Link>
          </Space>
        </div>
    </div>
  )
}

export default App