const CandidateService = require("../service/candidates");
class CandidateController {
  constructor() {
    this.candidateService = new CandidateService();
  }
  getAllCandidates = async (req, res, next) => {
    const result = await this.candidateService.getAllCandiates();
    res.send(result);
  };
}

module.exports = CandidateController;
