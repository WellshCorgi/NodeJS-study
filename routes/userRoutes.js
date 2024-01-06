// routes/userRoutes.js

const express = require('express');
const router = express.Router();
const {
  getAllUsersInfo,
  getUserInfoById,
  createNewUser,
  updateUserDetails,
  removeUser,
} = require('../services/userService');

// 모든 사용자 조회
router.get('/', async (req, res) => {
  try {
    const users = await getAllUsersInfo();
    res.status(200).json(users);
  } catch (error) {
    console.error(`Error in getAllUsers route: ${error.message}`);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// 특정 사용자 조회
router.get('/:userId', async (req, res) => {
  try {
    const userId = parseInt(req.params.userId);
    const user = await getUserInfoById(userId);
    res.status(200).json(user);
  } catch (error) {
    console.error(`Error in getUserInfoById route: ${error.message}`);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// 새로운 사용자 생성
router.post('/', async (req, res) => {
  try {
    const newUser = await createNewUser(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    console.error(`Error in createNewUser route: ${error.message}`);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// 사용자 정보 수정
router.put('/:userId', async (req, res) => {
  try {
    const userId = parseInt(req.params.userId);
    const updatedUser = await updateUserDetails(userId, req.body);
    res.status(200).json(updatedUser);
  } catch (error) {
    console.error(`Error in updateUserDetails route: ${error.message}`);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// 사용자 삭제
router.delete('/:userId', async (req, res) => {
  try {
    const userId = parseInt(req.params.userId);
    await removeUser(userId);
    res.status(204).end();
  } catch (error) {
    console.error(`Error in removeUser route: ${error.message}`);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
