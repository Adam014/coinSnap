import React, {useState} from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Input } from 'antd';

import { useGetCryptoQuery } from '../services/cryptoApi';

const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const { data: cryptosList, isFetching} = useGetCryptoQuery(count);
  const [cryptos, setCryptos] = useState(cryptosList?.data?.coins);

  console.log(cryptos)

  if(isFetching) return 'Loading...';

  return (
    <>
        <Row gutter={[34, 34]} className='crypto-card-container'>
          {cryptos?.map((currency) => (
            <Col xs={24} sm={12} lg={6} className='crypto-card' key={currency.id}> 
              <Link to={`/crypto/${currency.id}`}>
                  <Card title={`${currency.rank}. ${currency.name}`}
                        extra={<img className='crypto-image' src={currency.iconUrl} alt={`${currency.name}`} />}
                        hoverable
                    >
                      <p>Price: {millify(currency.price)} $</p>
                      <p>Market Cap: {millify(currency.marketCap)}</p>
                      <p>Daily change: {millify(currency.change)}%</p>
                  </Card>
              </Link>
            </Col>
          ))}
        </Row>
    </>
  )
}

export default Cryptocurrencies