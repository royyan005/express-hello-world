import Mahasiswa from "../models/mahasiswa.js";

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
        const mahasiswa = await Mahasiswa.findOne({
            where: {
                id: req.params.id,
            }
        })
        if (mahasiswa === null) return error
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