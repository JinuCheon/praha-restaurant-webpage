const express = require('express');
const path = require('path');

const app = express();

app.set('port', process.env.PORT || 80);
app.use(express.static('static'));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './static/index.html'));
});

app.listen(app.get('port'), () => {
  console.log("server is running");
})
