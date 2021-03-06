const mongoose = require('mongoose');

const dbConnection = _ => {
  // const prodURI =  process.env.MONGODBURI || 'mongodb://localhost:27017/commecify';
  // const testURI =  process.env.TEST_MONGODBURI || 'mongodb://localhost:27017/commecify_test';

  // console.log('process.env.TEST_MONGODBURI', process.env.NODE_ENV)
  // console.log('process.env.MONGODBURI', process.env.MONGODBURI)

  const uri = process.env.NODE_ENV === 'test' ? process.env.TEST_MONGODBURI : process.env.MONGODBURI ;
  const options = { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false };

  // console.log('process.env.TEST_MONGODBURI', process.env.TEST_MONGODBURI)
  // console.log('test URI', testURI)
  // console.log('uri', uri)


  mongoose.connect(uri, options,  err => {
    if (err) {
      return console.log('failed to connect to DB ', err);
    }
    return console.log('connect to DB ', uri);
  });
};

module.exports = dbConnection;