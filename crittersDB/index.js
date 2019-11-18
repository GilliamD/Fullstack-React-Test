const express = require('express');
const cors = require('cors');
const path = require('path');
const CrittersModel = require('../crittersDB/models/crittersModel')

const app = express();
app.use(cors());
// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// An api endpoint that returns a short list of items
app.get('/api/getList', (req,res) => {
    var list = ["item1", "item2", "item3"];
    res.json(list);
    console.log('Sent list of items');
});

app.get('/' ,async (req, res) => {
    const crittersmodel = await CrittersModel.getall();

    res.status(200).json(crittersmodel);
});



// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);