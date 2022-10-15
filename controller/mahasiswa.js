import {
    MahasiswaAssociate
} from "../models/association.js";
import Mahasiswa from "../models/mahasiswa.js";
import Users from "../models/user.js";
import UserMahasiswa from "../models/usermahasiswa.js";
import {
    Op
} from "sequelize"
import Matkul1 from "../models/matkul1.js";
import Matkul2 from "../models/matkul2.js";
import Matkul3 from "../models/matkul3.js";
import Matkul4 from "../models/matkul4.js";
import Matkul5 from "../models/matkul5.js";
import Matkul6 from "../models/matkul6.js";
import {
    HurufMutu,
    AngkaMutu
} from "../controller/helper.js";

export const postMahasiswa = async (req, res) => {
    const {
        nama,
        npm,
        jurusan
    } = req.body;

    const mahasiswaExist = await Mahasiswa.findOne({
        where: {
            npm: npm
        }
    })
    if (mahasiswaExist) return res.status(400).json({
        status: res.statusCode,
        message: 'Mahasiswa Sudah ada !'
    })

    const MahasiswaPost = new Mahasiswa({
        nama: nama,
        npm: npm,
        jurusan: jurusan
    });

    try {
        const mahasiswa = await MahasiswaPost.save();
        const searchmahasiswa = await Mahasiswa.findOne({
            where: {
                npm: npm
            }
        });
        res.status(200).json({
            status: res.statusCode,
            message: 'Berhasil membuat mahasiswa baru',
            data: searchmahasiswa
        })
    } catch (error) {
        res.status(400).json({
            status: res.statusCode,
            message: 'Gagal membuat mahasiswa baru'
        })
    };
};

export const getMahasiswa = async (req, res) => {
    try {
        const mahasiswa = await Mahasiswa.findAll()
        res.status(200).json({
            id: req.params.id,
            status: res.statusCode,
            message: 'Berhasil mendapatkan mahasiswa',
            data: mahasiswa
        })
    } catch (err) {
        res.status(400).json({
            id: req.params.id,
            status: res.statusCode,
            message: 'Gagal mendapatkan mahasiswa'
        })
    };
};

export const getMahasiswaById = async (req, res) => {
    try {
        const mahasiswa = await Mahasiswa.findAll({
            where: {
                id: req.params.id,
            }
        })
        res.status(200).json({
            id: req.params.id,
            status: res.statusCode,
            message: 'Berhasil mendapatkan mahasiswa',
            data: mahasiswa
        })
    } catch (error) {
        res.status(400).json({
            id: req.params.id,
            status: res.statusCode,
            message: 'Gagal mendapatkan mahasiswa'
        })
    };
}

export const updateMahasiswa = async (req, res) => {
    const dataMahasiswa = req.body;
    try {
        const updateMahasiswa = await Mahasiswa.update({
            nama: req.body.nama,
            npm: req.body.npm,
            jurusan: req.body.jurusan
        }, {
            where: {
                id: req.params.id,
            }
        });
        if (updateMahasiswa == 0) return error
        const searchmahasiswa = await Mahasiswa.findOne({
            where: {
                id: req.params.id,
            }
        })
        res.status(200).json({
            id: req.params.id,
            status: res.statusCode,
            message: 'Berhasil memperbarui mahasiswa',
            data: searchmahasiswa
        })
    } catch (err) {
        res.status(400).json({
            id: req.params.id,
            status: res.statusCode,
            message: 'Gagal memperbarui mahasiswa'
        })
    }
}

export const deleteMahasiswa = async (req, res) => {
    try {
        const deleteMahasiswa = await Mahasiswa.destroy({
            where: {
                id: req.params.id,
            }
        });
        if (deleteMahasiswa == 0) return error
        res.status(200).json({
            id: req.params.id,
            status: res.statusCode,
            message: 'Berhasil menghapus mahasiswa'
        })
    } catch (err) {
        res.status(400).json({
            id: req.params.id,
            status: res.statusCode,
            message: 'Gagal menghapus mahasiswa'
        })
    }
}

export const postRolePembimbing1 = async (req, res) => {
    const {
        iduser,
        idmahasiswa
    } = req.params

    const pembimbing1Exist = await Mahasiswa.findOne({
        where: {
            idpembimbing1: null,
            id: idmahasiswa
        }
    })
    if (!pembimbing1Exist) return res.status(400).json({
        status: res.statusCode,
        message: 'Mahasiswa Sudah Ada Pembimbing 1 !'
    })

    const userExist = await Mahasiswa.findOne({
        where: {
            id: idmahasiswa,
            [Op.or]: [{
                    idpembimbing1: iduser
                },
                {
                    idpembimbing2: iduser
                },
                {
                    idpenguji: iduser
                }
            ]
        }
    })
    if (userExist) return res.status(400).json({
        status: res.statusCode,
        message: 'Anda sudah menjadi pembimbing/penguji !'
    })

    const AssociationPost = new UserMahasiswa({
        mahasiswaid: idmahasiswa,
        userid: iduser,
    });

    try {
        const association = await AssociationPost.save();
        const updateMahasiswa = await Mahasiswa.update({
            idpembimbing1: iduser,
        }, {
            where: {
                id: idmahasiswa,
            }
        });
        if (updateMahasiswa == 0) return error
        const searchmahasiswa = await Mahasiswa.findOne({
            where: {
                id: idmahasiswa,
            }
        })
        res.status(200).json({
            id: idmahasiswa,
            status: res.statusCode,
            message: 'Berhasil memperbarui mahasiswa',
            data: searchmahasiswa
        })
    } catch (err) {
        res.status(400).json({
            id: idmahasiswa,
            status: res.statusCode,
            message: 'Gagal memperbarui mahasiswa'
        })
    }
}

export const postRolePembimbing2 = async (req, res) => {
    const {
        iduser,
        idmahasiswa
    } = req.params

    const pembimbing2Exist = await Mahasiswa.findOne({
        where: {
            idpembimbing2: null,
            id: idmahasiswa
        }
    })
    if (!pembimbing2Exist) return res.status(400).json({
        status: res.statusCode,
        message: 'Mahasiswa Sudah Ada Pembimbing 2 !'
    })

    const userExist = await Mahasiswa.findOne({
        where: {
            id: idmahasiswa,
            [Op.or]: [{
                    idpembimbing1: iduser
                },
                {
                    idpembimbing2: iduser
                },
                {
                    idpenguji: iduser
                }
            ]
        }
    })
    if (userExist) return res.status(400).json({
        status: res.statusCode,
        message: 'Anda sudah menjadi pembimbing/penguji !'
    })
    const AssociationPost = new UserMahasiswa({
        mahasiswaid: idmahasiswa,
        userid: iduser,
    });

    try {
        const association = await AssociationPost.save();
        const updateMahasiswa = await Mahasiswa.update({
            idpembimbing2: iduser,
        }, {
            where: {
                id: idmahasiswa,
            }
        });
        if (updateMahasiswa == 0) return error
        const searchmahasiswa = await Mahasiswa.findOne({
            where: {
                id: idmahasiswa,
            }
        })
        res.status(200).json({
            id: idmahasiswa,
            status: res.statusCode,
            message: 'Berhasil memperbarui mahasiswa',
            data: searchmahasiswa
        })
    } catch (err) {
        res.status(400).json({
            id: idmahasiswa,
            status: res.statusCode,
            message: 'Gagal memperbarui mahasiswa'
        })
    }
}

export const postRolePenguji = async (req, res) => {
    const {
        iduser,
        idmahasiswa
    } = req.params

    const pengujiExist = await Mahasiswa.findOne({
        where: {
            idpenguji: null,
            id: idmahasiswa
        }
    })
    if (!pengujiExist) return res.status(400).json({
        status: res.statusCode,
        message: 'Mahasiswa Sudah Ada Penguji !'
    })

    const userExist = await Mahasiswa.findOne({
        where: {
            id: idmahasiswa,
            [Op.or]: [{
                    idpembimbing1: iduser
                },
                {
                    idpembimbing2: iduser
                },
                {
                    idpenguji: iduser
                }
            ]
        }
    })
    if (userExist) return res.status(400).json({
        status: res.statusCode,
        message: 'Anda sudah menjadi pembimbing/penguji !'
    })

    const AssociationPost = new UserMahasiswa({
        mahasiswaid: idmahasiswa,
        userid: iduser,
    });

    try {
        const association = await AssociationPost.save();
        const updateMahasiswa = await Mahasiswa.update({
            idpenguji: iduser,
        }, {
            where: {
                id: idmahasiswa,
            }
        });
        if (updateMahasiswa == 0) return error
        const searchmahasiswa = await Mahasiswa.findOne({
            where: {
                id: idmahasiswa,
            }
        })
        res.status(200).json({
            id: idmahasiswa,
            status: res.statusCode,
            message: 'Berhasil memperbarui mahasiswa',
            data: searchmahasiswa
        })
    } catch (err) {
        res.status(400).json({
            id: idmahasiswa,
            status: res.statusCode,
            message: 'Gagal memperbarui mahasiswa'
        })
    }
}

const getPagination = (page, size) => {
    const limit = size ? +size : 10;
    const offset = page ? page * limit : 0;
    return {
        limit,
        offset
    };
};

const getPagingData = (data, page, limit) => {
    const {
        count: totalItems,
        rows: mahasiswa
    } = data;
    const currentPage = page ? +page : 0;
    const totalPages = Math.ceil(totalItems / limit);
    return {
        totalItems,
        mahasiswa,
        totalPages,
        currentPage
    };
};

export const getMahasiswaPagination = async (req, res) => {
    const {
        page,
        size
    } = req.query
    const {
        limit,
        offset
    } = getPagination(page, size)

    try {
        const mahasiswa = await Mahasiswa.findAndCountAll({
                limit: limit,
                offset: offset,
                include: {
                    model: Users,
                    attributes: ['id', 'name', 'email']
                },
                distinct: true,
            })
            .then(data => {
                const response = getPagingData(data, page, limit)
                res.status(200).json({
                    id: req.params.id,
                    status: res.statusCode,
                    message: 'Berhasil mendapatkan mahasiswa',
                    data: response
                })
            })
    } catch (err) {
        res.status(400).json({
            id: req.params.id,
            status: res.statusCode,
            message: 'Gagal mendapatkan mahasiswa'
        })
    };
}

export const searchMahasiswaPagination = async (req, res) => {
    const {
        page,
        size,
        search
    } = req.query
    const {
        limit,
        offset
    } = getPagination(page, size)

    try {
        const mahasiswa = await Mahasiswa.findAndCountAll({
                limit: limit,
                offset: offset,
                where: {
                    [Op.or]: [{
                            npm: {
                                [Op.like]: `%${search}%`
                            }
                        },
                        {
                            nama: {
                                [Op.like]: `%${search}%`
                            }
                        }
                    ]
                },
                include: {
                    model: Users,
                    attributes: ['id', 'name', 'email']
                },
                distinct: true,
            })
            .then(data => {
                const response = getPagingData(data, page, limit)
                res.status(200).json({
                    id: req.params.id,
                    status: res.statusCode,
                    message: 'Berhasil mendapatkan mahasiswa',
                    data: response
                })
            })
    } catch (err) {
        res.status(400).json({
            id: req.params.id,
            status: res.statusCode,
            message: 'Gagal mendapatkan mahasiswa'
        })
    };
}

export const updateIpkMahasiswa = async (req, res) => {
    const idpembimbing1 = req.params.idpembimbing1
    const pembimbing1 = await Users.findOne({
        where: {
            id: idpembimbing1
        }
    })
    if (!pembimbing1) return res.status(400).json({
        status: res.statusCode,
        message: 'Pembimbing1 tidak ada !'
    })

    const idpembimbing2 = req.params.idpembimbing2
    const pembimbing2 = await Users.findOne({
        where: {
            id: idpembimbing1
        }
    })
    if (!pembimbing2) return res.status(400).json({
        status: res.statusCode,
        message: 'Pembimbing1 tidak ada !'
    })

    const idpenguji = req.params.idpenguji
    const penguji = await Users.findOne({
        where: {
            id: idpenguji
        }
    })
    if (!penguji) return res.status(400).json({
        status: res.statusCode,
        message: 'Pembimbing1 tidak ada !'
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

    var ipk = 0.0
    var am1 = 0.0
    var am2 = 0.0
    var am3 = 0.0
    var am4 = 0.0
    var am5 = 0.0
    var am6 = 0.0

    try {
        const matkul1pembimbing1 = await Matkul1.findAll({
            where: {
                iduser: idpembimbing1,
                idmahasiswa: idmahasiswa
            }
        })
        if (!matkul1pembimbing1) return err

        const matkul2pembimbing1 = await Matkul2.findAll({
            where: {
                iduser: idpembimbing1,
                idmahasiswa: idmahasiswa
            }
        })
        if (!matkul2pembimbing1) return err

        const matkul3pembimbing1 = await Matkul3.findAll({
            where: {
                iduser: idpembimbing1,
                idmahasiswa: idmahasiswa
            }
        })
        if (!matkul3pembimbing1) return err

        const matkul4pembimbing1 = await Matkul4.findAll({
            where: {
                iduser: idpembimbing1,
                idmahasiswa: idmahasiswa
            }
        })
        if (!matkul4pembimbing1) return err

        const matkul5pembimbing1 = await Matkul5.findAll({
            where: {
                iduser: idpembimbing1,
                idmahasiswa: idmahasiswa
            }
        })
        if (!matkul5pembimbing1) return err

        const matkul6pembimbing1 = await Matkul6.findAll({
            where: {
                iduser: idpembimbing1,
                idmahasiswa: idmahasiswa
            }
        })
        if (!matkul6pembimbing1) return err

        const matkul1pembimbing2 = await Matkul1.findAll({
            where: {
                iduser: idpembimbing2,
                idmahasiswa: idmahasiswa
            }
        })
        if (!matkul1pembimbing2) return err

        const matkul2pembimbing2 = await Matkul2.findAll({
            where: {
                iduser: idpembimbing2,
                idmahasiswa: idmahasiswa
            }
        })
        if (!matkul2pembimbing2) return err

        const matkul3pembimbing2 = await Matkul3.findAll({
            where: {
                iduser: idpembimbing2,
                idmahasiswa: idmahasiswa
            }
        })
        if (!matkul3pembimbing2) return err

        const matkul4pembimbing2 = await Matkul4.findAll({
            where: {
                iduser: idpembimbing2,
                idmahasiswa: idmahasiswa
            }
        })
        if (!matkul4pembimbing2) return err

        const matkul5pembimbing2 = await Matkul5.findAll({
            where: {
                iduser: idpembimbing2,
                idmahasiswa: idmahasiswa
            }
        })
        if (!matkul5pembimbing2) return err

        const matkul6pembimbing2 = await Matkul6.findAll({
            where: {
                iduser: idpembimbing2,
                idmahasiswa: idmahasiswa
            }
        })
        if (!matkul6pembimbing2) return err

        const matkul1penguji = await Matkul1.findAll({
            where: {
                iduser: idpenguji,
                idmahasiswa: idmahasiswa
            }
        })
        if (!matkul1penguji) return err

        const matkul2penguji = await Matkul2.findAll({
            where: {
                iduser: idpenguji,
                idmahasiswa: idmahasiswa
            }
        })
        if (!matkul2penguji) return err

        const matkul3penguji = await Matkul3.findAll({
            where: {
                iduser: idpenguji,
                idmahasiswa: idmahasiswa
            }
        })
        if (!matkul3penguji) return err

        const matkul4penguji = await Matkul4.findAll({
            where: {
                iduser: idpenguji,
                idmahasiswa: idmahasiswa
            }
        })
        if (!matkul4penguji) return err

        const matkul5penguji = await Matkul5.findAll({
            where: {
                iduser: idpenguji,
                idmahasiswa: idmahasiswa
            }
        })
        if (!matkul5penguji) return err

        const matkul6penguji = await Matkul6.findAll({
            where: {
                iduser: idpenguji,
                idmahasiswa: idmahasiswa
            }
        })
        if (!matkul6penguji) return err

        const avgnilaimatkul1 = parseInt(((matkul1pembimbing1[0].average) + (matkul1pembimbing2[0].average) + (matkul1penguji[0].average))/3)
        const avgnilaimatkul2 = parseInt(((matkul2pembimbing1[0].average) + (matkul2pembimbing2[0].average) + (matkul2penguji[0].average))/3)
        const avgnilaimatkul3 = parseInt(((matkul3pembimbing1[0].average) + (matkul3pembimbing2[0].average) + (matkul3penguji[0].average))/3)
        const avgnilaimatkul4 = parseInt(((matkul4pembimbing1[0].average) + (matkul4pembimbing2[0].average) + (matkul4penguji[0].average))/3)
        const avgnilaimatkul5 = parseInt(((matkul5pembimbing1[0].average) + (matkul5pembimbing2[0].average) + (matkul5penguji[0].average))/3)
        const avgnilaimatkul6 = parseInt(((matkul6pembimbing1[0].average) + (matkul6pembimbing2[0].average) + (matkul6penguji[0].average))/3)

        const hurufmutumatkul1final = HurufMutu(avgnilaimatkul1)
        const hurufmutumatkul2final = HurufMutu(avgnilaimatkul2)
        const hurufmutumatkul3final = HurufMutu(avgnilaimatkul3)
        const hurufmutumatkul4final = HurufMutu(avgnilaimatkul4)
        const hurufmutumatkul5final = HurufMutu(avgnilaimatkul5)
        const hurufmutumatkul6final = HurufMutu(avgnilaimatkul6)

        const totalam1 = AngkaMutu(hurufmutumatkul1final)
        const totalam2 = AngkaMutu(hurufmutumatkul2final)
        const totalam3 = AngkaMutu(hurufmutumatkul3final)
        const totalam4 = AngkaMutu(hurufmutumatkul4final)
        const totalam5 = AngkaMutu(hurufmutumatkul5final)
        const totalam6 = AngkaMutu(hurufmutumatkul6final)
        am1 = totalam1
        am2 = totalam2
        am3 = totalam3
        am4 = totalam4
        am5 = totalam5
        am6 = totalam6

        const totalskspembimbing1 = matkul1pembimbing1[0].sks + matkul2pembimbing1[0].sks + matkul3pembimbing1[0].sks + matkul4pembimbing1[0].sks + matkul5pembimbing1[0].sks + matkul6pembimbing1[0].sks
        const totalnilaimutupembimbing1 = matkul1pembimbing1[0].nilaimutu + matkul2pembimbing1[0].nilaimutu + matkul3pembimbing1[0].nilaimutu + matkul4pembimbing1[0].nilaimutu + matkul5pembimbing1[0].nilaimutu + matkul6pembimbing1[0].nilaimutu
        const totalskspembimbing2 = matkul1pembimbing2[0].sks + matkul2pembimbing2[0].sks + matkul3pembimbing2[0].sks + matkul4pembimbing2[0].sks + matkul5pembimbing2[0].sks + matkul6pembimbing2[0].sks
        const totalnilaimutupembimbing2 = matkul1pembimbing2[0].nilaimutu + matkul2pembimbing2[0].nilaimutu + matkul3pembimbing2[0].nilaimutu + matkul4pembimbing2[0].nilaimutu + matkul5pembimbing2[0].nilaimutu + matkul6pembimbing2[0].nilaimutu
        const totalskspenguji = matkul1penguji[0].sks + matkul2penguji[0].sks + matkul3penguji[0].sks + matkul4penguji[0].sks + matkul5penguji[0].sks + matkul6penguji[0].sks
        const totalnilaimutupenguji = matkul1penguji[0].nilaimutu + matkul2penguji[0].nilaimutu + matkul3penguji[0].nilaimutu + matkul4penguji[0].nilaimutu + matkul5penguji[0].nilaimutu + matkul6penguji[0].nilaimutu
        ipk = (((40/100) * (totalnilaimutupembimbing1/totalskspembimbing1)) + ((40/100) * (totalnilaimutupembimbing2/totalskspembimbing2)) + ((30/100) * (totalnilaimutupenguji/totalskspenguji)))
    } catch (err) {
        return res.status(400).json({
            status: res.statusCode,
            message: 'Nilai Mahasiswa belum lengkap !'
        })
    }


    try {
        const updateMahasiswa = await Mahasiswa.update({
            ipk: ipk,
            am1: am1,
            am2: am2,
            am3: am3,
            am4: am4,
            am5: am5,
            am6: am6,
        }, {
            where: {
                id: idmahasiswa
            }
        });
        if (updateMahasiswa == 0) return error
        const searchmahasiswa = await Mahasiswa.findOne({
            where: {
                id: idmahasiswa,
            }
        })
        res.status(200).json({
            id: req.params.id,
            status: res.statusCode,
            message: 'Berhasil memperbarui mahasiswa',
            data: searchmahasiswa
        })
    } catch (err) {
        res.status(400).json({
            id: req.params.id,
            status: res.statusCode,
            message: 'Gagal memperbarui mahasiswa'
        })
    }
}