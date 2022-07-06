'use strict';

module.exports.main = async (event) => {
  console.log("lambda1");
  console.log(event);

  const key = event.detail?.object?.key;
  
  if (!key.includes("video")) {
    return {
      statusCode: 400,
      body: JSON.stringify(
        {
          message: 'El nombre del archivo no contiene la palabra video',
          input: event,
        },
        null,
        2
      ),
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Lambda 1',
        input: event,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
