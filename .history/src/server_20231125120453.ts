import config from "./app/config";

import mongose from 'mongoose';
const mongoose = require('mongoose');

// main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(config.database_url);

}

app.listen(config.port, () => {
    console.log(`Example app listening on port ${config.port}`)
  })