import React from 'react';
import ControlPanel from '../components/ControlPanel';
import { Typography } from 'antd';

const { Title } = Typography;

const Control = () => {
  return (
    <div>
      <Title level={1}>控制面板</Title>
      <ControlPanel />
      <a href="/">返回首页</a>
    </div>
  );
};

export default Control;
