import React, { useEffect, useState } from 'react';
import { Card, Typography } from 'antd';
import mqtt from 'mqtt';

const { Title, Paragraph } = Typography;

const StatusDisplay = () => {
  const [status, setStatus] = useState({ temperature: 0, pressure: 0, depth: 0 });

  useEffect(() => {
    const client = mqtt.connect('mqtt://172.6.0.240:1883');

    client.on('connect', () => {
      client.subscribe('sensor/data');
    });

    client.on('message', (topic, message) => {
      const data = message.toString().split(', ');
      const temp = parseFloat(data[0].split(': ')[1]);
      const press = parseFloat(data[1].split(': ')[1]);
      const depth = parseFloat(data[2].split(': ')[1]);
      setStatus({ temperature: temp, pressure: press, depth: depth });
    });

    return () => client.end();
  }, []);

  return (
    <Card>
      <Title level={3}>设备状态</Title>
      <Paragraph>温度: {status.temperature} °C</Paragraph>
      <Paragraph>气压: {status.pressure} kPa</Paragraph>
      <Paragraph>深度: {status.depth} m</Paragraph>
    </Card>
  );
};

export default StatusDisplay;
