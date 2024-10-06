import React from 'react';
import { Button, Card } from 'antd';
import mqtt from 'mqtt';

const ControlPanel = () => {
  const client = mqtt.connect('mqtt://172.6.0.240:1883');

  const sendCommand = (command) => {
    client.publish('control/movement', command);
  };

  return (
    <Card>
      <h2>控制面板</h2>
      <Button onClick={() => sendCommand('前进')} type="primary">前进</Button>
      <Button onClick={() => sendCommand('后退')} type="default">后退</Button>
      <Button onClick={() => sendCommand('左转')} type="dashed">左转</Button>
      <Button onClick={() => sendCommand('右转')} type="danger">右转</Button>
    </Card>
  );
};

export default ControlPanel;
