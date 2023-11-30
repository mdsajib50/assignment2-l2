const mongoose = require('mongoose');

// main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.DATABASE_URL);

}

app.listen(PRO, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
  })