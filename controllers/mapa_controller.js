const { mapa, mapa_adendum, ewp } = require("../models")
const postgres = require("../services/connection")

module.exports = {
    cek: (req, res) => {
        postgres.query("select * from mahasiswa", (error, results) => {
            if (error) {
                throw error
            }
            res.status(200).json(results)
        })
    },
    tes: (req, res) => {
        res.status(200).send(req.body.tes)
    },
    get_ewp: async (req, res) => {
        try {
            const r = await ewp.findAll()
            res.status(200).send(r)
        } catch (e) {
            res.status(500).json({
                status: "failed",
                message: "Internal Server Error !",
                error: e,
            });
        }
    },
    add_ewp: async (req, res) => {
        try {
            var { pn_kepala_uka, project_name, info_team_audit, audit_type_kode, status, status_persetujuan, number_adendum, info_periode_pelaksanaan_start, info_periode_pelaksanaan_end } = req.body;
            const r = ewp.create({ pn_kepala_uka, project_name, info_team_audit, audit_type_kode, status, status_persetujuan, number_adendum, info_periode_pelaksanaan_start, info_periode_pelaksanaan_end })
            res.status(200).send(r)
        } catch (e) {
            res.status(500).json({
                status: "failed",
                message: "Internal Server Error !",
                error: e,
            });
        }
    },
    get_mapa: (req, res) => {
        mapa.findAll({ attributes: ['latar_belakang', "tujuan", "sumber informasi"] })
            .then(user => { res.status(200).send(user) })
    },
    get_adendum: (req, res) => {
        mapa_adendum.findAll()
            .then(user => { res.status(200).send(user) })
    },
    create_latar_belakang: (req, res) => {
        mapa.create({ latar_belakang: `${req.body.latar_belakang}` })
            .then(user => { res.status(200).send(user) })
    },
}