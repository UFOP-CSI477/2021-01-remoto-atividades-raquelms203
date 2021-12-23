Subject = require("../model/subjectModel");
functions = require("../utils/functions");

exports.index = function (_, res) {
  Subject.get(function (err, subjects) {
    if (err)
      res.json({
        status: "error",
        message: err,
      });
    else
      res.json({
        status: "success",
        message: "ok",
        data: subjects,
      });
  });
};

exports.new = function (req, res) {
  var subject = new Subject();

  subject.price = req.body.price;
  subject.name = req.body.name;
  subject.created_at = functions.dateToUtc(new Date());
  subject.update_at = functions.dateToUtc(new Date());

  subject.save(function (err) {
    if (err) res.json(err);
    else
      res.json({
        message: "ok",
        data: subject,
      });
  });
};

exports.view = function (req, res) {
  Subject.findById(req.params.subject_id, function (err, subject) {
    if (err) res.send(err);
    else
      res.json({
        message: "1 subject found",
        data: subject,
      });
  });
};

exports.update = function (req, res) {
  Subject.findById(req.params.subject_id, function (err, subject) {
    if (err) res.send(err);
    else {
      subject.name = req.body.name ? req.body.name : subject.name;
      subject.price = req.body.price ? req.body.price : subject.price;
      subject.update_at = functions.dateToUtc(new Date());

      subject.save(function (err) {
        if (err) res.json(err);
        else res.json({ message: "ok", data: subject });
      });
    }
  });
};

exports.delete = function (req, res) {
  Subject.deleteOne(
    {
      _id: req.params.subject_id,
    },
    function (err, _) {
      if (err) res.send(err);
      else res.json({ status: "ok", message: "subject deleted" });
    }
  );
};
