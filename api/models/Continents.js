const { Schema, model } = require('mongoose');

const continentsSchema = new Schema({
  continent: {
    type: String,
    required: true
  },
  countries: {
    type: Array,
    required: true
  }
}, {
  timestamps: true
});

module.exports = model('continents', continentsSchema);