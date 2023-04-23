const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true
      },
  name: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Company', companySchema);
