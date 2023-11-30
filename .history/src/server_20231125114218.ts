const mongoose = require('mongoose');

// main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.DA);

}

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })