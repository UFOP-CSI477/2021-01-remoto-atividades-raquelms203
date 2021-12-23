var mongoose = require("mongoose");

var requestSchema = mongoose.Schema({
  user_id: {
    require: true,
    type: String,
  },
  request_id: {
    require: true,
    type: String,
  },
  person: {
    require: true,
    type: String,
  },
  description: {
    require: true,
    type: String,
  },
  date: {
    require: true,
    type: Date,
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

var Subject = (module.exports = mongoose.model("request", requestSchema));

module.exports.get = function (callback, limit) {
  Subject.find(callback).limit(limit);
};
