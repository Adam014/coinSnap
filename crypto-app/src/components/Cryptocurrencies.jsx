import React, {useState, useEffect} from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Input } from 'antd';

import { useGetCryptoQuery } from '../services/cryptoApi';

const Cryptocurrencies = ({ simplified }) => {
  
  // jakmile je homepage, 10 cryptos, jinak 100
  const count = simplified ? 10 : 100;

  const { data: cryptosList, isFetching} = useGetCryptoQuery(count);
  const [cryptos, setCryptos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('')

  // filter na searchovani cryptocurrencies
  useEffect( () => {
      const filteredData = cryptosList?.data?.coins.filter((coin) => coin.name.toLowerCase().includes(searchTerm.toLowerCase()))

      setCryptos(filteredData)

  }, [cryptosList, searchTerm])

  if(isFetching) return 'Loading...';

  return (
    <>
        {/* zobrazeni pouze na Cryptocurrencies */}
        {!simplified && <div className='search-crypto'>
            <Input placeholder='Search cryptocurrency...' onChange={(e) => setSearchTerm(e.target.value)}/>
        </div>}

        {/* pridat sort by */}


        {/* gutter - neco jako padding/gap */}
        <Row gutter={[34, 34]} className='crypto-card-container'>
          {cryptos?.map((currency) => (
            // xs, sm, lg - urcovani podle hodnot kolik cards na radek
            <Col xs={24} sm={12} lg={6} className='crypto-card' key={currency.uuid}> 
              <Link to={`/crypto/${currency.uuid}`} key={currency.uuid}>
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