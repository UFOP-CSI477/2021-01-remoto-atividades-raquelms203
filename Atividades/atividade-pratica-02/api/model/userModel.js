var mongoose = require("mongoose");

var userSchema = mongoose.Schema({
  name: {
    require: true,
    type: String,
  },
  email: {
    require: true,
    type: String,
  },
  password: {
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

var Subject = (module.exports = mongoose.model("user", userSchema));

module.exports.get = function (callback, limit) {
  Subject.find(callback).limit(limit);
};
