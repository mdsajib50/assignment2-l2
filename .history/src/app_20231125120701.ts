import moduleName from 'e';
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

