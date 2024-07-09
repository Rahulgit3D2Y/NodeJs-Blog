const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    defalut: Date.now,
  },
  updatedAt: {
    type: date,
    default: date.now,
  },
});

module.exports = mongoose.Schema("Post", PostSchema);
