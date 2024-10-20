import React, { useState, useEffect } from 'react';

const ThresholdSettings = ({ sensorData }) => {
    const [thresholds, setThresholds] = useState({
        temperature: 25, // 默认阈值
        pressure: 100,   // 默认阈值
        depth: 10,       // 默认阈值
    });
    
    const [alerts, setAlerts] = useState({});

    useEffect(() => {
        const newAlerts = {};
        if (sensorData.temperature > thresholds.temperature) {
            newAlerts.temperature = true;
        }
        if (sensorData.pressure > thresholds.pressure) {
            newAlerts.pressure = true;
        }
        if (sensorData.depth > thresholds.depth) {
            newAlerts.depth = true;
        }
        setAlerts(newAlerts);
    }, [sensorData, thresholds]);

    const handleChange = (e) => {
        setThresholds({ ...thresholds, [e.target.name]: e.target.value });
    };

    return (
        <div className="threshold-settings">
            <h2>阈值设置</h2>
            <div>
                <label>
                    温度阈值 (°C):
                    <input type="number" name="temperature" value={thresholds.temperature} onChange={handleChange} />
                </label>
                {alerts.temperature && <span style={{ color: 'red' }}>温度超出阈值!</span>}
            </div>
            <div>
                <label>
                    气压阈值 (kPa):
                    <input type="number" name="pressure" value={thresholds.pressure} onChange={handleChange} />
                </label>
                {alerts.pressure && <span style={{ color: 'red' }}>气压超出阈值!</span>}
            </div>
            <div>
                <label>
                    深度阈值 (m):
                    <input type="number" name="depth" value={thresholds.depth} onChange={handleChange} />
                </label>
                {alerts.depth && <span style={{ color: 'red' }}>深度超出阈值!</span>}
            </div>
        </div>
    );
};

export default ThresholdSettings;
