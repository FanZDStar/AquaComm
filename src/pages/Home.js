import React from 'react';
import StatusDisplay from '../components/StatusDisplay';
import { Typography } from 'antd';

const { Title } = Typography;

const Home = () => {
  return (
    <div>
      <Title level={1}>设备状态</Title>
      <StatusDisplay />
      <a href="/control">前往控制面板</a>
    </div>
  );
};

export default Home;
