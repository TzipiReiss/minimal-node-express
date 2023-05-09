// import express from 'express'
// import cors from 'cors'
// import bodyParser from 'body-parser';
var express = require('express');
const app = express();
const sdk = require('api')('@render-api/v1.0#dnrc1ulf088q9j');
const port = 3000
// app.use(cors());
// app.use(bodyParser.json());

app.get("/", (req, res) => {
    sdk.auth('rnd_DSG850Fp9dgj5axph7x72Qi7Jjdm');
    sdk.getServices({limit: '20'})
      .then(({ data }) => res.send(data))
      .catch(err => console.error(err));
})

app.listen(port, () => {
    console.log('Example app listening on http://localhost:3000');
})