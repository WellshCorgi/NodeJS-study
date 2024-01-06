// services/userService.js

const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require('../controllers/userController');

// 모든 사용자 조회 서비스
const getAllUsersInfo = async () => {
  try {
    // 컨트롤러에서 모든 사용자 조회 함수를 호출하여 결과 반환
    return await getAllUsers();
  } catch (error) {
    // 에러 발생 시 로깅 및 에러 전파
    console.error(`Error in getAllUsersInfo: ${error.message}`);
    throw new Error('Failed to get all users');
  }
};

// 특정 사용자 조회 서비스
const getUserInfoById = async (userId) => {
  try {
    // 컨트롤러에서 특정 사용자 조회 함수를 호출하여 결과 반환
    return await getUserById(userId);
  } catch (error) {
    // 에러 발생 시 로깅 및 에러 전파
    console.error(`Error in getUserInfoById: ${error.message}`);
    throw new Error('Failed to get user by ID');
  }
};

// 사용자 생성 서비스
const createNewUser = async (userData) => {
  try {
    // 컨트롤러에서 사용자 생성 함수를 호출하여 결과 반환
    return await createUser(userData);
  } catch (error) {
    // 에러 발생 시 로깅 및 에러 전파
    console.error(`Error in createNewUser: ${error.message}`);
    throw new Error('Failed to create user');
  }
};

// 사용자 수정 서비스
const updateUserDetails = async (userId, userData) => {
  try {
    // 컨트롤러에서 사용자 수정 함수를 호출하여 결과 반환
    return await updateUser(userId, userData);
  } catch (error) {
    // 에러 발생 시 로깅 및 에러 전파
    console.error(`Error in updateUserDetails: ${error.message}`);
    throw new Error('Failed to update user');
  }
};

// 사용자 삭제 서비스
const removeUser = async (userId) => {
  try {
    // 컨트롤러에서 사용자 삭제 함수를 호출하여 결과 반환
    return await deleteUser(userId);
  } catch (error) {
    // 에러 발생 시 로깅 및 에러 전파
    console.error(`Error in removeUser: ${error.message}`);
    throw new Error('Failed to delete user');
  }
};

module.exports = {
  getAllUsersInfo,
  getUserInfoById,
  createNewUser,
  updateUserDetails,
  removeUser,
};
