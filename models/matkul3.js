import db from "../config/database.js";

const Matkul3 = db.define('matkul3s',{
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
    sub21: {
        type: Int16Array,
    },
    sub22: {
        type: Int16Array,
    },
    sub23: {
        type: Int16Array,
    },
    sub24: {
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
    valuesub21: {
        type: Int16Array,
    },
    valuesub22: {
        type: Int16Array,
    },
    valuesub23: {
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

export default Matkul3