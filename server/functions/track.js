const { client, q } = require('../services/db');

exports.handler = async function(event, context, callback) {
  const { queryStringParameters: { e } } = event;
  console.log({
    data: {
      email: e,
    }
  });
  return client.query(q.Create(q.Ref("classes/emails"), {
    email: e,
  })).then((res)=>{
    return callback(null, {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Got you!',
        result: {},
      })
    });
  }).catch(({ message })=>{
    return callback(null, {
      statusCode: 500,
      body: JSON.stringify({
        message,
        result: {},
      })
    });
  });
}