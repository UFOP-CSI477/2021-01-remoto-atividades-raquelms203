Request = require("../model/requestModel");
functions = require("../utils/functions");

exports.index = function (_, res) {
  Request.get(function (err, requests) {
    if (err)
      res.json({
        status: "error",
        message: err,
      });
    else
      res.json({
        status: "success",
        message: "ok",
        data: requests,
      });
  });
};

exports.new = function (req, res) {
  var request = new Request();
  request.user_id = req.body.user_id;
  request.subject_id = req.body.subject_id;
  request.user_id = req.body.user_id;
  request.person = req.body.person;
  request.description = req.body.description;
  request.date = req.body.date;
  request.created_at = functions.dateToUtc(new Date());
  request.update_at = functions.dateToUtc(new Date());
  request.date = functions.dateToUtc(new Date());

  request.save(function (err) {
    if (err) res.json(err);
    else
      res.json({
        message: "ok",
        data: request,
      });
  });
};

exports.view = function (req, res) {
  Request.findById(req.params.request_id, function (err, request) {
    if (err) res.send(err);
    else
      res.json({
        message: "1 request found",
        data: request,
      });
  });
};

exports.update = function (req, res) {
  Request.findById(req.params.request_id, function (err, request) {
    if (err) res.send(err);
    else {
      request.person = req.body.person ? req.body.person : request.person;
      request.description = req.body.description
        ? req.body.description
        : request.description;
      request.date = req.body.date ? req.body.date : request.date;
      request.update_at = functions.dateToUtc(new Date());

      request.save(function (err) {
        if (err) res.json(err);
        else res.json({ message: "ok", data: request });
      });
    }
  });
};

exports.delete = function (req, res) {
  Request.deleteOne(
    {
      _id: req.params.request_id,
    },
    function (err, _) {
      if (err) res.send(err);
      else res.json({ status: "ok", message: "request deleted" });
    }
  );
};
