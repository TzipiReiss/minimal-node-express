// import express from 'express'
// import cors from 'cors'
// import bodyParser from 'body-parser';
var express = require('express');
const app = express();
const sdk = require('api')('@render-api/v1.0#dnrc1ulf088q9j');
const PORT = process.env.PORT || 8081;
// app.use(cors());
// app.use(bodyParser.json());

  app.get("/",async (req, res) => {
    sdk.auth('rnd_DSG850Fp9dgj5axph7x72Qi7Jjdm');
    sdk.getServices({limit: '20'})
      .then(({ data }) =>  res.json(data))
      .catch(err => console.error(err));
 })

 app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
 })
