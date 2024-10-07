import React from 'react';
import useSensorData from './hooks/useSensorData';
import StatusDisplay from './components/StatusDisplay';
import ControlPanel from './components/ControlPanel';
import LogList from './components/LogList';
import HistoryTable from './components/HistoryTable';

const App = () => {
    const { sensorData, logs, historyData, currentLogPage, setCurrentLogPage, currentHistoryPage, setCurrentHistoryPage, recordsPerPage, totalRecords } = useSensorData();

    return (
        <div className="App">
            <h1>设备状态监控</h1>
            <StatusDisplay sensorData={sensorData} />
            <ControlPanel />
            <LogList logs={logs} currentPage={currentLogPage} setCurrentPage={setCurrentLogPage} />
            <HistoryTable historyData={historyData} currentPage={currentHistoryPage} setCurrentPage={setCurrentHistoryPage} recordsPerPage={recordsPerPage} totalRecords={totalRecords} />
        </div>
    );
};

export default App;
