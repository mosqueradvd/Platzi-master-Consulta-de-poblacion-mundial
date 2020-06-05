const { Schema, model } = require('mongoose');

const countriesSchema = new Schema({
  country: {
    type: String,
    required: true
  },
  years: {
    type: Array,
    required: true
  },
  population: {
    type: String,
    required: true
  },
  yearlyChange: {
    type: String,
    required: true
  },
  netChange: {
    type: String,
    required: true
  },
  density: {
    type: Number,
    required: true
  },
  landArea: {
    type: String,
    required: true
  },
  migrants: {
    type: String,
    required: true
  },
  fertRate: {
    type: String,
    required: true
  },
  medAge: {
    type: String,
    required: true
  },
  urbanPop: {
    type: String,
    required: true
  },
  worldShare: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

module.exports = model('countries', countriesSchema);