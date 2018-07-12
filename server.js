const express = require('express');
const app = express();
const methodOverride = require('method-override');
app.use(methodOverride('_method'));
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
const port = 3000;

const tallOnesController = require('./controllers/tallOnesController.js');

app.get('/', (req, res)=> {
	res.redirect('/TallOnes');
})

app.use('/TallOnes', tallOnesController);

app.listen(port, () => {
	console.log('I am listening on port' + port);
});