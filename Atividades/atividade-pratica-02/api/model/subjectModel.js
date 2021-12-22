var mongoose = require("mongoose");

var subjectSchema = mongoose.Schema({
  price: {
    require: true,
    type: Number,
  },
  name: {
    require: true,
    type: String,
  },
  update_at: {
    require: false,
    type: Date,
  },
  created_at: {
    require: false,
    type: Date,
  },
});

var Subject = (module.exports = mongoose.model("subject", subjectSchema));

module.exports.get = function (callback, limit) {
  Subject.find(callback).limit(limit);
};
