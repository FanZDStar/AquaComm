// src/hooks/useSensorData.js
import { useEffect, useState } from 'react';
import axios from 'axios';

const useSensorData = () => {
    const [sensorData, setSensorData] = useState({ temperature: '', pressure: '', depth: '' });
    const [logs, setLogs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const logsPerPage = 5;

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

    useEffect(() => {
        const interval = setInterval(() => {
            fetchData();
            fetchLogs();
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return { sensorData, logs, currentPage, setCurrentPage };
};

export default useSensorData;
