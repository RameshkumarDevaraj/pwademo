const express = require('express');
const app = express();
const path = require('path');
app.use(express.static('./dist/chatbot'));
app.get('/*', function(req, res) {
  res.sendFile(path.join('./dist/chatbot/index.html'));
});
app.listen(process.env.PORT || 8080);