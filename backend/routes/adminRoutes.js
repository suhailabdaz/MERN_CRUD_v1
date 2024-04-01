import express from "express";
import {
    authAdmin,
    getUsers,
    deleteUser,
    searchUser,
    addUser,
    updateUser,
} from "../controllers/adminController.js";

const router = express.Router();

router.route("/login").post(authAdmin);
router.route("/searchuser").post(searchUser);
router.route("/deleteuser/:id").post(deleteUser);
router.route("/updateuser/:id").post(updateUser);
router.route("/adduser").post(addUser);
router.route("/userdata").get(getUsers);

export default router;
