import asyncHandler from '../middleware/asyncHandler.js';
import Order from '../models/orderModel.js';



const addOrderItems = asyncHandler(async (req, res) => {
  res.send('add order item');
});


const getMyOrders = asyncHandler(async (req, res) => {
    res.send('get my item');
});


const getOrderById = asyncHandler(async (req, res) => {
    res.send('get order by id');

});


const updateOrderToPaid = asyncHandler(async (req, res) => {
    res.send('update order to paid');

});


const updateOrderToDelivered = asyncHandler(async (req, res) => {
    res.send('update order to deliver');

});


const getOrders = asyncHandler(async (req, res) => {
    res.send('update order to paid');

});

export {
  addOrderItems,
  getMyOrders,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  getOrders,
};