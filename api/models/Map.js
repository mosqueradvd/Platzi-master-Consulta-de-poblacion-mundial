const { Schema, model } = require('mongoose');

const mapSchema = new Schema({
  type: {
    type: String,
  },
  arcs: {
    type: Array,
  },
  transform: {
    type: Object,
  },
  objects: {
    type: Object,
  },
});

module.exports = model('map', mapSchema);
