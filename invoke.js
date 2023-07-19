const { v4: uuidv4 } = require('uuid');
const {detectIntent} = require('./model');
const qa = require('./QA.json');

const botId = 'QZNFLURRSV';
const botAliasId = 'TSTALIASID';
const localeId = 'en_US';
const sessionId = uuidv4();;

const invoke = async ({text}) => {
    let params = {
        botId,
        botAliasId,
        localeId,
        sessionId,
        text
      };
      const intentDetails = await detectIntent(params);
      console.log(JSON.stringify({intentDetails}, 0, 2));
      let {sessionState: {intent}} = intentDetails;
      let qaObj = qa[intent.name];
      console.log('USER:', params.text);
      console.log(JSON.stringify({qaObj}, 0, 2));
};

(async () => {
const u = [
    'make a reservation',
    'yes',
    'canada'
];

for (const q of u) {
    await invoke({text: q});
    console.log('==========');
}

})();

