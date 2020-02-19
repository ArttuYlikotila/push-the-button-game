const express = require('express');
const path = require('path');
const port = process.env.PORT || 4000;
const app = express();

let counter = 0;
let nextReward = 10;

if (process.env.NODE_ENV !== 'production') {
   app.use(express.static(path.join(__dirname, 'client/public')));
}
else {
   app.use(express.static(path.join(__dirname, 'client/build')));
}

app.get('/click', (req, res) => {
   counter += 1;

   const reward = askReward();
   const estimate = estimateNext();
   const returnObject = composeJson(reward, estimate);

   res.json(returnObject);
});

function askReward() {
   console.log('Clicks = ' + counter);
   if (counter % 500 == 0) {
      console.log('Reward activated @ ' + counter + ' clicks');
      return 250;
   }
   else if (counter % 100 == 0) {
      console.log('Reward activated @ ' + counter + ' clicks');
      return 40;
   }
   else if (counter % 10 == 0) {
      console.log('Reward activated @ ' + counter + ' clicks');
      return 5;
   }
   else {
      return 0;
   }
};

function estimateNext() {
   nextReward -= 1;

   if (nextReward === 0) {
      nextReward = 10;
   }
   return nextReward;
};

function composeJson(reward, estimate) {
   const current = { 'reward' : reward, 'estimate' : estimate };
   return current;
}

if (process.env.NODE_ENV !== 'production') {
   app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname + '/client/public/index.html'));
   });
}
else {
   app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname + '/client/build/index.html'));
   });
}

app.listen(port, () => console.log(`Listening on port ${port}.`));