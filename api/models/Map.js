const { Schema, model } = require('mongoose');

const mapSchema = new Schema(
  {
    type: {
      type: String,
      required: true,
    },
    arcs: {
      type: Array,
      required: true,
    },
    transform: {
      type: Object,
      required: true,
    },
    objects: {
      type: Object,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = model('map', mapSchema);
