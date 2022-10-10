import React, { useState } from "react";

// General imports
import { Select, Typography, Row, Col, Avatar, Card } from "antd";
import moment from "moment";

// comps
import { useGetCryptoNewsQuery } from "../../services/cryptoNewsApi";
import { useGetCryptosQuery } from "../../services/cryptoApi";

// Images
import NoImage from "../../images/newsNoImage.jpeg";

// variables
const { Text, Title } = Typography;
const { Option } = Select;

function News({ simplified }) {
  const [newsCategory, setNewsCategory] = useState("cryptocurrencies");

  const { data } = useGetCryptoNewsQuery({
    newsCategory,
    count: simplified ? 10 : 100,
  });

  const { data: cryptosList } = useGetCryptosQuery(100);

  console.log(data);

  if (!data?.value) return "loadding....";

  return (
    <div>
      <Row gutter={[24, 24]}>
        {!simplified && (
          <Col span={24}>
            <Select
              showSearch
              className="select-news"
              placeholder="select a crypto"
              optionFilterProp="children"
              onChange={(v) => setNewsCategory(v)}
              filterOption={(input, Option) =>
                Option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              <Option value="Cryptocurrencies"> Cryptocurrencies </Option>
              {cryptosList?.data.coins.map((coin) => (
                <Option value={coin.name}> {coin.name} </Option>
              ))}
            </Select>
          </Col>
        )}

        {data?.value.map((news, i) => (
          <Col key={i} xs={24} sm={12} lg={8}>
            <Card hoverable className="news-card">
              <a href={news.url} target="_blank" rel="noreferrer">
                <article className="news-image-container">
                  <Title className="news-title" level={4}>
                    {news.name}
                  </Title>
                  <img
                    style={{ maxWidth: "200px", maxHeight: "100px" }}
                    src={news?.image?.thumbnail?.contentUrl}
                    alt=""
                  />
                </article>

                <p>
                  {" "}
                  {news.description > 50
                    ? `${news.description.substring(0, 50)}...`
                    : news.description}{" "}
                </p>

                <footer className="provider-container">
                  <aside>
                    <Avatar
                      src={
                        news.provider[0]?.image?.thumbnail?.contentUrl ||
                        NoImage
                      }
                    />
                    <Text className="provider-name">
                      {" "}
                      {news.provider[0]?.name}{" "}
                    </Text>
                  </aside>

                  <Text>
                    {" "}
                    {moment(news.datePublished).startOf("ss").fromNow()}{" "}
                  </Text>
                </footer>
              </a>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default News;
