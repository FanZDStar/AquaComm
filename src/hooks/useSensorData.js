import { useEffect, useState } from 'react';
import axios from 'axios';

const useSensorData = () => {
    const [sensorData, setSensorData] = useState({ temperature: '', pressure: '', depth: '' });
    const [logs, setLogs] = useState([]);
    const [historyData, setHistoryData] = useState([]);
    
    const [currentLogPage, setCurrentLogPage] = useState(1);
    const [currentHistoryPage, setCurrentHistoryPage] = useState(1);
    
    const [totalRecords, setTotalRecords] = useState(0); // 新增状态
    const logsPerPage = 5;
    const recordsPerPage = 10;

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:3001/data');
            setSensorData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const fetchLogs = async () => {
        try {
            const response = await axios.get('http://localhost:3001/logs');
            setLogs(response.data);
        } catch (error) {
            console.error('Error fetching logs:', error);
        }
    };

    const fetchHistory = async () => {
        try {
            const response = await axios.get(`http://localhost:3001/history?page=${currentHistoryPage}&limit=${recordsPerPage}`);
            setHistoryData(response.data.records);
            setTotalRecords(response.data.total); // 更新总记录数
        } catch (error) {
            console.error('Error fetching history:', error);
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            fetchData();
            fetchLogs();
            fetchHistory();
        }, 1000);
        return () => clearInterval(interval);
    }, [currentHistoryPage]); // 依赖于currentHistoryPage，确保每次页面变化时都获取数据

    return { sensorData, logs, historyData, currentLogPage, setCurrentLogPage, currentHistoryPage, setCurrentHistoryPage, recordsPerPage, totalRecords };
};

export default useSensorData;
