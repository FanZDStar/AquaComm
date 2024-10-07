import React from 'react';
import '../styles.css'; // 确保样式被导入

const HistoryTable = ({ historyData, currentPage, setCurrentPage, recordsPerPage, totalRecords }) => {
    const totalPages = Math.ceil(totalRecords / recordsPerPage);

    return (
        <div>
            <h2>历史记录</h2>
            <table>
                <thead>
                    <tr>
                        <th>时间</th>
                        <th>温度 (°C)</th>
                        <th>气压 (kPa)</th>
                        <th>深度 (m)</th>
                    </tr>
                </thead>
                <tbody>
                    {historyData.map((record, index) => (
                        <tr key={index}>
                            <td>{new Date(record.timestamp).toLocaleString()}</td>
                            <td>{record.temperature}</td>
                            <td>{record.pressure}</td>
                            <td>{record.depth}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
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

export default HistoryTable;
