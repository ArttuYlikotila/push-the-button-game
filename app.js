const express = require('express');
const path = require('path');
const port = process.env.PORT || 4000;
const app = express();

let counter = 0;

if (process.env.NODE_ENV !== 'production') {
   app.use(express.static(path.join(__dirname, 'client/public')));
}
else {
   app.use(express.static(path.join(__dirname, 'client/build')));
}

app.get('/click', (req, res) => {
   let reward = addCount();

   res.send(`${reward}`);
});

function addCount() {
   counter += 1;
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
      return -1;
   }
};

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