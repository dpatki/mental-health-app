var express = require('express');
var router = express.Router();
const ObjcectID = require('mongodb').ObjectID;


/* GET home page. */
router.get('/scale', function(req, res, next) {
  req.collection.find({})
    .toArray()
    .then(results => res.json(results))
    .catch(error => res.send(error));
});

router.post('/scale', (req, res, next) => {
  const {entryDate, entryValue, sleepValue, comments} = req.body;
  if(!entryDate || !entryValue || !sleepValue) {
    return res.status(400).json({
      message: 'Bad request, try again',
    });
  }


  const payload = {entryDate, entryValue, sleepValue, comments};
  req.collection.insertOne(payload)
    .then(results =>res.json(result))
    .catch(error => res.send(error));
})

router.delete('/scale/:id', (req, res, next) => {
  const {id} = req.params;
  const _id = ObjectID(id);
  req.collecton.deleteOne({_id})
    .then(result => res.json(result))
    .catch(error => res.send(error));
});
module.exports = router;
