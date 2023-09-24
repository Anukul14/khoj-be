const DatabaseContext = require("../database");
class CandidateService {
  constructor(db) {
    this.db = db || DatabaseContext.db;
  }
  getAllCandiates = async () => {
    return await this.db.Candidate.findAll();
  };
}

module.exports = CandidateService;
