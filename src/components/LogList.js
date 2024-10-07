import React from 'react';

const LogList = ({ logs, currentPage, setCurrentPage }) => {
    const logsPerPage = 5; // 每页显示的日志数量

    const formatTimestamp = (timestamp) => {
        const date = new Date(timestamp);
        return date.toISOString().slice(0, 19).replace('T', ' '); // YYYY-MM-DD HH:mm:ss
    };

    const indexOfLastLog = currentPage * logsPerPage;
    const indexOfFirstLog = indexOfLastLog - logsPerPage;
    const currentLogs = logs.slice(indexOfFirstLog, indexOfLastLog);
    const totalPages = Math.ceil(logs.length / logsPerPage);

    return (
        <div className="log-list">
            <h2>用户操作日志</h2>
            <ul>
                {currentLogs.map((log, index) => (
                    <li key={index}>{formatTimestamp(log.timestamp)}: {log.command}</li>
                ))}
            </ul>
            <div className="pagination">
                <button 
                    className="button" 
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                >
                    上一页
                </button>
                <span>第 {currentPage} 页 / {totalPages} 页</span>
                <button 
                    className="button" 
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                >
                    下一页
                </button>
            </div>
        </div>
    );
};

export default LogList;
