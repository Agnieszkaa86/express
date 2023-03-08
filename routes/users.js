const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    res.json([{ id: "455865", name: "Agnieszka" }])
});

module.exports = {
userRouter: router,
}