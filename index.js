// import express from 'express'
// import cors from 'cors'
// import bodyParser from 'body-parser';
<<<<<<< HEAD
// var express = require('express');
// const app = express();
const sdk = require('api')('@render-api/v1.0#dnrc1ulf088q9j');
// const port = 3000
// app.use(cors());
// app.use(bodyParser.json());

// app.get("/", (req, res) => {
=======
 var express = require('express');
 const app = express();
const sdk = require('api')('@render-api/v1.0#dnrc1ulf088q9j');
const PORT = process.env.PORT || 8081;
// app.use(cors());
// app.use(bodyParser.json());

 app.get("/", (req, res) => {
>>>>>>> 2cfc1ec64f2a93e78d9689006f47a6f061465ca9
    sdk.auth('rnd_DSG850Fp9dgj5axph7x72Qi7Jjdm');
    sdk.getServices({limit: '20'})
      .then(({ data }) => console.log(data))
      .catch(err => console.error(err));
<<<<<<< HEAD
// })

// app.listen(port, () => {
//     console.log('Example app listening on http://localhost:3000');
// })
=======
 })

 app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
 })
>>>>>>> 2cfc1ec64f2a93e78d9689006f47a6f061465ca9
