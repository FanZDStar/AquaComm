import React from 'react';
import useSensorData from './hooks/useSensorData';
import StatusDisplay from './components/StatusDisplay';
import ControlPanel from './components/ControlPanel';
import LogList from './components/LogList';
import HistoryTable from './components/HistoryTable';
import ThresholdSettings from './components/ThresholdSettings';

const App = () => {
    const { sensorData, logs, historyData, currentLogPage, setCurrentLogPage, currentHistoryPage, setCurrentHistoryPage, recordsPerPage, totalRecords } = useSensorData();

    return (
        <div className="App">
            <h1>设备状态监控</h1>
            <div className="status-container">
                <StatusDisplay sensorData={sensorData} />
                <ThresholdSettings sensorData={sensorData} />
            </div>
            <ControlPanel />
            <LogList logs={logs} currentPage={currentLogPage} setCurrentPage={setCurrentLogPage} />
            <HistoryTable historyData={historyData} currentPage={currentHistoryPage} setCurrentPage={setCurrentHistoryPage} recordsPerPage={recordsPerPage} totalRecords={totalRecords} />
        </div>
    );
};

export default App;
