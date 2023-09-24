const express = require("express");
const router = express.Router();
const CandidateController = require("../controllers/candidates");
const candidateController = new CandidateController();
router.get("/", candidateController.getAllCandidates);

module.exports = router;
