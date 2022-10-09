import React from "react";

// genetral imports
import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";

// Comps
import { useGetCryptosQuery } from "../../services/cryptoApi";
import { CryptoCurrencies, News } from "../compExport";

const { Title } = Typography;

function Homepage() {
  const { data, isFecting } = useGetCryptosQuery(10);

  // const globalStats = data?.data.stats;
  // console.log(globalStats);

  if (isFecting) return "loading...";

  return (
    <div>
      <Title level={2} className="heading">
        {" "}
        Global Crypto Stats{" "}
      </Title>

      <Row>
        <Col span={12}>
          <Statistic
            title="Total Cryptocurrencies"
            value={data?.data.stats.total}
          />
          <Statistic
            title="Total Exchanges"
            value={millify(data?.data.stats.totalExchanges)}
          />
          <Statistic
            title="Total Market Cap"
            value={millify(data?.data.stats.totalMarketCap)}
          />
          <Statistic
            title="Total 24h Volume"
            value={millify(data?.data.stats.total24hVolume)}
          />
          <Statistic
            title="Total Markets"
            value={millify(data?.data.stats.totalMarkets)}
          />
        </Col>
      </Row>
      <section className="home-heading-container">
        <Title level={2} className="home-title">
          {" "}
          Top 10 Cryptocurrencies in the world{" "}
        </Title>
        <Title level={3} className="show-more">
          {" "}
          <Link to="/cryptocurrencies"> Show More</Link>{" "}
        </Title>
      </section>

      <CryptoCurrencies simplified />

      <section className="home-heading-container">
        <Title level={2} className="home-title">
          {" "}
          Latest Crypto News{" "}
        </Title>
        <Title level={3} className="show-more">
          {" "}
          <Link to="/news"> Show More</Link>{" "}
        </Title>
      </section>

      <News simplified />
    </div>
  );
}

export default Homepage;
