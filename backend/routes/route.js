import express from "express";
import { createBook, deleteBook, getBook, getBooks, updateBook } from "../controllers/controller.js";
const router = express.Router();

router.get("/", getBooks);
router.post("/", createBook);
router.get("/:id", getBook)
router.put("/:id", updateBook);
router.delete("/:id", deleteBook);

export default router;