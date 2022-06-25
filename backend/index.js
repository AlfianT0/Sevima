const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const kelasRouter = require("./api/kelas/kelas.router");
app.use("/api/kelas", kelasRouter);
 
const operatorRouter = require("./api/operator/operator.router");
app.use("/api/operator",operatorRouter);
 
const memberRouter = require("./api/member/member.router");
app.use("/api/member", memberRouter);

const port = 4000;
app.listen(port, function () {
    console.log('Server listening on port ' + port);
});