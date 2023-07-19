const AWS = require('aws-sdk');
AWS.config.update({region:'us-west-2'})
const lexruntime = new AWS.LexRuntime();
const lexClient = new AWS.LexRuntimeV2();

const detectIntent = async (params) => {
    let recog = await lexClient.recognizeText(params).promise();
    return recog;
}


module.exports = {
    detectIntent
}
