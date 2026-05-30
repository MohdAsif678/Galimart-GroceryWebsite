import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import groceryRouter from "./routes/groceryRoute.js";
import userRouter from "./routes/userRoute.js";
import dotenv from "dotenv";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

//app config
const app = express();
const port = process.env.PORT || 4000;
dotenv.config();

//middleware
app.use(express.json());
app.use(cors());

// db connection
connectDB();

//api endpoints
app.use("/api/grocery", groceryRouter);
app.use("/images", express.static("uploads"));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter) 
app.use("/api/order", orderRouter);

app
  .get("/", (req, res) => {
    res.send("Hello Asif");
  })
  .listen(port, () => {
    console.log(`server is running on port ${port}`);
  });
