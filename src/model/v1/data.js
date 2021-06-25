const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DataSchema = new Schema(
  {
    inputString: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = User = mongoose.model('data', DataSchema);
