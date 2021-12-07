const router = require("express").Router();
const { get_mapa, tes, get_ewp , cek, add_ewp} = require("../controllers/mapa_controller")

router.get("/mapa", get_mapa);
router.get("/ewp", get_ewp);
router.post("/ewp", add_ewp);
router.get("/", tes);
router.get("/cek", cek);

module.exports = router;