import db from "../config/database.js";

const Matkul1 = db.define('matkul1s',{
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
    sub4: {
        type: Int16Array,
    },
    total: {
        type: Int16Array,
    },
    average: {
        type: Float32Array,
    },
    hurufmutu: {
        type: String,
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
    valuesub1: {
        type: Int16Array,
    },
    valuesub2: {
        type: Int16Array,
    },
    valuesub3: {
        type: Int16Array,
    },
    valuesub4: {
        type: Int16Array,
    },
    sks: {
        type: Int16Array,
        default: 2,
    },
    angkamutu: {
        type: Float32Array,
    },
    nilaimutu: {
        type: Int16Array,
    },
});

export default Matkul1