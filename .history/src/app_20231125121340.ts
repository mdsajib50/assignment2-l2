import express, { Request } from 'express';
const app = express()
const port = 3000

app.get('/', (req :Request, res: r) => {
  res.send('Hello World!')
})

