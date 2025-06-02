import express from "express";
import { registerUser, loginUser, logoutUser, getUserById, updateUser, deleteUser } from "../controller/UserController.js";
import { getBasecamp, getBasecampById } from "../controller/BasecampController.js";
import { getPos, getPosById } from "../controller/PosController.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.delete("/logout", logoutUser);
router.get("/user/:id", getUserById);
router.put("/user/:id", updateUser);
router.delete("/user/:id", deleteUser);

router.get("/basecamp", getBasecamp);
router.get("/basecamp/:id", getBasecampById);

router.get("/pos", getPos);
router.get("/pos/:id", getPosById);

export default router;
