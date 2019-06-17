const ObjectId = require('mongodb').ObjectId;
const { dbs } = require('../dbs');

const detail = async (id) => {
  const results = await dbs.production.collection('user').find({_id: ObjectId(id)})
    .toArray();
  return results[0];
};

module.exports.list = async () => {
  return await dbs.production.collection('user').find({})
    .toArray();
};

module.exports.edit = async (id) => {
    return await dbs.production.collection('user').find({_id: ObjectId(id)})
      .toArray();
};

module.exports.add = async (user) => {
  return await dbs.production.collection('user').insertOne(user);
};

module.exports.editDone = async (user) => {
    return await dbs.production.collection('user').updateOne({ _id: user._id }, user, function(err, res) {
        if (err) throw err;
        console.log("1 document updated");
        db.close();
      });
};

module.exports.delete = async (id) => {
    return await dbs.production.collection('user').deleteOne({_id: ObjectId(id)})
      .toArray();
};


exports.detail = detail;