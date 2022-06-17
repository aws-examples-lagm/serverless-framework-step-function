'use strict';

module.exports.main = async (event) => {
  console.log("lambda1");
  console.log(event);
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
