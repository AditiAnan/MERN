import asyncHandler from '../middleware/asyncHandler.js';
import User from '../models/userModel.js';


const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
  res.send('auth user');
});


const registerUser = asyncHandler(async (req, res) => {
    res.send('register users');

});

const logoutUser = asyncHandler(async (req, res) => {
    res.send('logout user');

});

const getUserProfile = asyncHandler(async (req, res) => {
    res.send('get user profile');

});


const updateUserProfile = asyncHandler(async (req, res) => {
    res.send('update user profile');
});


const getUsers = asyncHandler(async (req, res) => {
    res.send('get User');
});


const deleteUser = asyncHandler(async (req, res) => {
  res.send('delete users');
});


const getUserByID = asyncHandler(async (req, res) => {
    res.send('get user by ID');
});

const updateUser = asyncHandler(async (req, res) => {
    res.send('update user ');
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserByID,
  updateUser,
};