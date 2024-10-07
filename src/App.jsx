import React from 'react';
import useSensorData from './hooks/useSensorData';
import StatusDisplay from './components/StatusDisplay';
import ControlPanel from './components/ControlPanel';
import LogList from './components/LogList';

const App = () => {
    const { sensorData, logs, currentPage, setCurrentPage } = useSensorData();

    return (
        <div className="App">
            <h1>设备状态监控</h1>
            <StatusDisplay sensorData={sensorData} />
            <ControlPanel />
            <LogList logs={logs} currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </div>
    );
};

export default App;
