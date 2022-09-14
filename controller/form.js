import Matkul1 from "../models/matkul1.js";
import Matkul2 from "../models/matkul2.js";
import Matkul3 from "../models/matkul3.js";
import Matkul4 from "../models/matkul4.js";
import Matkul5 from "../models/matkul5.js";
import Matkul6 from "../models/matkul6.js";
import User from "../models/user.js";
import Mahasiswa from "../models/mahasiswa.js";

export const postMatkul1 = async (req, res) => {
    const {
        sub1,
        valuesub1,
        sub2,
        valuesub2,
        sub3,
        valuesub3,
        sub4,
        valuesub4,
    } = req.body;
    const iduser = req.params.iduser
    const user = await User.findOne({
        where: {
            id: iduser
        }
    })
    if (!user) return res.status(400).json({
        status: res.statusCode,
        message: 'User tidak ada !'
    })

    const total = sub1 + sub2 + sub3 + sub4
    const average = total / 4
    var hurufmutu = ''

    if (average <= 100 && average >= 81) {
        hurufmutu = 'A'
    } else if (average <= 80 && average >= 75) {
        hurufmutu = 'B+'
    } else if (average <= 74 && average >= 70) {
        hurufmutu = 'B'
    } else if (average <= 69 && average >= 65) {
        hurufmutu = 'C+'
    } else if (average <= 64 && average >= 55) {
        hurufmutu = 'C'
    } else if (average <= 54 && average >= 50) {
        hurufmutu = 'D'
    } else if (average <= 49 && average >= 0) {
        hurufmutu = 'E'
    } else {
        return res.status(400).json({
            status: res.statusCode,
            message: 'Nilai Tidak Valid'
        })
    }

    var idmahasiswa = req.params.idmahasiswa
    const mahasiswaExist = await Mahasiswa.findOne({
        where: {
            id: idmahasiswa
        }
    })
    if (!mahasiswaExist) {
        return res.status(400).json({
            status: res.statusCode,
            message: 'Mahasiswa tidak ada !'
        })
    } else {
        idmahasiswa = mahasiswaExist.id
    }

    const Matkul1Post = new Matkul1({
        sub1: sub1,
        valuesub1: valuesub1,
        sub2: sub2,
        valuesub2: valuesub2,
        sub3: sub3,
        valuesub3: valuesub3,
        sub4: sub4,
        valuesub4: valuesub4,
        total: total,
        average: average,
        hurufmutu: hurufmutu,
        iduser: iduser,
        idmahasiswa: idmahasiswa,
    });

    try {
        const matkul1 = await Matkul1Post.save();
        res.status(200).json({
            status: res.statusCode,
            message: 'Berhasil membuat matkul1 baru',
            data: matkul1
        })
    } catch (error) {
        res.status(400).json({
            status: res.statusCode,
            message: 'Gagal membuat matkul1 baru'
        })
    };
}

export const postMatkul2 = async (req, res) => {
    const {
        sub1,
        valuesub1,
        sub2,
        valuesub2,
        sub3,
        valuesub3,
    } = req.body;
    const iduser = req.params.iduser
    const user = await User.findOne({
        where: {
            id: iduser
        }
    })
    if (!user) return res.status(400).json({
        status: res.statusCode,
        message: 'User tidak ada !'
    })

    const total = sub1 + sub2 + sub3
    const average = total / 3
    var hurufmutu = ''

    if (average <= 100 && average >= 81) {
        hurufmutu = 'A'
    } else if (average <= 80 && average >= 75) {
        hurufmutu = 'B+'
    } else if (average <= 74 && average >= 70) {
        hurufmutu = 'B'
    } else if (average <= 69 && average >= 65) {
        hurufmutu = 'C+'
    } else if (average <= 64 && average >= 55) {
        hurufmutu = 'C'
    } else if (average <= 54 && average >= 50) {
        hurufmutu = 'D'
    } else if (average <= 49 && average >= 0) {
        hurufmutu = 'E'
    } else {
        return res.status(400).json({
            status: res.statusCode,
            message: 'Nilai Tidak Valid'
        })
    }

    var idmahasiswa = req.params.idmahasiswa
    const mahasiswaExist = await Mahasiswa.findOne({
        where: {
            id: idmahasiswa
        }
    })
    if (!mahasiswaExist) {
        return res.status(400).json({
            status: res.statusCode,
            message: 'Mahasiswa tidak ada !'
        })
    } else {
        idmahasiswa = mahasiswaExist.id
    }

    const Matkul2Post = new Matkul2({
        sub1: sub1,
        valuesub1: valuesub1,
        sub2: sub2,
        valuesub2: valuesub2,
        sub3: sub3,
        valuesub3: valuesub3,
        total: total,
        average: average,
        hurufmutu: hurufmutu,
        iduser: iduser,
        idmahasiswa: idmahasiswa,
    });

    try {
        const matkul2 = await Matkul2Post.save();
        res.status(200).json({
            status: res.statusCode,
            message: 'Berhasil membuat matkul2 baru',
            data: matkul2
        })
    } catch (error) {
        res.status(400).json({
            status: res.statusCode,
            message: 'Gagal membuat matkul2 baru'
        })
    };
}

export const postMatkul3 = async (req, res) => {
    const {
        sub1,
        valuesub1,
        sub21,
        valuesub21,
        sub22,
        valuesub22,
        sub23,
        valuesub23,
        sub24,
        valuesub24,
    } = req.body;
    const iduser = req.params.iduser
    const user = await User.findOne({
        where: {
            id: iduser
        }
    })
    if (!user) return res.status(400).json({
        status: res.statusCode,
        message: 'User tidak ada !'
    })

    const sub2 = (sub21 + sub22 + sub23 + sub24) / 4
    const total = sub1 + sub2
    const average = total / 2
    var hurufmutu = ''

    if (average <= 100 && average >= 81) {
        hurufmutu = 'A'
    } else if (average <= 80 && average >= 75) {
        hurufmutu = 'B+'
    } else if (average <= 74 && average >= 70) {
        hurufmutu = 'B'
    } else if (average <= 69 && average >= 65) {
        hurufmutu = 'C+'
    } else if (average <= 64 && average >= 55) {
        hurufmutu = 'C'
    } else if (average <= 54 && average >= 50) {
        hurufmutu = 'D'
    } else if (average <= 49 && average >= 0) {
        hurufmutu = 'E'
    } else {
        return res.status(400).json({
            status: res.statusCode,
            message: 'Nilai Tidak Valid'
        })
    }

    var idmahasiswa = req.params.idmahasiswa
    const mahasiswaExist = await Mahasiswa.findOne({
        where: {
            id: idmahasiswa
        }
    })
    if (!mahasiswaExist) {
        return res.status(400).json({
            status: res.statusCode,
            message: 'Mahasiswa tidak ada !'
        })
    } else {
        idmahasiswa = mahasiswaExist.id
    }

    const Matkul3Post = new Matkul3({
        sub1: sub1,
        valuesub1: valuesub1,
        sub2: sub2,
        sub21: sub21,
        valuesub21: valuesub21,
        sub22: sub22,
        valuesub22: valuesub22,
        sub23: sub23,
        valuesub23: valuesub23,
        sub24: sub24,
        valuesub24: valuesub24,
        total: total,
        average: average,
        hurufmutu: hurufmutu,
        iduser: iduser,
        idmahasiswa: idmahasiswa,
    });

    try {
        const matkul3 = await Matkul3Post.save();
        res.status(200).json({
            status: res.statusCode,
            message: 'Berhasil membuat matkul3 baru',
            data: matkul3
        })
    } catch (error) {
        res.status(400).json({
            status: res.statusCode,
            message: 'Gagal membuat matkul3 baru'
        })
    };
}

export const postMatkul4 = async (req, res) => {
    const {
        sub11,
        valuesub11,
        sub12,
        valuesub12,
        sub13,
        valuesub13,
        sub14,
        valuesub14,
    } = req.body;
    const iduser = req.params.iduser
    const user = await User.findOne({
        where: {
            id: iduser
        }
    })
    if (!user) return res.status(400).json({
        status: res.statusCode,
        message: 'User tidak ada !'
    })

    const sub1 = (sub11 + sub12 + sub13 + sub14) / 4
    const total = sub1
    const average = total
    var hurufmutu = ''

    if (average <= 100 && average >= 81) {
        hurufmutu = 'A'
    } else if (average <= 80 && average >= 75) {
        hurufmutu = 'B+'
    } else if (average <= 74 && average >= 70) {
        hurufmutu = 'B'
    } else if (average <= 69 && average >= 65) {
        hurufmutu = 'C+'
    } else if (average <= 64 && average >= 55) {
        hurufmutu = 'C'
    } else if (average <= 54 && average >= 50) {
        hurufmutu = 'D'
    } else if (average <= 49 && average >= 0) {
        hurufmutu = 'E'
    } else {
        return res.status(400).json({
            status: res.statusCode,
            message: 'Nilai Tidak Valid'
        })
    }

    var idmahasiswa = req.params.idmahasiswa
    const mahasiswaExist = await Mahasiswa.findOne({
        where: {
            id: idmahasiswa
        }
    })
    if (!mahasiswaExist) {
        return res.status(400).json({
            status: res.statusCode,
            message: 'Mahasiswa tidak ada !'
        })
    } else {
        idmahasiswa = mahasiswaExist.id
    }

    const Matkul4Post = new Matkul4({
        sub1: sub1,
        sub11: sub11,
        valuesub11: valuesub11,
        sub12: sub12,
        valuesub12: valuesub12,
        sub13: sub13,
        valuesub13: valuesub13,
        sub14: sub14,
        valuesub14: valuesub14,
        total: total,
        average: average,
        hurufmutu: hurufmutu,
        iduser: iduser,
        idmahasiswa: idmahasiswa,
    });

    try {
        const matkul4 = await Matkul4Post.save();
        res.status(200).json({
            status: res.statusCode,
            message: 'Berhasil membuat matkul4 baru',
            data: matkul4
        })
    } catch (error) {
        res.status(400).json({
            status: res.statusCode,
            message: 'Gagal membuat matkul4 baru'
        })
    };
}

export const postMatkul5 = async (req, res) => {
    const {
        sub1,
        valuesub1,
        sub2,
        valuesub2,
        sub3,
        valuesub3,
    } = req.body;
    const iduser = req.params.iduser
    const user = await User.findOne({
        where: {
            id: iduser
        }
    })
    if (!user) return res.status(400).json({
        status: res.statusCode,
        message: 'User tidak ada !'
    })

    const total = sub1 + sub2 + sub3
    const average = total / 3
    var hurufmutu = ''

    if (average <= 100 && average >= 81) {
        hurufmutu = 'A'
    } else if (average <= 80 && average >= 75) {
        hurufmutu = 'B+'
    } else if (average <= 74 && average >= 70) {
        hurufmutu = 'B'
    } else if (average <= 69 && average >= 65) {
        hurufmutu = 'C+'
    } else if (average <= 64 && average >= 55) {
        hurufmutu = 'C'
    } else if (average <= 54 && average >= 50) {
        hurufmutu = 'D'
    } else if (average <= 49 && average >= 0) {
        hurufmutu = 'E'
    } else {
        return res.status(400).json({
            status: res.statusCode,
            message: 'Nilai Tidak Valid'
        })
    }

    var idmahasiswa = req.params.idmahasiswa
    const mahasiswaExist = await Mahasiswa.findOne({
        where: {
            id: idmahasiswa
        }
    })
    if (!mahasiswaExist) {
        return res.status(400).json({
            status: res.statusCode,
            message: 'Mahasiswa tidak ada !'
        })
    } else {
        idmahasiswa = mahasiswaExist.id
    }

    const Matkul5Post = new Matkul5({
        sub1: sub1,
        valuesub1: valuesub1,
        sub2: sub2,
        valuesub2: valuesub2,
        sub3: sub3,
        valuesub3: valuesub3,
        total: total,
        average: average,
        hurufmutu: hurufmutu,
        iduser: iduser,
        idmahasiswa: idmahasiswa,
    });

    try {
        const matkul5 = await Matkul5Post.save();
        res.status(200).json({
            status: res.statusCode,
            message: 'Berhasil membuat matkul5 baru',
            data: matkul5
        })
    } catch (error) {
        res.status(400).json({
            status: res.statusCode,
            message: 'Gagal membuat matkul5 baru'
        })
    };
}

export const postMatkul6 = async (req, res) => {
    const {
        sub1,
        valuesub1
    } = req.body;
    const iduser = req.params.iduser
    const user = await User.findOne({
        where: {
            id: iduser
        }
    })
    if (!user) return res.status(400).json({
        status: res.statusCode,
        message: 'User tidak ada !'
    })

    const total = sub1
    const average = total
    var hurufmutu = ''

    if (average <= 100 && average >= 81) {
        hurufmutu = 'A'
    } else if (average <= 80 && average >= 75) {
        hurufmutu = 'B+'
    } else if (average <= 74 && average >= 70) {
        hurufmutu = 'B'
    } else if (average <= 69 && average >= 65) {
        hurufmutu = 'C+'
    } else if (average <= 64 && average >= 55) {
        hurufmutu = 'C'
    } else if (average <= 54 && average >= 50) {
        hurufmutu = 'D'
    } else if (average <= 49 && average >= 0) {
        hurufmutu = 'E'
    } else {
        return res.status(400).json({
            status: res.statusCode,
            message: 'Nilai Tidak Valid'
        })
    }

    var idmahasiswa = req.params.idmahasiswa
    const mahasiswaExist = await Mahasiswa.findOne({
        where: {
            id: idmahasiswa
        }
    })
    if (!mahasiswaExist) {
        return res.status(400).json({
            status: res.statusCode,
            message: 'Mahasiswa tidak ada !'
        })
    } else {
        idmahasiswa = mahasiswaExist.id
    }

    const Matkul6Post = new Matkul6({
        sub1: sub1,
        valuesub1: valuesub1,
        total: total,
        average: average,
        hurufmutu: hurufmutu,
        iduser: iduser,
        idmahasiswa: idmahasiswa,
    });

    try {
        const matkul6 = await Matkul6Post.save();
        res.status(200).json({
            status: res.statusCode,
            message: 'Berhasil membuat matkul6 baru',
            data: matkul6
        })
    } catch (error) {
        res.status(400).json({
            status: res.statusCode,
            message: 'Gagal membuat matkul6 baru'
        })
    };
}

export const getMatkul = async (req, res) => {
    const iduser = req.params.iduser
    const user = await User.findOne({
        where: {
            id: iduser
        }
    })
    if (!user) return res.status(400).json({
        status: res.statusCode,
        message: 'User tidak ada !'
    })

    var idmahasiswa = req.params.idmahasiswa
    const mahasiswaExist = await Mahasiswa.findOne({
        where: {
            id: idmahasiswa
        }
    })
    if (!mahasiswaExist) {
        return res.status(400).json({
            status: res.statusCode,
            message: 'Mahasiswa tidak ada !'
        })
    } else {
        idmahasiswa = mahasiswaExist.id
    }

    let matkul = []
    try {
        const matkul1 = await Matkul1.findAll({
            where: {
                iduser: iduser,
                idmahasiswa: idmahasiswa
            }
        })
        const matkul2 = await Matkul2.findAll({
            where: {
                iduser: iduser,
                idmahasiswa: idmahasiswa
            }
        })
        const matkul3 = await Matkul3.findAll({
            where: {
                iduser: iduser,
                idmahasiswa: idmahasiswa
            }
        })
        const matkul4 = await Matkul4.findAll({
            where: {
                iduser: iduser,
                idmahasiswa: idmahasiswa
            }
        })
        const matkul5 = await Matkul5.findAll({
            where: {
                iduser: iduser,
                idmahasiswa: idmahasiswa
            }
        })
        const matkul6 = await Matkul6.findAll({
            where: {
                iduser: iduser,
                idmahasiswa: idmahasiswa
            }
        })
        matkul.push({
            matkul1: matkul1,
            matkul2: matkul2,
            matkul3: matkul3,
            matkul4: matkul4,
            matkul5: matkul5,
            matkul6: matkul6
        })
        res.status(200).json({
            status: res.statusCode,
            message: 'Berhasil mendapatkan matkul',
            data: matkul
        })
    } catch (err) {
        res.status(400).json({
            status: res.statusCode,
            message: 'Gagal mendapatkan matkul'
        })
    };
}