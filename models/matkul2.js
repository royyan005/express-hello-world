import db from "../config/database.js";

const Matkul2 = db.define('matkul2',{
    id: {
        type: Int16Array,
        primaryKey: true,
    },
    sub1: {
        type: Int16Array,
    },
    sub2: {
        type: Int16Array,
    },
    sub3: {
        type: Int16Array,
    },
    total: {
        type: Int16Array,
    },
    average: {
        type: Float32Array,
    },
    idmahasiswa: {
        type: Int16Array,
    },
    iduser: {
        type: Int16Array,
    },
    createdAt: {
        type: String,
        default: Date.now(),
    },
    updatedAt: {
        type: Date,
        default: Date.now(),
    },
});

export default Matkul2