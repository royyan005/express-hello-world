import db from "../config/database.js";
import Users from "./user.js";
import Mahasiswa from "./mahasiswa.js";
import UserMahasiswa from "./usermahasiswa.js";

Users.belongsToMany(Mahasiswa, {
    through: UserMahasiswa,
});
const MahasiswaAssociate = Mahasiswa.belongsToMany(Users, {
    through: UserMahasiswa,
});

export {
    Users,
    MahasiswaAssociate,
    UserMahasiswa
};