const ObjectId = require('mongodb').ObjectId;
const { dbs } = require('../dbs');

const detail = async (id) => {
  const results = await dbs.production.collection('category').find({_id: ObjectId(id)})
    .toArray();
  return results[0];
};

module.exports.list = async () => {
  return await dbs.production.collection('category').find({})
    .toArray();
};

module.exports.add = async (category) => {
  return await dbs.production.collection('category').insertOne(category);
};


exports.detail = detail;