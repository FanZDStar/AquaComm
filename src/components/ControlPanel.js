import React from 'react';
import axios from 'axios';

const ControlPanel = () => {
    const sendControlCommand = async (direction) => {
        try {
            await axios.post('http://localhost:3001/control', { direction });
            console.log(`Command "${direction}" sent`);
        } catch (error) {
            console.error('Error sending command:', error);
        }
    };

    return (
        <div className="control-panel">
            <h2>控制面板</h2>
            <div className="controls">
                <button className="button" onClick={() => sendControlCommand('forward')}>前进</button>
                <button className="button" onClick={() => sendControlCommand('backward')}>后退</button>
                <button className="button" onClick={() => sendControlCommand('left')}>左转</button>
                <button className="button" onClick={() => sendControlCommand('right')}>右转</button>
            </div>
        </div>
    );
};

export default ControlPanel;
