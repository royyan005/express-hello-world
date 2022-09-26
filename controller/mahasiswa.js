import Mahasiswa from "../models/mahasiswa.js";
import Users from "../models/user.js";
import {
    Op
} from "sequelize"

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
    let mahasiswa = []
    try {
        const searchmahasiswa = await Mahasiswa.findAll({
            where: {
                id: req.params.id,
            }
        })
        if (searchmahasiswa === null) return error

        const pembimbing1 = await Users.findAll({
            where: {
                id: searchmahasiswa[0].idpembimbing1,
            },
            attributes: ['id', 'name', 'email']
        })

        const pembimbing2 = await Users.findAll({
            where: {
                id: searchmahasiswa[0].idpembimbing2,
            },
            attributes: ['id', 'name', 'email']
        })

        const penguji = await Users.findAll({
            where: {
                id: searchmahasiswa[0].idpenguji,
            },
            attributes: ['id', 'name', 'email']
        })

        mahasiswa.push({
            mahasiswa: searchmahasiswa,
            pembimbing1: pembimbing1,
            pembimbing2: pembimbing2,
            penguji: penguji
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
    const { iduser, idmahasiswa } = req.params
    
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
            [Op.or]: [
                { idpembimbing1: iduser },
                { idpembimbing2: iduser },
                { idpenguji: iduser }
              ]
        }
    })
    if (userExist) return res.status(400).json({
        status: res.statusCode,
        message: 'Anda sudah menjadi pembimbing/penguji !'
    })

    try {
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
    const { iduser, idmahasiswa } = req.params
    
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
            [Op.or]: [
                { idpembimbing1: iduser },
                { idpembimbing2: iduser },
                { idpenguji: iduser }
              ]
        }
    })
    if (userExist) return res.status(400).json({
        status: res.statusCode,
        message: 'Anda sudah menjadi pembimbing/penguji !'
    })

    try {
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
    const { iduser, idmahasiswa } = req.params
    
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
            [Op.or]: [
                { idpembimbing1: iduser },
                { idpembimbing2: iduser },
                { idpenguji: iduser }
              ]
        }
    })
    if (userExist) return res.status(400).json({
        status: res.statusCode,
        message: 'Anda sudah menjadi pembimbing/penguji !'
    })

    try {
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
                offset: offset
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
                    }]
                }
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