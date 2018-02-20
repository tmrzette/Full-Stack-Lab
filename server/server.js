let express = require('express');
let cors = require('cors');
let apiRoutes = require('./routes');
let path = require('path');

let clientPath = path.join(__dirname, '../client');

let app = express();

app.use(cors());

app.use(express.json());

app.use('/api', apiRoutes);

app.use(express.static(path.join(__dirname, "../client")));

app.listen(3000);