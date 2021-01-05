const express = require('express');

const appMain = express();
appMain.listen(3002, () => console.log("Listening at Port: 3002"));
appMain.use(express.static('serverNode'));

const app1 = express();
app1.listen(3000, () => console.log("Listening at Port: 3000"));
app1.use(express.static('serverNode/mod2Page2'));

const app2 = express();
app2.listen(3001, () => console.log("Listening at Port: 3001"));
app2.use(express.static('serverNode/mod2Page1'));
