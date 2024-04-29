// membuat variable router dengan require atau export variabel express
// Dan menggunakan metode Router
const router = require("express").Router();
// export controller yang ingin dipakai
const timnasController = require("../controllers/timnasController");

// endpoint mahasiswa
router.get("/timnas/detail/:id", timnasController.viewDetail);
router.get("/homepage", timnasController.viewHomepage);
router.get("/", timnasController.viewTimnas); // Untuk view
router.post("/", timnasController.addTimnas);
router.put("/", timnasController.editTimnas);
router.delete("/:id", timnasController.deleteTimnas);

// Lalu export routernya
module.exports = router;
