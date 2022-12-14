import React, { useState, useEffect } from "react";

// genetral imports
import millify from "millify";
import { Row, Col, Card, Input } from "antd";
import { Link } from "react-router-dom";

// Comps
import { useGetCryptosQuery } from "../../services/cryptoApi";

function CryptoCurrencies({ simplified }) {
  // set counts to display just 10 cards when simplified is true, which means, if we're on homepage, display just 10, display all cards on cryptocurrencies page
  const count = simplified ? 10 : 100;

  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);

  // states
  const [cryptos, setCryptos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (!isFetching) {
      setCryptos(cryptosList?.data.coins);
    }

    const filterData = cryptosList?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setCryptos(filterData);
  }, [cryptosList?.data.coins, isFetching, searchTerm]);

  console.log(cryptos);

  // if (isFetching) return "loading....";

  return (
    <div>
      {!simplified && (
        <section className="search-crypto">
          <Input
            placeholder=" Search for cryptocurrencies "
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </section>
      )}
      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos?.map((crypt) => (
          <Col xs={24} sm={12} lg={6} className="crypto-card" key={crypt.uuid}>
            <Link to={`/crypto/${crypt.uuid}`}>
              <Card
                title={`${crypt.rank}. ${crypt.name}`}
                extra={
                  <img
                    className="crypto-image"
                    src={crypt.iconUrl}
                    alt="crypto icon"
                  />
                }
                hoverable
              >
                <p> Price: {millify(crypt.price)} </p>
                <p> Market Cap: {millify(crypt.marketCap)} </p>
                <p> Daily Change: {millify(crypt.price)} </p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default CryptoCurrencies;
