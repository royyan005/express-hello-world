import db from "../config/database.js";

const Matkul4 = db.define('matkul4s',{
    id: {
        type: Int16Array,
        primaryKey: true,
    },
    sub1: {
        type: Int16Array,
    },
    sub11: {
        type: Int16Array,
    },
    sub12: {
        type: Int16Array,
    },
    sub13: {
        type: Int16Array,
    },
    sub14: {
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
    valuesub11: {
        type: Int16Array,
    },
    valuesub12: {
        type: Int16Array,
    },
    valuesub13: {
        type: Int16Array,
    },
    valuesub14: {
        type: Int16Array,
    },
    sks: {
        type: Int16Array,
        default: 12,
    },
    angkamutu: {
        type: Float32Array,
    },
    nilaimutu: {
        type: Int16Array,
    },
});

export default Matkul4