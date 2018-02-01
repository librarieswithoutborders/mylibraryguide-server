var Subcollection = require('../models/Subcollection');

exports.full_list = function(req, res) {
  // res.json({hello:"hello!"})
  Subcollection.find().exec((err, data) => {
    if (err) { res.send(err) }
    res.json(data)
  })
};

// Display list of all books.
exports.create = function(req, res) {
  Subcollection.create({title: "test", short_description:"Lorem Ipsum", slug:"test"}, (err, data) => {
    if (err) { res.send(err) }
    res.json(data)
  })
};

exports.delete = function(req, res) {
  Subcollection.findByIdAndRemove(req.params.id, (err, data) => {
    // We'll create a simple object to send back with a message and the id of the document that was removed
    // You can really do this however you want, though.
    let response = {
        message: "Subcollection successfully deleted",
        id: data._id
    };
    res.status(200).send(response);
  })
};

// Display detail page for a specific book.
exports.find_by_id = function(req, res) {
    Subcollection.findById(req.params.id, function(err, data) {
      if (err) { res.send(err) }
      res.json(data);
    });
};