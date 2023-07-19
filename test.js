// const AWS = require('aws-sdk');
// AWS.config.update({region:'us-west-2'})
// const lexruntime = new AWS.LexRuntime();


// function detectIntent(botName, botAlias, userId, messageText) {
//     const params = {
//       botName: botName,
//       botAlias: botAlias,
//       userId: userId,
//       inputText: messageText
//     };
  
//     lexruntime.postText(params, function(err, data) {
//       if (err) {
//         console.error('Error:', err);
//       } else {
//         console.log('Intent:', data.intentName);
//         console.log('Response:', data.message);
//       }
//     });
//   }


//   const botName = 'cityexperiences';
//   const botAlias = 'TestBotAlias';
//   const userId = 'dipankar123';
//   const messageText = 'get me a tour';
  
//   detectIntent(botName, botAlias, userId, messageText);


const AWS = require('aws-sdk');
AWS.config.update({region:'us-west-2'})
const lexModelBuildingService = new AWS.LexModelBuildingService();
const lexModels = new AWS.LexModelsV2();
const lexClient = new AWS.LexRuntimeV2();

// const params = {};

// lexModelBuildingService.getBotAliases(params, function(err, data) {
//   if (err) {
//     console.error('Error:', err);
//   } else {
//     console.log('Bot Aliases:', data.botAliases);
//   }
// });

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

(async () => {
    const bots = await lexModels.listBots().promise()
    // console.log(JSON.stringify({bots}, 0 , 2));
    const botDetails = await lexModels.describeBot({botId: bots.botSummaries[0].botId}).promise();
    // console.log(JSON.stringify({botDetails}, 0, 2));
    const botAlias = await lexModels.listBotAliases({botId: bots.botSummaries[0].botId}).promise();
    // console.log(JSON.stringify({botAlias}, 0, 2));


    // Define the input text and session ID
let inputText = 'get me a tour';
const sessionId = 'dipankar123'; // Replace with your own session ID

// Define the request parameters
const params = {
  botId: bots.botSummaries[0].botId,
  botAliasId: botAlias.botAliasSummaries[0].botAliasId,
  localeId: 'en_US',
  sessionId: sessionId,
  text: inputText
};
console.log({params})

// Call the recognizeText method to detect the intent
// let recog = await lexClient.recognizeText(params).promise();
// console.log(JSON.stringify({recog}, 0, 2));

// await delay(1000);
// inputText = 'US';
// recog = await lexClient.recognizeText(params).promise();
// console.log(JSON.stringify({recog}, 0, 2));

// await delay(1000);
// inputText = 'chicago';
// recog = await lexClient.recognizeText(params).promise();
// console.log(JSON.stringify({recog}, 0, 2));

})();

