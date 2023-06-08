const { Router } = require("express");

const router = Router();
const routes = require("./routes");

router.get("/", async (req, res) => {
    routes.index(req, res);
})

module.exports = router;