import express from 'express';
import { addGrocery, listGrocery, removeGrocery } from '../controllers/groceryController.js';
import multer from 'multer';

const groceryRouter = express.Router();

const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const upload = multer({ storage });

groceryRouter.post("/add", upload.single("image"), addGrocery);
groceryRouter.get("/list",listGrocery)
groceryRouter.post("/remove",removeGrocery)

export default groceryRouter;