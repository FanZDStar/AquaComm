
# IoT Device Control Platform

## 项目简介
这个项目是一个基于 IoT 的设备控制平台，使用 MQTT 协议进行通信，整合了传感器数据和用户操作日志的管理。用户可以通过 Web 界面监控设备状态，并发送控制指令。

## 技术栈
- **前端**: React
- **后端**: Node.js, Express
- **数据库**: MySQL
- **消息协议**: MQTT

## 功能
- 实时显示传感器数据（温度、气压、深度）
- 用户控制设备的移动（前进、后退、左转、右转）
- 显示用户操作日志
- 日志信息分页显示

## 环境搭建

### 1. 克隆项目
```bash
git clone https://github.com/FanZDStar/aquacomm.git
cd your-repo-name //你自己clone的地址
```

### 2. 安装依赖
在项目根目录下，分别为前端和后端安装依赖：
```bash
# 前端
cd client
npm install

# 后端
cd server
npm install
```

### 3. 配置数据库
在 MySQL 中创建数据库和表：
```sql
CREATE DATABASE itcast;

USE itcast;

CREATE TABLE device_status (
    id INT AUTO_INCREMENT PRIMARY KEY,
    temperature FLOAT,
    pressure FLOAT,
    depth FLOAT,
    timestamp DATETIME
);

CREATE TABLE operation_logs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    command VARCHAR(255),
    timestamp DATETIME
);

```

### 4. 启动服务
在不同的终端中启动前端和后端服务：
```bash
# 启动后端
cd server
node index.js

# 启动前端
cd client
npm start
```

## API 端点
- `GET /data`: 获取当前传感器数据
- `GET /logs`: 获取操作日志
- `POST /control`: 发送控制指令，示例请求体：
```json
{
    "direction": "forward"
}
```

## 贡献
欢迎任何形式的贡献！如果你有建议或发现错误，请创建一个 issue 或提交 PR。

## 许可证
此项目使用 MIT 许可证 - 详情请查看 [LICENSE](LICENSE)。

## 联系信息
- GitHub: [你的 GitHub 账号](https://github.com/FanZDStar)
- Email: [你的邮箱](junyanghudlut@gmail.com)
