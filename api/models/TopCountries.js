const { Schema, model } = require('mongoose');

const topCountriesSchema = new Schema(
  {
    rank: {
      type: Number,
      required: true,
    },
    flag: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    population: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model('top-countries', topCountriesSchema);
