import React from 'react';
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import {
  HomeOutlined,
  MoneyCoolectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
  MoneyCollectOutlined,
} from '@ant-design/icons';
import icon from '../images/cryptocurrency.png';

const menuItems = [
  {
    key: 'home',
    icon: <HomeOutlined />,
    label: <Link to="/">홈</Link>,
  },
  {
    key: 'cryptocurrencies',
    icon: <FundOutlined />,
    label: <Link to="/cryptocurrencies">가상화폐</Link>,
  },
  {
    key: 'exchanges',
    icon: <MoneyCollectOutlined />,
    label: <Link to="/exchanges">Exchanges</Link>,
  },
  {
    key: 'news',
    icon: <BulbOutlined />,
    label: <Link to="/news">뉴스</Link>,
  },
];

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size="large" />
        <Typography.Title level={2} className="logo">
          <Link to="/">Crpto Info Site</Link>
        </Typography.Title>
      </div>
      {/* <Button className="menu-control-container"></Button> */}
      <Menu theme="dark" items={menuItems} />
    </div>
  );
};

export default Navbar;
