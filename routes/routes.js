import express from "express";
import { getToken, getUsers, getUsersById, Register, Login, Logout, Delete } from "../controller/users.js";
import { verifyToken } from "../middleware/verifyToken.js";
import { postMahasiswa, getMahasiswa, getMahasiswaById, updateMahasiswa, deleteMahasiswa, postRolePembimbing1, postRolePembimbing2, postRolePenguji, getMahasiswaPagination, searchMahasiswaPagination} from "../controller/mahasiswa.js";
import { postMatkul1, postMatkul2, postMatkul3, postMatkul4, postMatkul5, postMatkul6, getMatkul, deleteMatkul} from "../controller/form.js";
import { refreshToken } from "../controller/refreshToken.js";



const router = express.Router();

// LOGIN AUTH
router.post("/register", Register);
router.post("/login", Login);
router.get("/token", refreshToken);
router.delete("/logout", Logout);

// USER
router.get("/users", verifyToken, getUsers);
router.get("/users/:id", verifyToken, getUsersById);
router.delete("/delete", verifyToken, Delete);

// MAHASISWA
router.post("/mahasiswa", verifyToken, postMahasiswa);
router.get("/mahasiswa", verifyToken, getMahasiswa);
router.get("/mahasiswa/:id", verifyToken, getMahasiswaById);
router.get("/pagination/mahasiswa", verifyToken, getMahasiswaPagination);
router.get("/search/mahasiswa", verifyToken, searchMahasiswaPagination);
router.put("/mahasiswa/:id", verifyToken, updateMahasiswa);
router.delete("/mahasiswa/:id", verifyToken, deleteMahasiswa);
router.post("/mahasiswa/:id/pembimbing1", verifyToken, postRolePembimbing1);
router.post("/mahasiswa/:id/pembimbing2", verifyToken, postRolePembimbing2);
router.post("/mahasiswa/:id/penguji", verifyToken, postRolePenguji);

// FORM SUBMIT
router.post("/matkul1/iduser/:iduser/idmahasiswa/:idmahasiswa", verifyToken, postMatkul1);
router.post("/matkul2/iduser/:iduser/idmahasiswa/:idmahasiswa", verifyToken, postMatkul2);
router.post("/matkul3/iduser/:iduser/idmahasiswa/:idmahasiswa", verifyToken, postMatkul3);
router.post("/matkul4/iduser/:iduser/idmahasiswa/:idmahasiswa", verifyToken, postMatkul4);
router.post("/matkul5/iduser/:iduser/idmahasiswa/:idmahasiswa", verifyToken, postMatkul5);
router.post("/matkul6/iduser/:iduser/idmahasiswa/:idmahasiswa", verifyToken, postMatkul6);
router.get("/matkul/iduser/:iduser/idmahasiswa/:idmahasiswa", verifyToken, getMatkul);
router.delete("/matkul/iduser/:iduser/idmahasiswa/:idmahasiswa", verifyToken, deleteMatkul);

export default router;