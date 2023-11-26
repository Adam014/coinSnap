import React, { useState } from 'react';
import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
import moment from 'moment';

import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';
import { useGetCryptoQuery } from '../services/cryptoApi';

const { Text, Title } = Typography;
const { Option } = Select;

const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News'

const News = ( { simplified } ) => {
<<<<<<< HEAD
  const { data: cryptoNews } = useGetCryptoNewsQuery({ count: simplified ? 6 : 12 });
=======
  const { data } = useGetCryptoQuery(100);
  const [newsCategory, setNewsCategory] = useState('Cryptocurrency');
  const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory, count: simplified ? 6 : 12 });
>>>>>>> 60ca724ad9be386b07972969e26df6d3eec87241

  console.log(cryptoNews);

  if(!cryptoNews) return 'Loading...)';

  return (
    <Row gutter={[24, 24]}> 
      {/* {!simplified && (
          <Col>
            <Select showSearch className='select-news' placeholder="Select a Crypto" optionFilterProp='children' onChange={(value) => setNewsCategory(value)} filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}> 
              <Option value="Cryptocurrency">Cryptocurrency</Option>
              {data?.data?.coins.map((coin) => <Option value={coin.name}>{coin.name}</Option>)}
            </Select>
          </Col>
      )} */}
      {cryptoNews.map((news, i) => (
        <Col xs={24} sm={12} lg={8} key={i}>
          <Card hoverable className='news-card'>
              <a href={news.url} target="_blank" rel="noreferrer">
                <div className='news-image-container'>
                    <Title className='news-title' level={4}>{news.title}</Title>
                    <img src={news?.image?.thumbnail?.contentUrl || demoImage} alt="crypto-news-thumbnail"/>
                </div>
                <p>
                    {news.description > 100 
                      ? `${news.description.substring(0, 100)} ...`
                      : news.description
                    } 
                </p>
                {/* <div className='provider-container'>
                    <div>
                      <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImage} alt="news"/>
                      <Text className='provider-name'>{news.provider[0]?.name}</Text>
                    </div>
                    <Text>{moment(news.datePublished).startOf('ss').fromNow()}</Text>
                </div> */}
              </a>
          </Card>
        </Col>
      ))}
    </Row>
  )
}

export default News