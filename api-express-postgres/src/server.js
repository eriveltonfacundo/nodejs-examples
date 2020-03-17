const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require('./controllers/user.controller')(app);

app.listen(process.env.HTTP_PORT, process.env.HTTP_HOST, () => {
	console.log(`App running on.`);
});
