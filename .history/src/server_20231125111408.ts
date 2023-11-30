const mongoose = require('mongoose');

// main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

}

mongodb+srv://<username>:<password>@cluster0.bx3l1s2.mongodb.net/?retryWrites=true&w=majority
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })