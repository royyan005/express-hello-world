import express from "express";
import { getToken, getUsers, Register, Login, Logout, Delete } from "../controller/users.js";
import { verifyToken } from "../middleware/verifyToken.js";
import { postInventaris, getInventaris, getInventarisById, updateInventaris, deleteInventaris } from "../controller/inventaris.js";
import { postMahasiswa, getMahasiswa, getMahasiswaById, updateMahasiswa, deleteMahasiswa, postRolePembimbing1, postRolePembimbing2, postRolePenguji} from "../controller/mahasiswa.js";
import { refreshToken } from "../controller/refreshToken.js";



const router = express.Router();

// LOGIN AUTH
router.post("/register", Register);
router.post("/login", Login);
router.get("/token", refreshToken);
router.delete("/logout", Logout);

// USER
router.get("/users", verifyToken, getUsers);
router.delete("/delete", verifyToken, Delete);

// MAHASISWA
router.post("/mahasiswa", verifyToken, postMahasiswa);
router.get("/mahasiswa", verifyToken, getMahasiswa);
router.get("/mahasiswa/:id", verifyToken, getMahasiswaById);
router.put("/mahasiswa/:id", verifyToken, updateMahasiswa);
router.delete("/mahasiswa/:id", verifyToken, deleteMahasiswa);
router.post("/mahasiswa/:id/pembimbing1", verifyToken, postRolePembimbing1);
router.post("/mahasiswa/:id/pembimbing2", verifyToken, postRolePembimbing2);
router.post("/mahasiswa/:id/penguji", verifyToken, postRolePenguji);

// INVENTARIS
router.post("/inventaris", verifyToken, postInventaris);
router.get("/inventaris", verifyToken, getInventaris);
router.get("/inventaris/:id_inventaris", verifyToken, getInventarisById);
router.put("/inventaris/:id_inventaris", verifyToken, updateInventaris);
router.delete("/inventaris/:id_inventaris", verifyToken, deleteInventaris);

export default router;