import db from "../config/database.js";

const Mahasiswa = db.define('mahasiswas',{
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
    ipk: {
        type: Float32Array,
    },
    am1: {
        type: Float32Array,
    },
    am2: {
        type: Float32Array,
    },
    am3: {
        type: Float32Array,
    },
    am4: {
        type: Float32Array,
    },
    am5: {
        type: Float32Array,
    },
    am6: {
        type: Float32Array,
    }
});

export default Mahasiswa