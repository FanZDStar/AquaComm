import React from 'react';

const StatusDisplay = ({ sensorData }) => {
    return (
        <div className="status-display">
            <h2>设备状态</h2>
            <p>温度: {sensorData.temperature} °C</p>
            <p>气压: {sensorData.pressure} kPa</p>
            <p>深度: {sensorData.depth} m</p>
        </div>
    );
};

export default StatusDisplay;
