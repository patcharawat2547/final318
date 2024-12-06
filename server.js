// server.js

const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const Database = require('./database'); // ตรวจสอบว่าไฟล์หรือโมดูลนี้มีอยู่จริง
const app = express();

const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ตัวอย่าง route เชื่อมกับ database
app.get('/api/data', async (req, res) => {
    Database.getAllData = async function () {

    };
    try {
        const data = await Database.getAllData(); // ตรวจสอบว่าฟังก์ชันนี้มีใน database.js
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching data' });
    }
});

// ตรวจสอบการเรียก http.listen ว่าอยู่ในรูปแบบที่ถูกต้อง
const server = http.createServer(app);
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
