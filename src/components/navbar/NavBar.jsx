import React from "react";

// comps
import { Button, Menu, Typography, Avatar } from "antd";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MneuOutline,
} from "@ant-design/icons";

// Images
import icon from "../../images/cryptocurrency.png";

function NavBar() {
  return (
    <div className="nav-container">
      <header className="logo-container">
        <Avatar src={icon} size="large" />
        <Typography.Title level={2} className="logo">
          <Link to="/"> CryptoVerse</Link>
        </Typography.Title>
      </header>
      <Menu theme="dark">
        <Menu.Item icon={<HomeOutlined />}>
          <Link to="/"> Home </Link>
        </Menu.Item>
        <Menu.Item icon={<FundOutlined />}>
          <Link to="/cryptocurrencies"> Cryptocurrencies </Link>
        </Menu.Item>
        <Menu.Item icon={<HomeOutlined />}>
          <Link to="/exchanges "> Exchanges </Link>
        </Menu.Item>
        <Menu.Item icon={<BulbOutlined />}>
          <Link to="/news"> News </Link>
        </Menu.Item>
      </Menu>
    </div>
  );
}

export default NavBar;
