import express from 'express'
import cors from 'cors'
const app = express()



// middleware use 
app.use(cors())
app.use(express.json())




app.get('/', (req, res) => {
  res.send('Hello World!')
})


export default app