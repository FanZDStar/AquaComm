import React, { useEffect } from 'react';
import axios from 'axios';

const ControlPanel = () => {
    const sendControlCommand = async (direction) => {
        // console.log(`Command "${direction}" sent`);
        try {
            await axios.post('http://localhost:3001/control', { direction });
            console.log(`Command "${direction}" sent`);
        } catch (error) {
            console.error('Error sending command:', error);
        }
    };


    // const sendControlCommand = async (direction) => {
    //     console.log(`Command "${direction}" sent (simulated)`); // 模拟打印命令
    //     // 模拟一个响应
    //     setTimeout(() => {
    //         console.log(`Simulated response for command "${direction}" received`);
    //     }, 1000); // 1秒后模拟收到响应
    // };
    

    // 监听键盘事件
    useEffect(() => {
        const handleKeyDown = (event) => {
            switch (event.key) {
                case 'w':
                    sendControlCommand('forward');
                    break;
                case 's':
                    sendControlCommand('backward');
                    break;
                case 'a':
                    sendControlCommand('left');
                    break;
                case 'd':
                    sendControlCommand('right');
                    break;
                default:
                    break;
            }
        };

        // 添加键盘监听
        window.addEventListener('keydown', handleKeyDown);

        // 清理监听器
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <div className="control-panel">
            <h2>控制面板</h2>
            <div className="controls">
                <button className="button" onClick={() => sendControlCommand('forward')}>前进</button>
                <button className="button" onClick={() => sendControlCommand('backward')}>后退</button>
                <button className="button" onClick={() => sendControlCommand('left')}>左转</button>
                <button className="button" onClick={() => sendControlCommand('right')}>右转</button>
            </div>
            <p>你可以使用键盘WSAD控制设备的移动</p>
        </div>
    );
};

export default ControlPanel;
