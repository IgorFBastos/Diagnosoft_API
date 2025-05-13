// routes/formRoutes.js
const express = require("express");
const router = express.Router();
const { createForm, listForm } = require("../controllers/formController");

router.post("/create", createForm);
router.get("/list/:id", listForm)

module.exports = router;
