import db from "../config/database.js";

const UserMahasiswa = db.define('usermahasiswa', {
    usermahasiswaid: {
        type: Int16Array,
        primaryKey: true,
    },
    mahasiswaid: {
        type: Int16Array,
    },
    userid: {
        type: Int16Array,
    },
    createdAt: {
        type: String,
        default: Date.now()
    },
    updatedAt: {
        type: Date,
        default: Date.now(),
    },
});

export default UserMahasiswa