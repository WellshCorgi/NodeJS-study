// app.js

const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const { PrismaClient } = require('@prisma/client');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// 환경 변수를 통한 Prisma 연결 정보 설정
const prisma = new PrismaClient({
  // 적절한 환경 변수 사용
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
});

// 사용자 라우트 설정
app.use('/users', userRoutes);

// 서버 시작
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// 에러 핸들링: 프로세스 종료 시 PrismaClient 연결 닫기
process.on('SIGINT', async () => {
  await prisma.$disconnect();
  process.exit();
});

process.on('SIGTERM', async () => {
  await prisma.$disconnect();
  process.exit();
});
