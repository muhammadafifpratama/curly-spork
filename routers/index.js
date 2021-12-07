const router = require("express").Router();
const maparoute= require("./mapa_router")

router.use("/mapa", maparoute)

module.exports = router;