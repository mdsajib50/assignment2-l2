import express from 'express';
const app = express()
const port = 3000

app.get('/', (req : requ, res) => {
  res.send('Hello World!')
})

