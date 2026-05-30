import express from "express";
import {
  listOrders,
  placeOrder,
  updateStatus,
  userLatestOrder,
  userOrders,
} from "../controllers/orderController.js";
import authMiddleware from "../middleware/auth.js";

const orderRouter = express.Router();
orderRouter.post("/place", authMiddleware, placeOrder);
orderRouter.post("/userorders", authMiddleware, userOrders);
orderRouter.post("/userorders/latest", authMiddleware, userLatestOrder);
orderRouter.get("/list", listOrders);
orderRouter.post("/status", updateStatus);

export default orderRouter;
