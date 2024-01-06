// controllers/userController.js

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// 모든 사용자 조회
const getAllUsers = async () => {
  try {
    return await prisma.user.findMany();
  } catch (error) {
    console.error(`Error in getAllUsers: ${error.message}`);
    throw new Error('Failed to get all users');
  }
};

// 특정 사용자 조회
const getUserById = async (userId) => {
  try {
    return await prisma.user.findUnique({ where: { id: userId } });
  } catch (error) {
    console.error(`Error in getUserById: ${error.message}`);
    throw new Error('Failed to get user by ID');
  }
};

// 사용자 생성
const createUser = async (userData) => {
  try {
    return await prisma.user.create({
      data: userData,
    });
  } catch (error) {
    console.error(`Error in createUser: ${error.message}`);
    throw new Error('Failed to create user');
  }
};

// 사용자 수정
const updateUser = async (userId, userData) => {
  try {
    return await prisma.user.update({
      where: { id: userId },
      data: userData,
    });
  } catch (error) {
    console.error(`Error in updateUser: ${error.message}`);
    throw new Error('Failed to update user');
  }
};

// 사용자 삭제
const deleteUser = async (userId) => {
  try {
    return await prisma.user.delete({ where: { id: userId } });
  } catch (error) {
    console.error(`Error in deleteUser: ${error.message}`);
    throw new Error('Failed to delete user');
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};

// 특정 사용자의 모든 포스트 조회 추후 구현
// const getAllPostsByUserId = async (userId) => {
//   try {
//     return await prisma.user.findUnique({ where: { id: userId } }).posts();
//   } catch (error) {
//     console.error(`Error in getAllPostsByUserId: ${error.message}`);
//     throw new Error('Failed to get posts by user ID');
//   }
// };
