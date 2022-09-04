import express from "express";
import { getToken, getUsers, Register, Login, Logout, Delete } from "../controller/users.js";
import { verifyToken } from "../middleware/verifyToken.js";
import { postInventaris, getInventaris, getInventarisById, updateInventaris, deleteInventaris } from "../controller/inventaris.js";
import { postMahasiswa, getMahasiswa, getMahasiswaById, updateMahasiswa, deleteMahasiswa, postRolePembimbing1, postRolePembimbing2, postRolePenguji} from "../controller/mahasiswa.js";
import { postMatkul1, postMatkul2, postMatkul3, postMatkul4, postMatkul5, postMatkul6} from "../controller/form.js";
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

// FORM SUBMIT
router.post("/matkul1/:idmahasiswa", verifyToken, postMatkul1);
router.post("/matkul2/:idmahasiswa", verifyToken, postMatkul2);
router.post("/matkul3/:idmahasiswa", verifyToken, postMatkul3);
router.post("/matkul4/:idmahasiswa", verifyToken, postMatkul4);
router.post("/matkul5/:idmahasiswa", verifyToken, postMatkul5);
router.post("/matkul6/:idmahasiswa", verifyToken, postMatkul6);

export default router;