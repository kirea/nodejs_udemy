const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongoConnect = (callback) => {
  MongoClient.connect('mongodb://root:root@localhost:27017/')
    .then(client => {
      callback(client);
    })
    .catch(error => {
      console.error(error);
    });
};

module.exports = mongoConnect;