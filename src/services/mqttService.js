import mqtt from 'mqtt';

const client = mqtt.connect('mqtt://172.6.0.240:1883'); // 替换为你的MQTT代理地址

client.on('connect', () => {
    console.log('Connected to MQTT broker');
    client.subscribe('sensor/data', (err) => {
        if (err) {
            console.error('Subscription error:', err);
        }
    });
});

client.on('message', (topic, message) => {
    console.log(`Received message: ${message.toString()} on topic ${topic}`);
    // 在这里可以处理接收到的数据
});

export default client;
