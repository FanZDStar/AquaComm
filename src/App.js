import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // 修改此行
import Home from './pages/Home';
import Control from './pages/Control';
import 'antd/dist/antd.css'; // 引入 Ant Design 样式



const App = () => {
  return (
    <Router>
      <Routes> {/* 替换 Switch 为 Routes */}
        <Route path="/" element={<Home />} /> {/* 修改 component 为 element */}
        <Route path="/control" element={<Control />} /> {/* 修改 component 为 element */}
      </Routes>
    </Router>
  );
};

export default App;
