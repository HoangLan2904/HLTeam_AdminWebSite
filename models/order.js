const ObjectId = require('mongodb').ObjectId;
const { dbs } = require('../dbs');

const detail = async (id) => {
  const results = await dbs.production.collection('orders').find({_id: ObjectId(id)})
    .toArray();
  return results[0];
};

module.exports.listDelivering = async () => {
  return await dbs.production.collection('orders').find({status: "delivering"})
    .toArray();
};

module.exports.listDone = async () => {
    return await dbs.production.collection('orders').find({status: "done"})
    .toArray();
};

module.exports.listReceive = async () => {
    return await dbs.production.collection('orders').find({status: "receive"})
    .toArray();
};

module.exports.add = async (order) => {
  return await dbs.production.collection('orders').insertOne(order);
};


exports.detail = detail;