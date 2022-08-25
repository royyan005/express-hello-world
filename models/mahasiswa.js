import db from "../config/database.js";

const Mahasiswa = db.define('mahasiswa',{
    id: {
        type: Int16Array,
        primaryKey: true,
    },
    nama: {
        type: String,
    },
    npm: {
        type: String,
    },
    jurusan: {
        type: String,
    },
    createdAt: {
        type: String,
        default: Date.now(),
    },
    updatedAt: {
        type: Date,
        default: Date.now(),
    },
    idpembimbing1: {
        type: Int16Array,
    },
    idpembimbing2: {
        type: Int16Array,
    },
    idpenguji: {
        type: Int16Array,
    },
});

export default Mahasiswa